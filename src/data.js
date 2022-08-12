export const filterGen = ( mainData,selectedGeneration) => {
  const genPokemon = mainData.filter(mainData => mainData.generation.name == selectedGeneration)
  console.log(genPokemon);
 return genPokemon
}; 

export const filterType = (mainData, selectedType) => {
  const typePokemon = mainData.filter(mainData => mainData.type.includes(selectedType))
  console.log(typePokemon);
   return typePokemon
};
export const filterWeakness = (mainData, selectedWeakness) => {
  const weaknessPokemon = mainData.filter(mainData => mainData.weaknesses.includes(selectedWeakness));
  console.log(weaknessPokemon);
  return weaknessPokemon
};

/*export const filterRarity = (mainData, selectedRarity) => {
  const rarityPokemon = mainData.filter(mainData => mainData.pokemon-rariity.includes(selectedRarity));
  console.log(rarityPokemon);
  return rarityPokemon
};*/