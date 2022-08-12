export const filterGen = ( mainData,selectedGeneration) => {
  const genPokemon = mainData.filter(mainData => mainData.generation.name == selectedGeneration)
  console.log(genPokemon);
 return genPokemon
}; 

export const filterType = (mainData, selectedType) => {
  const resultType = mainData.filter(mainData => mainData.type.includes(selectedType))
  console.log(resultType);
   return resultType
};
