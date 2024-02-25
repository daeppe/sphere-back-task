"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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

// src/server.ts
var import_config = require("dotenv/config");
var import_express4 = __toESM(require("express"));

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

// src/route.ts
var import_express3 = __toESM(require("express"));

// src/user/route.ts
var import_express = require("express");

// src/user/service.ts
var bcrypt = __toESM(require("bcrypt"));

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

// src/user/service.ts
var UserService = class {
  constructor() {
    this.userRepository = new UserRepository();
  }
  createUser(user) {
    return __async(this, null, function* () {
      if (!user.name || !user.email || !user.password) {
        throw new Error("Todos os campos (name, email e password) s\xE3o obrigat\xF3rios para criar um novo usu\xE1rio.");
      }
      const existingUser = yield this.userRepository.findByEmail(user.email);
      if (existingUser) {
        throw new Error("O e-mail j\xE1 est\xE1 sendo usado por outro usu\xE1rio.");
      }
      const hashedPassword = yield bcrypt.hash(user.password, 10);
      const newUser = {
        name: user.name,
        email: user.email,
        password: hashedPassword
      };
      const userOutput = yield this.userRepository.create(newUser);
      const _a = userOutput, { password } = _a, userWithoutPassword = __objRest(_a, ["password"]);
      return userWithoutPassword;
    });
  }
  findByEmail(email) {
    return __async(this, null, function* () {
      return this.userRepository.findByEmail(email);
    });
  }
  login(email, passwordInput) {
    return __async(this, null, function* () {
      const user = yield this.findByEmail(email);
      if (!user) {
        throw new Error("Usu\xE1rio n\xE3o encontrado.");
      }
      if (!passwordInput) {
        throw new Error("Senha n\xE3o preenchida.");
      }
      const isPasswordMatch = yield bcrypt.compare(passwordInput, user.password);
      if (!isPasswordMatch) {
        throw new Error("Senha est\xE1 incorreta");
      }
      const userOutput = yield this.userRepository.login(email);
      const _a = userOutput, { password } = _a, userWithoutPassword = __objRest(_a, ["password"]);
      return userWithoutPassword;
    });
  }
  update(email, userData) {
    return __async(this, null, function* () {
      const oldUser = yield this.findByEmail(email);
      yield this.userRepository.update(oldUser.id, userData);
      const newUser = yield this.findByEmail(email);
      const _a = newUser, { password } = _a, userWithoutPassword = __objRest(_a, ["password"]);
      return userWithoutPassword;
    });
  }
  delete(email) {
    return __async(this, null, function* () {
      const user = yield this.findByEmail(email);
      if (!user) {
        throw new Error("Usu\xE1rio n\xE3o encontrado.");
      }
      return this.userRepository.delete(user.id);
    });
  }
};

// src/user/controller.ts
var userService = new UserService();
var UserController = class {
  create(request, response) {
    return __async(this, null, function* () {
      try {
        const output = yield userService.createUser(request.userData);
        response.json(output);
      } catch (error) {
        response.status(400).json(error.message);
      }
    });
  }
  login(request, response) {
    return __async(this, null, function* () {
      try {
        const { email, password } = request.userData;
        const output = yield userService.login(email, password);
        return response.json(output);
      } catch (error) {
        return response.status(404).json(error.message);
      }
    });
  }
  update(request, response) {
    return __async(this, null, function* () {
      try {
        const { email } = request.userData;
        const output = yield userService.update(email, request.body);
        response.json(output);
      } catch (error) {
        response.json(error.message);
      }
    });
  }
  delete(request, response) {
    return __async(this, null, function* () {
      try {
        const { email } = request.userData;
        const output = yield userService.delete(email);
        response.status(204).json(output);
      } catch (error) {
        response.status(404).json(error.message);
      }
    });
  }
};

// src/middleware/extractUserData.ts
function extractUserData(request, response, next) {
  const { email, password, id, name, tasks } = request.body;
  request.userData = { email, password, id, name, tasks };
  next();
}

