import allData from "./data/pokemon/pokemon.js"
import { allFilters, filterOrder } from "./data.js"

const mainData = allData.pokemon;
let pokeData = allData.pokemon;

export const pokemonCard = (mainData) => {
  let pokemonContainer = document.getElementById("containerPokemon");
  let displayPokemon = document.createElement("div");
  displayPokemon.className = 'pokeDiv';
  pokemonContainer.appendChild(displayPokemon);

  let displayImg = document.createElement("img");
  displayImg.className = 'pokeImg';
  displayImg.src = mainData.img;
  displayPokemon.appendChild(displayImg)

  let pokemonBasicInfo = document.createElement("div");
  pokemonBasicInfo.className = 'pokemonInfo';
  let pokemonNumName = document.createElement("h3");
  pokemonNumName.innerHTML = "#" + mainData.num + " " + mainData.name;
  pokemonBasicInfo.appendChild(pokemonNumName);
  displayPokemon.appendChild(pokemonBasicInfo);

  let type = document.createElement("h4");
  type.className = 'pokemonType';
  let pokemonTypes = mainData.type;
  type.innerHTML = pokemonTypes;
  displayPokemon.appendChild(type);
};

mainData.map(currentPokemon => {
  pokemonCard(currentPokemon);

});

// //FILTROS

// let selectGen = document.getElementById("generation");
// let selectType = document.getElementById("type");
// let selectWeakness = document.getElementById("weaknessPokemon");
// let selectRarity = document.getElementById("pokemonRarity");
// let selectOrder = document.getElementById("sortMenu");


// //FILTRO GENERACIÓN/REGIÓN 

// selectGen.addEventListener("change", (e) => {
//   let selectedGeneration = e.target.value;
//   let selectedType = selectType.value;
//   let selectedWeakness = selectWeakness.value;
//   let selectedRarity = selectRarity.value;

//   pokeData = allFilters(mainData,selectedGeneration, selectedType, selectedWeakness, selectedRarity);
//   document.getElementById("containerPokemon").innerHTML = "";
//   pokeData.forEach(currentPokemon => {
//     pokemonCard(currentPokemon);
//   });
// });

//FILTRO TIPO DE POKEMON

// selectType.addEventListener("change", (e) => {
//   let selectedType = e.target.value;
//   let selectedGeneration = selectGen.value;
//   let selectedWeakness = selectWeakness.value;
//   let selectedRarity = selectRarity.value;

//   pokeData = allFilters(mainData,selectedGeneration, selectedType, selectedWeakness, selectedRarity);
//   document.getElementById("containerPokemon").innerHTML = "";
//   pokeData.forEach(currentPokemon => {
//     pokemonCard(currentPokemon);
//   });
// });

// //FILTRO DEBILIDAD

// selectWeakness.addEventListener("change", (e) => {
//   let selectedWeakness = e.target.value;
//   let selectedGeneration = selectGen.value;
//   let selectedType = selectType.value;
//   let selectedRarity = selectRarity.value;

//   pokeData = allFilters(mainData,selectedGeneration, selectedType, selectedWeakness, selectedRarity);
//   document.getElementById("containerPokemon").innerHTML = "";
//   pokeData.forEach(currentPokemon => {
//     pokemonCard(currentPokemon)
//   });
// });


// //FILTRO RAREZA

// selectRarity.addEventListener("change", (e) => {
//   let selectedRarity = e.target.value;
//   let selectedGeneration = selectGen.value;
//   let selectedType = selectType.value;
//   let selectedWeakness = selectWeakness.value;

//   pokeData = allFilters(mainData, selectedGeneration, selectedType, selectedWeakness, selectedRarity);
//   document.getElementById("containerPokemon").innerHTML = "";
//   pokeData.forEach(currentPokemon => {
//     pokemonCard(currentPokemon)
//   });
// });

// //ORDENAR DE A-Z Y Z-A

// selectOrder.addEventListener("change", (e) => {
//   let sortOrder = e.target.value;
//   pokeData = filterOrder(pokeData, sortOrder);
//   document.getElementById("containerPokemon").innerHTML = "";
//   pokeData.forEach(currentPokemon => {
//     pokemonCard(currentPokemon)
//   });
// });

// /*const filters ={
//   gen:valor
//   type:Valor
// }*/

//FILTROS 
let selectGen = document.getElementById("generation");
let selectType = document.getElementById("type");
let selectWeakness = document.getElementById("weaknessPokemon");
let selectRarity = document.getElementById("pokemonRarity");
let selectOrder = document.getElementById("sortMenu");

const Onchange  = () => {
  let selectedRarity = document.getElementById("pokemonRarity").value;
  let selectedGeneration = document.getElementById("generation").value;
  let selectedType = document.getElementById("type").value;
  let selectedWeakness = document.getElementById("weaknessPokemon").value;

  pokeData = allFilters(mainData, selectedGeneration, selectedType, selectedWeakness, selectedRarity);
  document.getElementById("containerPokemon").innerHTML = "";
  pokeData.forEach(currentPokemon => {
    pokemonCard(currentPokemon)
  })};

selectGen.addEventListener("change", Onchange);

selectType.addEventListener("change", Onchange);

selectWeakness.addEventListener("change", Onchange);

selectRarity.addEventListener("change", Onchange);

//ORDENAR DE A-Z Y Z-A

selectOrder.addEventListener("change", (e) => {
  let sortOrder = e.target.value;
  pokeData = filterOrder(pokeData, sortOrder);
  document.getElementById("containerPokemon").innerHTML = "";
  pokeData.forEach(currentPokemon => {
    pokemonCard(currentPokemon)
  });
});