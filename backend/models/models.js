const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Questions = sequelize.define("questions", {
  QuestionId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  QuestionText: { type: DataTypes.STRING, allowNull: false },
  BlockId: { type: DataTypes.INTEGER, allowNull: false },
});

const Answers = sequelize.define("answers", {
  AnswerId: { type: DataTypes.INTEGER, primaryKey: true },
  QuestionId: { type: DataTypes.INTEGER, allowNull: false },
  AnswerText: { type: DataTypes.STRING, allowNull: false },
});


