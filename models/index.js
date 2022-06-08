const { sequelize, syncDb } = require("../db");
const { DataTypes } = require("sequelize");

const Project = require("./Project");

/* Sync - this will have sequelize test the connection to the database */
syncDb(sequelize, { alter: true });

module.exports = { Project };
