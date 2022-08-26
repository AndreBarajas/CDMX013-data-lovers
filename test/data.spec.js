// import { filterOrder} from '../src/data.js';

// describe('filterGen', () => {
//   it('is a function', () => {
//     expect(typeof filterGen).toBe('function');
//   });
// });

// it("Filtra por región", () => {
//   const data = [
    
//     {
//       "name" : "tentacruel",
//       "generation": { "name": "kanto"},
//       "type": ["water", "poison"],
//       "weaknesses": ["fire","water", "ice", "fighting", "poison"],
//       "pokemon-rarity": "normal"
//     },
//     {
//     "name" : "bulbasaur",
//     "generation": { "name": "kanto"},
//     "type": ["grass", "poison"],
//     "weaknesses": ["fire","ice","flying","psychic"],
//     "pokemon-rarity": "normal"
//   },
//   {
//     "name" : "bul",
//     "generation": { "name": "johto"},
//     "type": ["fire"],
//     "weaknesses": ["water","ground","rock"],
//     "pokemon-rarity": "normal"
//   },
//   {
//     "name" : "bsr",
//     "generation": { "name": "johto"},
//     "type": ["electric"],
//     "weaknesses": ["ground"],
//     "pokemon-rarity": "legendary"
//   },
//   {
//     "name" : "ur",
//     "generation": { "name": "johto"},
//     "type": ["psychic","grass"],
//     "weaknesses": ["water","electric","grass","fighting","ground"],
//     "pokemon-rarity": "mythic"
//   }
//   ]
//   expect(filterGen (data,"johto")).toStrictEqual(
//     [
//       {
//         "name" : "bul",
//         "generation": { "name": "johto"},
//         "type": ["fire"],
//         "weaknesses": ["water","ground","rock"],
//         "pokemon-rarity": "normal"
//       },
//       {
//         "name" : "bsr",
//         "generation": { "name": "johto"},
//         "type": ["electric"],
//         "weaknesses": ["ground"],
//         "pokemon-rarity": "legendary"
//       },
//       {
//         "name" : "ur",
//         "generation": { "name": "johto"},
//         "type": ["psychic","grass"],
//         "weaknesses": ["water","electric","grass","fighting","ground"],
//         "pokemon-rarity": "mythic"
//       }
//     ]
//   )
// });

// describe('filtertype', () => {
//   it('is a function', () => {
//     expect(typeof filterType).toBe('function');
//   });
// });

// it("Filtra por tipo", () => {
//   const data = [
    
//     {
//       "name" : "tentacruel",
//       "generation": { "name": "kanto"},
//       "type": ["water", "poison"],
//       "weaknesses": ["fire","water", "ice", "fighting", "poison"],
//       "pokemon-rarity": "normal"
//     },
//     {
//     "name" : "bulbasaur",
//     "generation": { "name": "kanto"},
//     "type": ["grass", "poison"],
//     "weaknesses": ["fire","ice","flying","psychic"],
//     "pokemon-rarity": "normal"
//   },
//   {
//     "name" : "bul",
//     "generation": { "name": "johto"},
//     "type": ["fire"],
//     "weaknesses": ["water","ground","rock"],
//     "pokemon-rarity": "normal"
//   },
//   {
//     "name" : "bsr",
//     "generation": { "name": "johto"},
//     "type": ["electric"],
//     "weaknesses": ["ground"],
//     "pokemon-rarity": "legendary"
//   },
//   {
//     "name" : "ur",
//     "generation": { "name": "johto"},
//     "type": ["psychic","grass"],
//     "weaknesses": ["water","electric","grass","fighting","ground"],
//     "pokemon-rarity": "mythic"
//   }
//   ]
//   expect(filterType (data,"grass")).toStrictEqual(
//     [
//       {
//         "name" : "bulbasaur",
//         "generation": { "name": "kanto"},
//         "type": ["grass", "poison"],
//         "weaknesses": ["fire","ice","flying","psychic"],
//         "pokemon-rarity": "normal"
//       },
//       {
//         "name" : "ur",
//         "generation": { "name": "johto"},
//         "type": ["psychic","grass"],
//         "weaknesses": ["water","electric","grass","fighting","ground"],
//         "pokemon-rarity": "mythic"
//       }
//     ]
//   )
// });

// describe('filterWeakness', () => {
//   it('is a function', () => {
//     expect(typeof filterWeakness).toBe('function');
//   });
// });

// it("Filtra por debilidad", () => {
//   const data = [
    
