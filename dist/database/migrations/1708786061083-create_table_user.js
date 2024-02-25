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

// src/database/migrations/1708786061083-create_table_user.ts
var create_table_user_exports = {};
__export(create_table_user_exports, {
  CreateTableUser1708786061083: () => CreateTableUser1708786061083
});
module.exports = __toCommonJS(create_table_user_exports);
var CreateTableUser1708786061083 = class {
  up(queryRunner) {
    return __async(this, null, function* () {
      queryRunner.query(`CREATE TABLE public."user" (
            id uuid DEFAULT uuid_generate_v4() NOT NULL,
            name varchar(100) NOT NULL,
            email text NOT NULL,
            "password" text NOT NULL,
            CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id)
        );`);
    });
  }
  down(queryRunner) {
    return __async(this, null, function* () {
      queryRunner.query(`
        drop table public.user
        `);
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateTableUser1708786061083
});
