"use strict";

var app = angular.module("RobotDome", ["ngRoute"]);


$('.content').hide();
$('.container').hover(

  // Over
  function(){
    $('.content').fadeIn();
  }
  ,
  // Out
  function(){
   $('.content').fadeOut();
  }
);


app.config(function($routeProvider) {
	$routeProvider
	// Doctor or Client Selection Page
		.when('/', {
		templateUrl: "partials/homePage.html",
    controller: "RobotCtrl"
		})
		.when('/patientList', {
   	templateUrl: "partials/patientList.html",
 		})
		.when('/doctorList', {
   	templateUrl: "partials/doctorList.html",
 	});
});
