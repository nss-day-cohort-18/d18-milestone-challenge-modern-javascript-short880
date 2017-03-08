"use strict";
console.log("RobotFactory.js:");

/**************************
    -----To Do List-----

1) Create Robot (done)
2) Create types


****************************/

app.factory('GetFactory', () => {

let Robot = () => {
  this.name = null;
  this.type = null;
  this.health = null;
  this.model = null;
};

var HeavyAssault = new Robot ();



var AerialAssault = new Robot ();


var LightAssault = new Robot ();

});
