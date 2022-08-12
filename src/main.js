import allData from "./data/pokemon/pokemon.js"
import {filterType, filterGen} from "./data.js"

const mainData = allData.pokemon;
let pokedata = allData.pokemon;

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
  pokedata = filterGen(mainData,selectedGeneration);
    document.getElementById("containerPokemon").innerHTML = "";
    pokedata.forEach(currentPokemon => {
      pokemonCard(currentPokemon);
    });
}); 

let selectType = document.getElementById("type");
selectType.addEventListener("change", (e) => {
  let selectedType = e.target.value;
  pokedata = filterType(mainData,selectedType);
    document.getElementById("containerPokemon").innerHTML = "";
    pokedata.forEach(currentPokemon => {
      pokemonCard(currentPokemon);
    });
});

