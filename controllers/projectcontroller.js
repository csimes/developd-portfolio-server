const router = require("express").Router();
const { Project } = require("../models");
const { UniqueConstraintError } = require("sequelize/lib/errors");

/* Routes */
/* Test */
router.get("/test", (req, res) => {
  res.send("Hello from the projects route");
});

/* Create */
router.post("/new", async (req, res) => {
  let {
    projectName,
    projectSummary,
    imageUrl,
    projectUrl,
    githubUrl,
    inProgress,
  } = req.body;
  try {
    const newProject = await Project.create({
      projectName,
      projectSummary,
      imageUrl,
      projectUrl,
      githubUrl,
      inProgress,
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

/* Read (All Projects) */
router.get("/allprojects", async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.status(200).json({ projects: projects });
  } catch (err) {
    res.status(500).json({
      message: `No projects found. ${err}`,
    });
  }
});

/* Update */
router.put("/update/:id", async (req, res) => {
  let {
    projectName,
    projectSummary,
    imageUrl,
    projectUrl,
    githubUrl,
    inProgress,
  } = req.body;
  const { id } = req.params;

  const updatedProject = {
    projectName,
    projectSummary,
    imageUrl,
    projectUrl,
    githubUrl,
    inProgress,
  };
  const query = {
    where: {
      id: id,
    },
  };

  try {
    const update = await Project.update(updatedProject, query);
    res.status(200).json({
      message: "Project successfully updated!",
      updatedProject: updatedProject,
    });
  } catch (err) {
    if (err instanceof UniqueConstraintError) {
      res.status(409).json({
        message: "Project name, GitHub URL, and Project URL must be unique.",
      });
    }
    res.status(500).json({
      message: `Unable to update project. ${err}`,
    });
  }
});

/* Delete */
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const deletedProject = {
    where: {
      id: id,
    },
  };
  try {
    await Project.destroy(deletedProject);
    res.status(200).json({
      message: `Project ${deletedProject} successfully deleted!`,
    });
  } catch (err) {
    res.status(500).json({
      message: `Unable to delete project. ${err}`,
    });
  }
});

/* must use to connect middleware and avoid TypeError */
module.exports = router;
