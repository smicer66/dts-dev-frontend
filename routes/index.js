var session = require('express-session');
var express = require('express');
var router = express.Router();

var TaskController = require("../controllers/task.controller");

function isAuthenticated (req, res, next) {
  if (req.session.token)
  {
	  next();
  }
  else{
	  console.log("Redirect to login page");
	  return res.redirect('/login');
  }
}


router.get("/admin/list-all-tasks", TaskController.getTaskList);

//router.post("/admin/create-new-task", TaskController.postCreateNewTask);



module.exports = router;
