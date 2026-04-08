var session = require('express-session');
var http = require('http');
var querystring = require('querystring');
const request = require('request').defaults({jar: true});
const moment = require('moment');
//const handlebars=require('handlebars');
//var fetch = require("node-fetch");




exports.getTaskList =  function getTaskList(req, res, next, callback){
	
	const response = request({
		url: 'http://localhost:4000/api/v1/case-worker-tasks/get-all-tasks',
		method: "GET"
	}, function (error, response, body) {
		
		var taskList = [];
		var bodyJS = JSON.parse(body);
		if(bodyJS.apiStatusCode==0)
		{
			taskList = bodyJS.data;
		}
		else
		{
			taskList = [];
		}
		
		
		return callback(null, taskList);
		
	});
	
}


exports.getDeleteTask =  function getTaskList(req, res, next, callback){
	var id = req.params.id;
	const response = request({
		url: 'http://localhost:4000/api/v1/case-worker-tasks/delete-task/' + id,
		method: "GET"
	}, function (error, response, body) {
		
		var taskList = [];
		var bodyJS = JSON.parse(body);
		if(bodyJS.apiStatusCode==0)
		{
			res.redirect('/admin/list-all-tasks');
		}
		else
		{
			res.redirect('/admin/list-all-tasks');
		}
		
		
	});
	
}


exports.postCreateNewTask = async function(req, res, next){
	
	var allData = req.body;
	console.log(allData);
	var title = allData.title;
	var description = allData.description;
	var dueDate = allData.dueDate;
	//var dueDateArray = dueDate.split(' ');
	//dueDate = dueDateArray[0] + 'T' + dueDateArray[1] + ':00';
	var taskStatus = allData.taskStatus;
	console.log(dueDate+':00');
	
	
	
	
	return new Promise((resolve, reject) => {
		request({
			url: 'http://localhost:4000/api/v1/case-worker-tasks/create-new-task',
			method: "POST",
			//headers: {"Authorization": "Bearer " + req.session.token},
			json: {
				title: title,
				description: description,
				dueDateTime: (dueDate+':00'),
				taskStatus: taskStatus
				
			}
		}, function (error, response, body) {
			//console.log([error, response, body]);
			//console.log(response.statusCode);
			if (error) {
				return reject(error);
			}
			if (!error && response.statusCode === 201) {
				console.log(body);
				return resolve(body);
			}
			else {

				return reject(body)
			}
		});
	});
}



exports.postEditTask = async function(req, res, next){
	
	var allData = req.body;
	console.log(allData);
	var title = allData.title;
	var description = allData.description;
	var dueDate = allData.dueDate;
	//var dueDateArray = dueDate.split(' ');
	//dueDate = dueDateArray[0] + 'T' + dueDateArray[1] + ':00';
	var taskStatus = allData.taskStatus;
	var taskId = req.params.id;
	console.log(dueDate+':00');
	
	
  
	return new Promise((resolve, reject) => {
		request({
			url: 'http://localhost:4000/api/v1/case-worker-tasks/update-task',
			method: "POST",
			//headers: {"Authorization": "Bearer " + req.session.token},
			json: {
				title: title,
				description: description,
				dueDateTime: (dueDate+':00'),
				taskStatus: taskStatus,
				taskId: taskId
				
			}
		}, function (error, response, body) {
			//console.log([error, response, body]);
			//console.log(response.statusCode);
			if (error) {
				return reject(error);
			}
			if (!error && response.statusCode === 200) {
				console.log(body);
				return resolve(body);
			}
			else {

				return reject(body)
			}
		});
	});
}




exports.getTaskById = async function(req, res, next){
	
	var id = req.params.id;
	const taskStatus = {
		ADJOURNED: 'Adjourned',
		APPEAL_FILED: 'Appeal Filed',
		CLOSED: 'Case Closed',
		DISMISSED: 'Dismissed',
		FILED: 'Filed',
		JUDGEMENT_GIVEN: 'Judgment Given',
		PENDING: 'Pending',
		PRE_TRIAL: 'Pre-Trial',
		SETTLED: 'Settled',
		ACTIVE_TRIAL: 'Under Investigation'
	};
	
  
	const response = await request({
		url: 'http://localhost:4000/api/v1/case-worker-tasks/get-task-by-id/' + id,
		method: "GET",
		//headers: {"Authorization": "Bearer " + req.session.token},
	}, function (error, response, body) {
		//console.log([error, response, body]);
		//console.log(response.statusCode);
        if (!error && response.statusCode === 200) {
			var bodyJS = body;
			bodyJS = JSON.parse(bodyJS);
			bodyJS = bodyJS.data;
            console.log(bodyJS);
			res.render('admin/tasks/edit-task', {bodyJS, taskStatus});
			
        }
        else {

            console.log(body);
			var errors = body.errors;
			console.log(errors);
			return;
        }
    });

	return;
}