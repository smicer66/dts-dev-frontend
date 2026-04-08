var TaskService = require("../services/task.service");


exports.getTaskList = async function(req, res, next) {
	try {
		var client = req.session.client;
		client = JSON.parse(client);
	
		await TaskService.getTaskList(req, res, next, (err, taskList)=>{
			
			
			return res.render('admin/tasks/task-list', { taskList: taskList });
		})
		
		

		
	} catch (err) {
		next(err);
	}
	
}
