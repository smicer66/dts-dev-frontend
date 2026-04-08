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
