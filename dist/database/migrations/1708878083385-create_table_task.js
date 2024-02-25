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

// src/database/migrations/1708878083385-create_table_task.ts
var create_table_task_exports = {};
__export(create_table_task_exports, {
  CreateTableTask1708878083385: () => CreateTableTask1708878083385
});
module.exports = __toCommonJS(create_table_task_exports);
var CreateTableTask1708878083385 = class {
  up(queryRunner) {
    return __async(this, null, function* () {
      queryRunner.query(`CREATE TABLE public.task (
            id uuid DEFAULT uuid_generate_v4() NOT NULL,
            title varchar(100) NOT NULL,
            deadline date NOT NULL,
            description text NOT NULL,
            "isCompleted" bool DEFAULT false NOT NULL,
            "userId" uuid NULL,
            CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY (id),
            CONSTRAINT "FK_f316d3fe53497d4d8a2957db8b9" FOREIGN KEY ("userId") REFERENCES public."user"(id)
        );`);
    });
  }
  down(queryRunner) {
    return __async(this, null, function* () {
      queryRunner.query(`
        drop table public.task
        `);
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateTableTask1708878083385
});
