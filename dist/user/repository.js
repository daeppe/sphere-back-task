"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/user/repository.ts
var repository_exports = {};
__export(repository_exports, {
  UserRepository: () => UserRepository
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

// src/database/entities/user.entity.ts
var import_class_validator = require("class-validator");
var import_typeorm3 = require("typeorm");

// src/database/entities/task.entity.ts
var import_typeorm2 = require("typeorm");
var Task = class {
};
__decorateClass([
  (0, import_typeorm2.PrimaryGeneratedColumn)("uuid")
], Task.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm2.Column)({
    type: "varchar",
    length: 100
  })
], Task.prototype, "title", 2);
__decorateClass([
  (0, import_typeorm2.Column)("date")
], Task.prototype, "deadline", 2);
__decorateClass([
  (0, import_typeorm2.Column)("text")
], Task.prototype, "description", 2);
__decorateClass([
  (0, import_typeorm2.Column)({ type: "boolean", default: false })
], Task.prototype, "isCompleted", 2);
__decorateClass([
  (0, import_typeorm2.ManyToOne)(() => User, (user) => user.tasks)
], Task.prototype, "user", 2);
Task = __decorateClass([
  (0, import_typeorm2.Entity)()
], Task);

// src/database/entities/user.entity.ts
var User = class {
};
__decorateClass([
  (0, import_typeorm3.PrimaryGeneratedColumn)("uuid")
], User.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm3.Column)({
    type: "varchar",
    length: 100
  })
], User.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm3.Column)("text"),
  (0, import_class_validator.IsEmail)()
], User.prototype, "email", 2);
__decorateClass([
  (0, import_typeorm3.Column)("text")
], User.prototype, "password", 2);
__decorateClass([
  (0, import_typeorm3.OneToMany)(() => Task, (task) => task.user)
], User.prototype, "tasks", 2);
User = __decorateClass([
  (0, import_typeorm3.Entity)()
], User);

// src/user/repository.ts
var UserRepository = class {
  constructor() {
    this.userDb = PostgresDataSource.getRepository(User);
  }
  create(user) {
    return __async(this, null, function* () {
      return this.userDb.save(user);
    });
  }
  findByEmail(email) {
    return __async(this, null, function* () {
      const user = yield this.userDb.findOne({ where: { email } });
      return user || void 0;
    });
  }
  login(email) {
    return __async(this, null, function* () {
      return this.findByEmail(email);
    });
  }
  update(id, userData) {
    return __async(this, null, function* () {
      yield this.userDb.update(id, userData);
    });
  }
  delete(id) {
    return __async(this, null, function* () {
      yield this.userDb.delete(id);
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserRepository
});
