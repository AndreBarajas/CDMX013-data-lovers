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

// const onChange2 = () => {
//   pokeData = filterOrder(mainData,selectOrder.value);
//   document.getElementById("containerPokemon").innerHTML = "";
//   pokeData.forEach(currentPokemon => {
//     pokemonCard(currentPokemon);
//   });
// };

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

let statsButton = document.getElementById("stats");
let pokeButton = document.getElementById("data");

// const showStats = () => {
//   document.getElementById("containerPokemon").innerHTML = "";
// }


statsButton.addEventListener("click", () => {
  document.getElementById("containerPokemon").innerHTML = "";
  
  //Estadísticas
//Gráfica por rareza
const labels = ['Normal', 'Legendary', 'Mythic'];
const data = {
  labels: labels,
  datasets: [{
    label: '# pokemon rarity',
    data: [240, 9, 2],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(54, 162, 235, 0.2)',
    ]
  }]
};
const config = {
  type: 'line',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }}
  }
};
const myChart = new Chart(
  document.getElementById('chartRarity'),
  config
);
console.log(myChart); 
});

pokeButton.addEventListener("click", () => {
  mainData.map(currentPokemon => {
    pokemonCard(currentPokemon);
  })  
});