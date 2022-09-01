import allData from "./data/pokemon/pokemon.js"
import { allFilters,compute, getDataColors} from "./data.js"

const mainData = allData.pokemon;

// FUNCIÓN PARA MOSTRAR POKEMONES

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

// Con .map recorre todo el arreglo de pokemones y crea las tarjetas para cada uno
mainData.map(currentPokemon => {
  pokemonCard(currentPokemon);

});

// EVENTOS PARA FILTRADO

//Nos traemos los filtros del DOM
let selectGen = document.getElementById("generation");
let selectType = document.getElementById("type");
let selectWeakness = document.getElementById("weaknessPokemon");
let selectRarity = document.getElementById("pokemonRarity");
let selectOrder = document.getElementById("sortMenu");

//En esta variable almacenamos los filtros y ordenamiento selecionado
let pokeData = allData.pokemon;

// Función para llamar al filtrado y al ordenamiento
const onChange = () => {
  pokeData = allFilters(mainData, selectGen.value, selectType.value, selectWeakness.value,selectRarity.value, selectOrder.value);
  document.getElementById("containerPokemon").innerHTML = "";
  pokeData.forEach(currentPokemon => {
    pokemonCard(currentPokemon);
  });
};

//Evento para filtro por generación
selectGen.addEventListener("change", onChange);
//Evento para filtro por tipo
selectType.addEventListener("change", onChange);
//Evento para filtro por debilidad
selectWeakness.addEventListener("change", onChange);
//Evento para filtro por rareza
selectRarity.addEventListener("change", onChange);
//Evento para ordenar de A-Z y Z-A
selectOrder.addEventListener("change", onChange);

//GRÁFICA TIPOS DE POKEMON

//Botones para mostrar estadística y regresar a la pantalla principal
let statsButton = document.getElementById("stats");
let pokeButton = document.getElementById("data");

//Evento para botón de gráfica
statsButton.addEventListener("click", () => {
  const chartOfPokemon = document.getElementById("containerPokemon");
  const chartOfType = document.getElementById("charts");
  const chartTitle = document.getElementById("title");
  chartTitle.innerHTML = "POKEMON TYPES"
  chartOfPokemon.style.display = "none";
    chartOfType.style.display = "block";
    chartTitle.style.display = "block";
  
//Sacar los tipos de pokemnes 
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

//En la variable labels con los operadores de dispersión convertimos al set en un array
const labels = [...(typeList)]
console.log("labels",labels);
//Aquí obtenemos un objeto con las propiedades de tipo y porcentaje
let porcentaje = labels.map(type => {
  let calculo = compute(mainData,type)
  return {'tipo': type, 'porcentaje': calculo}
})
console.log("porcentaje", porcentaje);

//Creamos la gráfica con chart.js
const data = {
  labels: labels,
  datasets: [{
    data: porcentaje.map(p => p.porcentaje),
    borderColor: getDataColors(),
    backgroundColor: getDataColors(30),
  }]
};

const config = {
  type: 'pie',
  data: data,
  options: { legend: { position: 'left' },
  }
};

const myChart = new Chart( 
  document.getElementById('chartType'),
  config
);
});

//Botón para regresar a la página principal
pokeButton.addEventListener("click", () => {
  let pokeButton = document.getElementById("data");
  pokeButton.addEventListener("click", () => {
    const chartOfPokemon = document.getElementById("containerPokemon");
    const chartOfType = document.getElementById("chartType");
    const chartTitle = document.getElementById("title");
    chartOfType.style.display = "none";
    chartTitle.style.display = "none";
    chartOfPokemon.style.display = "grid"
    mainData.map(currentPokemon => {
      pokemonCard(currentPokemon);
    })
  })  
});