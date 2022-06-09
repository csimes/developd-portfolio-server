const { sequelize, syncDb } = require("../db");
const { DataTypes } = require("sequelize");

/* Model Functions */
const DefineProject = require("./Project");

/* Model Definitions */
const Project = DefineProject(sequelize, DataTypes);

/* Sync - this will have sequelize test the connection to the database */
syncDb(sequelize, { alter: true });

module.exports = { Project };
