"use strict";
console.log("RobotFactory.js:");

/**************************
    -----To Do List-----

1) Create Robot (done)
2) Create types


****************************/

app.factory('RobotFactory', () => {

let Robot = {
  name: null,
  trait: null,
  damage: 10
}

let HeavyClass = Object.create(Robot);
HeavyClass.trait = "Bombard";
HeavyClass.type = "HeavyClass";

let AerialAssault = Object.create(Robot);
AerialAssault.trait = "Missile Strike";
AerialAssault.type = "AerialAssault";

let LightClass = Object.create(Robot);
LightClass.trait = "Speed Burst";
LightClass.type = "LightClass";



let RobotType = {};

RobotType.HeavyOne = Object.create(HeavyClass);
RobotType.HeavyOne.minHealth = 500;
RobotType.HeavyOne.maxHealth = 800;
RobotType.HeavyOne.baseDamage = 65;
RobotType.HeavyOne.model = "HeavyOne";
RobotType.Hacker.Image = "images/HeavyOne.jpg";

RobotType.HeavyOne = Object.create(HeavyClass);
RobotType.HeavyOne.minHealth = 550;
RobotType.HeavyOne.maxHealth = 900;
Robottype.HeavyOne.baseDamage = 50;
RobotType.HeavyOne.model = "HeavyTwo";
RobotType.Hacker.Image = "images/HeavyTwo.jpeg";

RobotType.AerialOne = Object.create(AerialAssault);
RobotType.AerialOne.minHealth = 400;
RobotType.AerialOne.Maxhealth = 800;
RobotType.AerialOne.baseDamage = 55;
RobotType.AerialOne.Model = "AerialOne";
RobotType.AerialOne.Image = "images/AerialOne.jpg";

RobotType.AerialTwo = Object.create(AerialTwo);
RobotType.AerialTwo.minHealth = 500;
RobotType.AerialTwo.maxHealth = 950;
RobotType.AerialOne.baseDamage = 65;
RobotType.AerialTwo.model = "AerialTwo";
RobotType.AerialTwo.Image = "images/AerialTwo.jpg";

RobotType.LightOne = Object.create(LightClass);
RobotType.LightOne.minhealth = 400;
RobotType.LightOne.maxHealth = 750;
RobotType.LightOne.baseDamage = 45;
RobotType.LightOne.model = "LightOne";
RobotType.LightOne.Image = "images/LightOne";

RobotType.LightTwo = Object.create(LightClass);
RobotType.LightTwo.minhealth = 400;
RobotType.LightTwo.maxHealth = 750;
RobotType.LightTwo.baseDamage = 45;
RobotType.LightTwo.model = "LightOne";
RobotType.LightTwo.Image = "images/LightOne";

let getBot = (x) => {
  return Bot[x];
};

return {getBot};

});
