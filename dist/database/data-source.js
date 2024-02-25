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

// src/database/data-source.ts
var data_source_exports = {};
__export(data_source_exports, {
  PostgresDataSource: () => PostgresDataSource
});
module.exports = __toCommonJS(data_source_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PostgresDataSource
});
