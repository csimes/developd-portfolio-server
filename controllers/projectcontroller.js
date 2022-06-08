const Express = require("express");
const router = Express.Router();
const { ProjectModel } = require("../models");

router.post("/", async (req, res) => {
  const { name, summary, imageUrl } = req.body.project;
  const projectEntry = {
    name,
    summary,
    imageUrl,
  };
  try {
    const newProject = await ProjectModel.create(projectEntry);
    res.status(200).json(newProject);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get("/", async (req, res) => {
  const { id } = req.user;
  try {
    const projects = await ProjectModel.findAll({
      where: {
        id: id,
      },
    });
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});
