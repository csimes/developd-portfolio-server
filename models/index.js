const { sequelize, syncDb } = require("../db");
const { DataTypes } = require("sequelize");

/* Model Functions */
const DefineProject = require("./Project");
const DefineSkill = require("./Skill")

/* Model Definitions */
const Project = DefineProject(sequelize, DataTypes);
const Skill = DefineSkill(sequelize, DataTypes)

/* Sync - this will have sequelize test the connection to the database */
syncDb(sequelize, { alter: true });

module.exports = { Project, Skill };