// src/user/route.ts
var userRouter = (0, import_express.Router)();
var userController = new UserController();
userRouter.use(extractUserData);
userRouter.route("/create").post(userController.create);
userRouter.route("/login").post(userController.login);
userRouter.route("/update").patch(userController.update);
userRouter.route("/delete").delete(userController.delete);

// src/tasks/route.ts
var import_express2 = require("express");

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

// src/tasks/service.ts
var TaskService = class {
  constructor() {
    this.taskRepository = new TaskRepository();
  }
  createTask(task) {
    return __async(this, null, function* () {
      return this.taskRepository.create(task);
    });
  }
  findTaskCompleted(userId) {
    return __async(this, null, function* () {
      return this.taskRepository.findTaskCompleted(userId);
    });
  }
  findTaskNotCompleted(userId) {
    return __async(this, null, function* () {
      return this.taskRepository.findTaskNotCompleted(userId);
    });
  }
  toComplete(task) {
    return __async(this, null, function* () {
      return this.taskRepository.toComplete(task);
    });
  }
  delete(taskId) {
    return __async(this, null, function* () {
      const task = yield this.taskRepository.findtask(taskId);
      if (!task) {
        throw new Error("Task n\xE3o encontrado.");
      }
      yield this.taskRepository.delete(taskId);
    });
  }
};

// src/tasks/controller.ts
var taskService = new TaskService();
var TaskController = class {
  createTask(request, response) {
    return __async(this, null, function* () {
      try {
        const output = yield taskService.createTask(request.taskData);
        response.json(output);
      } catch (error) {
        response.status(400).json(error.message);
      }
    });
  }
  findTaskCompleted(request, response) {
    return __async(this, null, function* () {
      try {
        const { user } = request.taskData;
        const output = yield taskService.findTaskCompleted(String(user));
        response.json(output);
      } catch (error) {
        response.status(400).json(error.message);
      }
    });
  }
  findTaskNotCompleted(request, response) {
    return __async(this, null, function* () {
      try {
        const { user } = request.taskData;
        const output = yield taskService.findTaskNotCompleted(String(user));
        response.json(output);
      } catch (error) {
        response.status(400).json(error.message);
      }
    });
  }
  toComplete(request, response) {
    return __async(this, null, function* () {
      try {
        const output = yield taskService.toComplete(request.taskData);
        response.json(output);
      } catch (error) {
        response.status(400).json(error.message);
      }
    });
  }
  delete(request, response) {
    return __async(this, null, function* () {
      try {
        const { id } = request.taskData;
        const output = yield taskService.delete(id);
        response.status(204).json(output);
      } catch (error) {
        response.status(400).json(error.message);
      }
    });
  }
};

// src/middleware/extractTaskData.ts
function extractTaskData(request, response, next) {
  const { title, deadline, description, isCompleted, user, id } = request.body;
  request.taskData = { title, deadline, description, isCompleted, user, id };
  next();
}

// src/tasks/route.ts
var taskRouter = (0, import_express2.Router)();
var taskController = new TaskController();
taskRouter.use(extractTaskData);
taskRouter.route("/create").post(taskController.createTask);
taskRouter.route("/findtaskcompleted").get(taskController.findTaskCompleted);
taskRouter.route("/findtasknotcompleted").get(taskController.findTaskNotCompleted);
taskRouter.route("/tocomplete").patch(taskController.toComplete);
taskRouter.route("/delete").delete(taskController.delete);

// src/route.ts
var appRouter = (0, import_express3.default)();
appRouter.use("/user", userRouter);
appRouter.use("/task", taskRouter);

// src/server.ts
var SERVER_PORT = process.env.SERVER_PORT || void 0;
var app = (0, import_express4.default)();
app.use(import_express4.default.json());
app.use("/api", appRouter);
app.get("/", (req, res) => {
  res.json(`Projeto Sphere Back Task, ${Date()}`);
});
PostgresDataSource.initialize().then(() => {
  console.log("Data Source has been initialized!");
  app.listen(SERVER_PORT, () => {
    console.log(`Projeto Sphere Back Task rodando na porta ${SERVER_PORT}`);
  });
}).catch((error) => {
  console.error("Error during Data Source initialization:", error);
});
