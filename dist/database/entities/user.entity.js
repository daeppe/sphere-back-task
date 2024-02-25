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

// src/database/entities/user.entity.ts
var user_entity_exports = {};
__export(user_entity_exports, {
  User: () => User
});
module.exports = __toCommonJS(user_entity_exports);
var import_class_validator = require("class-validator");
var import_typeorm2 = require("typeorm");

// src/database/entities/task.entity.ts
var import_typeorm = require("typeorm");
var Task = class {
};
__decorateClass([
  (0, import_typeorm.PrimaryGeneratedColumn)("uuid")
], Task.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm.Column)({
    type: "varchar",
    length: 100
  })
], Task.prototype, "title", 2);
__decorateClass([
  (0, import_typeorm.Column)("date")
], Task.prototype, "deadline", 2);
__decorateClass([
  (0, import_typeorm.Column)("text")
], Task.prototype, "description", 2);
__decorateClass([
  (0, import_typeorm.Column)({ type: "boolean", default: false })
], Task.prototype, "isCompleted", 2);
__decorateClass([
  (0, import_typeorm.ManyToOne)(() => User, (user) => user.tasks)
], Task.prototype, "user", 2);
Task = __decorateClass([
  (0, import_typeorm.Entity)()
], Task);

// src/database/entities/user.entity.ts
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  User
});
