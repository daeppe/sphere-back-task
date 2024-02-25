"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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

// src/user/controller.ts
var controller_exports = {};
__export(controller_exports, {
  UserController: () => UserController
});
module.exports = __toCommonJS(controller_exports);

// src/user/service.ts
var bcrypt = __toESM(require("bcrypt"));

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserController
});
