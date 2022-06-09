module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define("skill", {
    html: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    css: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    javascript: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    typescript: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    react: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    next: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  return Skill;
};
