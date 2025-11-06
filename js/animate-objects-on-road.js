"use strict";

// Array som indeholder js objekter
const carInfo = [
  {
    className: "car1",
    carBrand: "Ford",
    carModel: "Mustang",
    releaseYear: 1974,
    color: "red",
    fuelType: "Diesel",
  },
  {
    className: "car3",
    carBrand: "Mazda",
    carModel: 2,
    releaseYear: 1999,
    color: "sky blue",
    fuelType: "Benzin",
  },
  {
    className: "car2",
    carBrand: "Fobold",
    carModel: "AGF",
    releaseYear: 2020,
    color: "blue and white",
    fuelType: "kom så de hviiie",
  }
];


document.addEventListener("DOMContentLoaded", () => {
  
  
  
  
  
  // Hent DOM Elementer
  // Henter objekter
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
    redCar.addEventListener("click", function () {
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
  
});

