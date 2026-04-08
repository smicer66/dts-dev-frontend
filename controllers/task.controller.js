var TaskService = require("../services/task.service");


exports.getTaskList = async function(req, res, next) {
	try {
		await TaskService.getTaskList(req, res, next, (err, taskList)=>{
			console.log(taskList);
			
			return res.render('admin/tasks/task-list', { taskList: taskList });
		})
		
		

		
	} catch (err) {
		next(err);
	}
	
}


exports.getCreateNewTask = async function(req, res, next) {
	try {
		return res.render('admin/tasks/new-task');
		
	} catch (err) {
		next(err);
	}
	
}

exports.getEditTask = async function(req, res, next) {
	try {
		await TaskService.getTaskById(req, res, next);
		
	} catch (err) {
		next(err);
	}
	
}


exports.postCreateNewTask = async function(req, res, next) {
	try {
		await TaskService.postCreateNewTask(req, res, next, (err, newTaskResponse)=>{
			console.log(newTaskResponse);
			if(newTaskResponse.apiStatusCode==0)
			{
				res.redirect('/admin/list-all-tasks');
			}
		});
		
		
	} catch (err) {
		next(err);
	}
	
}