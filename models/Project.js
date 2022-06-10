module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define("project", {
    projectName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
      unique: true,
    },
    githubUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    inProgress: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
  return Project;
};
