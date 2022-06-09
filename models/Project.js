module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define("project", {
    projectName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    projectSummary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    projectUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    githubUrl: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Project;
};
