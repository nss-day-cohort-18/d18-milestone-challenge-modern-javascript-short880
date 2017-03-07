"use strict";

var app = angular.module("RobotDome", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
	// Doctor or Client Selection Page
		.when('/', {
		templateUrl: "partials/userSelection.html",
		})
		.when('/patientList', {
   	templateUrl: "partials/patientList.html",
   	controller: "PatientCtrl"
 		})
		.when('/doctorList', {
   	templateUrl: "partials/doctorList.html",
   	controller: "DocCtrl"
 	});
});
