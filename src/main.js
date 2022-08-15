import allData from "./data/pokemon/pokemon.js"
import {filterType, filterGen, filterWeakness, filterRarity} from "./data.js"

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

let selectGen = document.getElementById("generation");
//change hace que cada vez que cambia algo en el input, se activa
// e = evento, target= se refiere al input, .value nos da el valor del input
selectGen.addEventListener("change", (e) => {
  let selectedGeneration = e.target.value;
  pokeData = filterGen(mainData,selectedGeneration);
    document.getElementById("containerPokemon").innerHTML = "";
    pokeData.forEach(currentPokemon => {
      pokemonCard(currentPokemon);
    });
}); 

let selectType = document.getElementById("type");
selectType.addEventListener("change", (e) => {
  let selectedType = e.target.value;
  pokeData = filterType(mainData,selectedType);
    document.getElementById("containerPokemon").innerHTML = "";
    pokeData.forEach(currentPokemon => {
      pokemonCard(currentPokemon);
    });
});

let selectWeakness = document.getElementById("weaknessPokemon");
     selectWeakness.addEventListener("change", (e) => {
         let selectedWeakness = e.target.value;
         pokeData = filterWeakness(mainData, selectedWeakness);
         document.getElementById("containerPokemon").innerHTML = "";
         pokeData.forEach(currentPokemon => {
             pokemonCard(currentPokemon)
         });
     });
     
     let selectRarity = document.getElementById("pokemonRarity");
selectRarity.addEventListener("change", (e) => {
    let selectedRarity = e.target.value;
    pokeData = filterRarity(mainData, selectedRarity);
    document.getElementById("containerPokemon").innerHTML = "";
    pokeData.forEach(currentPokemon => {
             pokemonCard(currentPokemon)
         });
     });