//     {
//       "name" : "tentacruel",
//       "generation": { "name": "kanto"},
//       "type": ["water", "poison"],
//       "weaknesses": ["fire","water", "ice", "fighting", "poison"],
//       "pokemon-rarity": "normal"
//     },
//     {
//     "name" : "bulbasaur",
//     "generation": { "name": "kanto"},
//     "type": ["grass", "poison"],
//     "weaknesses": ["fire","ice","flying","psychic"],
//     "pokemon-rarity": "normal"
//   },
//   {
//     "name" : "bul",
//     "generation": { "name": "johto"},
//     "type": ["fire"],
//     "weaknesses": ["water","ground","rock"],
//     "pokemon-rarity": "normal"
//   },
//   {
//     "name" : "bsr",
//     "generation": { "name": "johto"},
//     "type": ["electric"],
//     "weaknesses": ["ground"],
//     "pokemon-rarity": "legendary"
//   },
//   {
//     "name" : "ur",
//     "generation": { "name": "johto"},
//     "type": ["psychic","grass"],
//     "weaknesses": ["water","electric","grass","fighting","ground"],
//     "pokemon-rarity": "mythic"
//   }
//   ]
//   expect(filterWeakness (data,"fire")).toStrictEqual(
//     [
//       {
//         "name" : "tentacruel",
//         "generation": { "name": "kanto"},
//         "type": ["water", "poison"],
//         "weaknesses": ["fire","water", "ice", "fighting", "poison"],
//         "pokemon-rarity": "normal"
//       },
//       {
//       "name" : "bulbasaur",
//       "generation": { "name": "kanto"},
//       "type": ["grass", "poison"],
//       "weaknesses": ["fire","ice","flying","psychic"],
//       "pokemon-rarity": "normal"
//     },
//     ]
//   )
// });

// describe('filterRarity', () => {
//   it('is a function', () => {
//     expect(typeof filterRarity).toBe('function');
//   });
// });

// it("Filtra por rareza de pokemon", () => {
//   const data = [
    
//     {
//       "name" : "tentacruel",
//       "generation": { "name": "kanto"},
//       "type": ["water", "poison"],
//       "weaknesses": ["fire","water", "ice", "fighting", "poison"],
//       "pokemon-rarity": "normal"
//     },
//     {
//     "name" : "bulbasaur",
//     "generation": { "name": "kanto"},
//     "type": ["grass", "poison"],
//     "weaknesses": ["fire","ice","flying","psychic"],
//     "pokemon-rarity": "normal"
//   },
//   {
//     "name" : "bul",
//     "generation": { "name": "johto"},
//     "type": ["fire"],
//     "weaknesses": ["water","ground","rock"],
//     "pokemon-rarity": "normal"
//   },
//   {
//     "name" : "bsr",
//     "generation": { "name": "johto"},
//     "type": ["electric"],
//     "weaknesses": ["ground"],
//     "pokemon-rarity": "legendary"
//   },
//   {
//     "name" : "ur",
//     "generation": { "name": "johto"},
//     "type": ["psychic","grass"],
//     "weaknesses": ["water","electric","grass","fighting","ground"],
//     "pokemon-rarity": "mythic"
//   }
//   ]
//   expect(filterRarity (data,"legendary")).toStrictEqual(
//     [
//       {
//         "name" : "bsr",
//         "generation": { "name": "johto"},
//         "type": ["electric"],
//         "weaknesses": ["ground"],
//         "pokemon-rarity": "legendary"
//       },
//     ]
//   )
// });
import { allFilters} from '../src/data.js';

describe('allFilters', () => {
  it('is a function', () => {
    expect(typeof allFilters).toBe('function');
  });
});

it("Filtra según los parámetros indicados", () => {
  const data = [
    
    {
      "name" : "tentacruel",
      "generation": { "name": "kanto"},
      "type": ["water", "poison"],
      "weaknesses": ["fire","water", "ice", "fighting", "poison"],
      "pokemon-rarity": "normal"
    },
    {
    "name" : "bulbasaur",
    "generation": { "name": "kanto"},
    "type": ["grass", "poison"],
    "weaknesses": ["fire","ice","flying","psychic"],
    "pokemon-rarity": "normal"
  },
  {
        "name" : "bsr",
        "generation": { "name": "johto"},
        "type": ["electric"],
        "weaknesses": ["ground"],
        "pokemon-rarity": "legendary"
      },
  ]
  expect(allFilters (data,"kanto", "poison", "ice", "normal", "-1")).toStrictEqual(
    [
      {
        "name": "tentacruel",
        "generation": { "name": "kanto"},
        "type": ["water", "poison"],
        "weaknesses": ["fire","water", "ice", "fighting", "poison"],
        "pokemon-rarity": "normal"
      },
      {
        "name": "bulbasaur",
        "generation": { "name": "kanto"},
        "type": ["grass", "poison"],
        "weaknesses": ["fire","ice","flying","psychic"],
        "pokemon-rarity": "normal"
      },
    ]
  )
});

// describe('filterOrder', () => {
//     it('is a function', () => {
//       expect(typeof filterOrder).toBe('function');
//     });
//   });
  
//   it("Ordena de a-z", () => {
//     const data = [
//       {"name" : "tentacruel"},
//       {"name" : "bulbasaur"}
//     ]
//     expect(filterOrder(data,"-1")).toStrictEqual(
//       [
//         {"name" : "tentacruel"},
//         {"name" : "bulbasaur"}
//       ]
//     )
//   });
