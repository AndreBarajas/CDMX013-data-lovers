import allData from "./data/pokemon/pokemon.js"
import { allFilters,compute, getDataColors} from "./data.js"

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

let statsButton = document.getElementById("stats");
let pokeButton = document.getElementById("data");

statsButton.addEventListener("click", () => {
  const chartOfPokemon = document.getElementById("containerPokemon");
  const chartOfType = document.getElementById("charts");
  chartOfPokemon.style.display = "none";
    chartOfType.style.display = "block";
  
//Estadísticas
//Gráfica por tipo de pokemones

  let typeList = new Set();
  for (let i = 0; i < mainData.length; i++) {
    let pokemonTypes = mainData[i].type;
    //console.log("tiposdepokemones",pokemonTypes); 
    for (let p = 0; p < pokemonTypes.length; p++) {
      let type = pokemonTypes[p];
      // con el add se añade al valor del objeto set
      typeList.add(type);
    }
  } 
      
const labels = [...new Set(typeList)]
console.log(labels);

let porcentaje = labels.map(type => {
  let calculo = compute(mainData,type)
  return {'tipo': type, 'porcentaje': calculo}
})
console.log("porcentaje", porcentaje);


const data = {
  labels: labels,
  datasets: [{
    label: '# pokemon type',
    data: porcentaje.map(p => p.porcentaje),
    borderColor: getDataColors(),
    backgroundColor: getDataColors(30),
  }]
};
const config = {
  type: 'doughnut',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }}
  }
};
const myChart = new Chart(
  document.getElementById('chartType'),
  config
);
});

pokeButton.addEventListener("click", () => {
  let pokeButton = document.getElementById("data");
  pokeButton.addEventListener("click", () => {
    const chartOfPokemon = document.getElementById("containerPokemon");
    const chartOfType = document.getElementById("chartType");
    chartOfType.style.display = "none";
    chartOfPokemon.style.display = "grid"
    mainData.map(currentPokemon => {
      pokemonCard(currentPokemon);
    })
  })  
});