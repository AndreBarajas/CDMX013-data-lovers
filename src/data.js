export const filterPokemon = ( mainData,selectedGeneration) => {
  const genPokemon = mainData.filter(mainData => mainData.generation.name == selectedGeneration)
  console.log(genPokemon);
 return genPokemon
}; 

export const filterType = (mainData, selectedType) => {
  const resultFilter = mainData.filter(mainData => mainData.type.includes(selectedType))
   return resultFilter
};
