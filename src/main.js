import allData from "./data/pokemon/pokemon.js"
import { allFilters} from "./data.js"

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

//Nos traemos los filtros del DOM
let selectGen = document.getElementById("generation");
let selectType = document.getElementById("type");
let selectWeakness = document.getElementById("weaknessPokemon");
let selectRarity = document.getElementById("pokemonRarity");
let selectOrder = document.getElementById("sortMenu");

const onChange = () => {
  pokeData = allFilters(mainData, selectGen.value, selectType.value, selectWeakness.value,selectRarity.value, selectOrder.value);
  document.getElementById("containerPokemon").innerHTML = "";
  pokeData.forEach(currentPokemon => {
    pokemonCard(currentPokemon);
  });
};

//Filtro por generación
selectGen.addEventListener("change", onChange);
//Filtro por tipo
selectType.addEventListener("change", onChange);
//Filtro por debilidad
selectWeakness.addEventListener("change", onChange);
//Filtro por rareza
selectRarity.addEventListener("change", onChange);
//Ordenar de A-Z y Z-A
selectOrder.addEventListener("change", onChange);