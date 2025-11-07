"use strict";

// Array som indeholder js objekter
// Indgangsnøgle klasserne fra html
const carInfo = [
  {
    className: "car1",
    carBrand: "Ford",
    carModel: "Mustang",
    releaseYear: 1974,
    color: "red",
    fuelType: "Diesel"
  },
  {
    className: "car3",
    carBrand: "Mazda",
    carModel: 2,
    releaseYear: 1999,
    color: "sky blue",
    fuelType: "Benzin"
  },
  {
    className: "car2",
    carBrand: "Fobold",
    carModel: "AGF",
    releaseYear: 2020,
    color: "blue and white",
    fuelType: "kom så de hviiie"
  }
];


// Venter med at køre js koden indtil hele HTML siden er indlæst/loaded
document.addEventListener("DOMContentLoaded", () => {
  
  // Finder tooltip id og gemmer det i en variabel
  const tooltip = document.getElementById("tooltip");
  
  // Funktion der viser tooltip med bil oplysninger
  // Parameter: html = indeholder den tekst som er i html-tagsne
  function showTooltip(html){
    if (tooltip) {
      // Indsætter teksten i tooltippen
      tooltip.innerHTML = html;
      // Gør tooltippen synlig med css klassen
      tooltip.classList.add("is-visible");

      setTimeout(function(){
        tooltip.classList.remove("is-visible");
      },8000);
    }
  }
  
carInfo.forEach((car) => {
  // elem tager fat om en af bilerne
  document.querySelectorAll("." + car.className).forEach((elem) => {
    elem.addEventListener("mouseover", () => {
      // Template literals = back ticks
      const carDetails = `
      <strong>${car.carBrand} </strong>
      <br>
      Model: ${car.carModel}
      <br>
      Release year: ${car.releaseYear}
      <br>
      Color: ${car.color}
      <br>
      Fuel type: ${car.fuelType}
      `;
      // ShowTooltip er en funktion fra tidligere, forventer en parameter som vi her henter fra carDetails
      showTooltip(carDetails)
    });
  });
});,


// Nedenstående er forsøg på de objekter jeg selv har indsat (bus, rød panda og eagle)
const extrasInfo = [
  {
    extraName: "car4",
    extraColor:
  },
  {
    extraName: "panda"
  },
  {
    extraName: "eagles"
  }
]


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

