"use strict";

// Hent DOM Elementer 

const redCar = document.getElementById("red-car");
const policeCar = document.getElementById("police-car");
const blueCar = document.getElementById("blue-car");

const sun = document.querySelector(".sun");
const scene = document.querySelector(".scene");


// Opretter lydobjekter
const soundRedCar = new Audio();
soundRedCar.src = "../sound/red-car-horn.wav";

const soundPoliceCar = new Audio();
soundPoliceCar.src = "../sound/police-car-sound.wav";

const soundBlueCar = new Audio();
soundBlueCar.src = "../sound/blue-car-sound.wav";

if (redCar) {
  redCar.addEventListener("click", function() {
        soundRedCar.play();
    });
}

if (policeCar) {
  policeCar.addEventListener("click", function () {
    soundPoliceCar.play();
  });
}

if (blueCar) {
  blueCar.addEventListener("click", function () {
    soundBlueCar.play();
  });
}

if (sun && scene) {
    sun.addEventListener("click", function () {
        scene.classList.toggle("night");
    });
}



