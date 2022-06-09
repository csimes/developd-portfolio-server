const router = require("express").Router();
const { Project } = require("../models");

router.get("", (req, res) => {
  res.send("Hello from the projects route");
});

router.post("/", async (req, res) => {
  let { projectName, projectSummary, imageUrl } = req.body;
  try {
    const newProject = await Project.create({
      projectName,
      projectSummary,
      imageUrl,
    });
    res.status(200).json({
      message: "Project has been successfully created!",
      newProject,
    });
  } catch (err) {
    res.status(500).json({
      message: `Unable to create project. ${err}`,
    });
  }
});

/* must use to connect middleware and avoid TypeError */
module.exports = router;
