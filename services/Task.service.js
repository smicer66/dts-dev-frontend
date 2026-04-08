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


