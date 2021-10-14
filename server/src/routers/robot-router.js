const express = require("express");
const RobotRouter = express.Router();
const jsonParser = express.json();

RobotRouter.route("/setNew").post(jsonParser, (req, res, next) => {
  const { name, battery, cpu, disk, memory } = req.body;
  const newRobot = {
    name,
    battery,
    cpu,
    disk,
    memory,
  };

  for (const [key, value] of Object.entries(newRobot))
    if (value == null)
      return res.status(400).json({
        error: `Missing '${key}' in request body`,
      });

  console.log(
    `Robot's name: ${newRobot.name} \nBattery: ${newRobot.battery}\nCPU: ${newRobot.cpu}\nDisk: ${newRobot.disk}\nMemory: ${newRobot.memory}`
  );
  res.status(201);
  res.send("New Robot Created");
  next();
});

module.exports = RobotRouter;
