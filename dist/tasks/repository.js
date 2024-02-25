"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/tasks/repository.ts
var repository_exports = {};
__export(repository_exports, {
  TaskRepository: () => TaskRepository
});
module.exports = __toCommonJS(repository_exports);

// src/database/data-source.ts
var import_typeorm = require("typeorm");
var DB_HOST = String(process.env.DB_HOST);
var DB_PORT = Number(process.env.DB_PORT);
var DB_USERNAME = String(process.env.DB_USERNAME);
var DB_PASSWORD = String(process.env.DB_PASSWORD);
var DB_DATABASE = String(process.env.DB_DATABASE);
var PostgresDataSource = new import_typeorm.DataSource({
  type: "postgres",
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  entities: [`${__dirname}/**/*.entity{.js,.ts}`],
  migrations: [`${__dirname}/migrations/*{.js,.ts}`],
  migrationsRun: true
});

// src/database/entities/task.entity.ts
var import_typeorm3 = require("typeorm");

// src/database/entities/user.entity.ts
var import_class_validator = require("class-validator");
var import_typeorm2 = require("typeorm");
var User = class {
};
__decorateClass([
  (0, import_typeorm2.PrimaryGeneratedColumn)("uuid")
], User.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm2.Column)({
    type: "varchar",
    length: 100
  })
], User.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm2.Column)("text"),
  (0, import_class_validator.IsEmail)()
], User.prototype, "email", 2);
__decorateClass([
  (0, import_typeorm2.Column)("text")
], User.prototype, "password", 2);
__decorateClass([
  (0, import_typeorm2.OneToMany)(() => Task, (task) => task.user)
], User.prototype, "tasks", 2);
User = __decorateClass([
  (0, import_typeorm2.Entity)()
], User);

// src/database/entities/task.entity.ts
var Task = class {
};
__decorateClass([
  (0, import_typeorm3.PrimaryGeneratedColumn)("uuid")
], Task.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm3.Column)({
    type: "varchar",
    length: 100
  })
], Task.prototype, "title", 2);
__decorateClass([
  (0, import_typeorm3.Column)("date")
], Task.prototype, "deadline", 2);
__decorateClass([
  (0, import_typeorm3.Column)("text")
], Task.prototype, "description", 2);
__decorateClass([
  (0, import_typeorm3.Column)({ type: "boolean", default: false })
], Task.prototype, "isCompleted", 2);
__decorateClass([
  (0, import_typeorm3.ManyToOne)(() => User, (user) => user.tasks)
], Task.prototype, "user", 2);
Task = __decorateClass([
  (0, import_typeorm3.Entity)()
], Task);

// src/tasks/repository.ts
var TaskRepository = class {
  constructor() {
    this.taskDb = PostgresDataSource.getRepository(Task);
  }
  create(task) {
    return __async(this, null, function* () {
      return this.taskDb.save(task);
    });
  }
  findTaskCompleted(userId) {
    return __async(this, null, function* () {
      const completedTask = yield this.taskDb.find({ where: { user: { id: userId }, isCompleted: true } });
      return completedTask;
    });
  }
  findTaskNotCompleted(userId) {
    return __async(this, null, function* () {
      const notCompletedTask = yield this.taskDb.find({ where: { user: { id: userId }, isCompleted: false } });
      return notCompletedTask;
    });
  }
  toComplete(task) {
    return __async(this, null, function* () {
      yield this.taskDb.update(task.id, __spreadProps(__spreadValues({}, task), { isCompleted: true }));
      const taskUpdated = yield this.taskDb.findOne({ where: { id: task.id } });
      return taskUpdated;
    });
  }
  findtask(id) {
    return __async(this, null, function* () {
      const task = yield this.taskDb.findOne({ where: { id } });
      return task;
    });
  }
  delete(taskId) {
    return __async(this, null, function* () {
      yield this.taskDb.delete(taskId);
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TaskRepository
});
