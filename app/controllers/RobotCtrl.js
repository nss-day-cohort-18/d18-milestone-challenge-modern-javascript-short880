"use strict";
console.log("RobotCtrl.js:");

app.controller('RobotCtrl', function ($scope, RobotFactory) {

$scope.Classes = [
    {
        name : "HeavyClass",
        image : "images/Heavy.jpg",
        subClass: ["HeavyOne", "HeavyTwo"]
    },
    {
        name: "AerialAssault",
        image: "images/Flying.jpg",
        subClass: ["AerialOne", "AerialTwo"]
    },
    {
        name: "LightClass",
        image: "images/lightRobot.jpg",
        subClass: [
          {
          name : "LightOne",
          image : "images/LightOne.jpeg"
          },
          {
          name : "LightTwo",
          image : "images/LightTwo.jpg"
        }
        ]
    }
];
$scope.subClass = [];

$scope.ClassSelect = (e) => {
  console.log(e);
  $scope.subClass = e.subClass;
  console.log(e.subClass);
  console.log($scope.subClass);
    $('#subClassPopup').modal('show');
};

$scope.ModelSelect = (e) => {
  console.log(e);
}

});
