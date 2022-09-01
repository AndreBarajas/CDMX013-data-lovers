// Función de filtrado Global
export const allFilters = (mainData, selectGen, selectType, selectWeakness, selectRarity, sortOrder) => {
  let filtrosPokemon = mainData;
  if (selectGen != "all") {
    filtrosPokemon = filtrosPokemon.filter(mainData => mainData.generation.name == selectGen);
    console.log(filtrosPokemon);
  } 
  if (selectType != "all") {
    filtrosPokemon = filtrosPokemon.filter(mainData => mainData.type.includes (selectType));
    console.log(filtrosPokemon);
  } 
  if (selectWeakness != "all") {
    filtrosPokemon = filtrosPokemon.filter(mainData => mainData.weaknesses.includes (selectWeakness));
    console.log(filtrosPokemon);
  } 
  if (selectRarity != "all") {
    filtrosPokemon = filtrosPokemon.filter(mainData => mainData["pokemon-rarity"] == (selectRarity));
    console.log(filtrosPokemon);
  }
  if (sortOrder === "all") {
    filtrosPokemon;
  }
  if (sortOrder === "A-Z") {
    filtrosPokemon = filtrosPokemon.sort((a, b) => a.name.localeCompare(b.name));
    console.log(filtrosPokemon);
  }
  if (sortOrder === "Z-A") {
    filtrosPokemon = filtrosPokemon.sort((a, b) => b.name.localeCompare(a.name));
    console.log(filtrosPokemon);
  } 
  return filtrosPokemon;
};

//Función para sacar porcentaje de tipos de pokemones
export const compute = (mainData, type) => { 
  // Filtra los tipos de pokemon en un array de objetos
  let pokeStats = mainData.filter(mainData=> mainData.type.includes(type));
  console.log("pokeS",pokeStats);
  // ahora me da el porcentaje en decimales
  let stats = (pokeStats.length * 100)/mainData.length;
  console.log (stats);
  //redondea el número
  stats= Math.round(stats)
  return stats
}

// Función para obtener los colores de la gráfica
export const getDataColors = opacity => {
  const colors = ['#7448c2', '#21c0d7', '#d99e2b', '#cd3a81', '#9c99cc', '#e14eca', '#ffffff', '#ff0000', '#d6ff00', '#0038ff',
'#6eaa12', '#9049c7', '#c749b2', '#49b2c7', '#c74949', '#49c7aa', '#4953c7', '#c74949']
  return colors.map(color => opacity ? `${color + opacity}` : color)
}