
export const filterGen = (mainData, selectedGeneration) => {
  const genPokemon = mainData.filter(mainData => {
    if (mainData.generation.name == (selectedGeneration)) {
      return true;
    }
  })
  console.log(genPokemon);
  if (genPokemon.length === 0) {
    return mainData;
  }
  else { return genPokemon; }
};
export const filterType = (mainData, selectedType) => {
  const typePokemon = mainData.filter(mainData => {
    if (mainData.type.includes(selectedType)) {
      return true;
    }
  })
  console.log(typePokemon);
  if (typePokemon.length === 0) {
    return mainData;
  }
  else { return typePokemon; }
};

export const filterWeakness = (mainData, selectedWeakness) => {
  const weaknessPokemon = mainData.filter(mainData => {
    if (mainData.weaknesses.includes(selectedWeakness)) {
      return true;
    }
  })
  console.log(weaknessPokemon);
  if (weaknessPokemon.length === 0) {
    return mainData;
  }
  else { return weaknessPokemon; }
};

export const filterRarity = (mainData, selectedRarity) => {
  const resultRarity = mainData.filter(mainData => {
    if (mainData["pokemon-rarity"] == (selectedRarity)) {
      return true;
    }
  })
  console.log(resultRarity);
  if (resultRarity.length === 0) {
    return mainData;
  }
  else { return resultRarity; }
};

export const filterOrder = (mainData, sortOrder) => {
  const resultOrder = mainData.sort((a, b) => {
    if (sortOrder == 1) {
      return a.name > b.name
    }
    if (sortOrder == -1) {
      return a.name < b.name;
    }
    else {
      return mainData;
    }
  })
  return resultOrder;
};

