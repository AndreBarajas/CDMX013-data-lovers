import { allFilters, filterOrder} from '../src/data.js';

describe('allFilters', () => {
  it('is a function', () => {
    expect(typeof allFilters).toBe('function');
  });
});

it("Filtra según la región indicada", () => {
  const data = [
    {
    "name" : "bulbasaur",
    "generation": { "name": "kanto"},
    "type": ["grass", "poison"],
    "weaknesses": ["fire","ice","flying","psychic"],
    "pokemon-rarity": "normal"
  },
  {
    "name" : "tentacruel",
    "generation": { "name": "kanto"},
    "type": ["water", "poison"],
    "weaknesses": ["fire","water", "ice", "fighting", "poison"],
    "pokemon-rarity": "normal"
  },
  {
    "name" : "bul",
    "generation": { "name": "johto"},
    "type": ["fire"],
    "weaknesses": ["water","ground","rock"],
    "pokemon-rarity": "normal"
  },
  {
    "name" : "bsr",
    "generation": { "name": "johto"},
    "type": ["electric"],
    "weaknesses": ["ground"],
    "pokemon-rarity": "legendary"
  },
  {
    "name" : "ur",
    "generation": { "name": "johto"},
    "type": ["psychic","grass"],
    "weaknesses": ["water","electric","grass","fighting","ground"],
    "pokemon-rarity": "mythic"
  }
  ]
  expect(allFilters (data,"kanto","grass","fire","normal")).toStrictEqual(
    [
      {
        "name" : "bulbasaur",
        "generation": { "name": "kanto"},
        "type": ["grass", "poison"],
        "weaknesses": ["fire","ice","flying","psychic"],
        "pokemon-rarity": "normal"
      },
    ]
  )
});

it("ordena los pokemones de A-Z", () => {
  const data = [
    {
      "name" : "ur",
      "generation": { "name": "johto"},
      "type": ["psychic","grass"],
      "weaknesses": ["water","electric","grass","fighting","ground"],
      "pokemon-rarity": "mythic"
    },
    {
    "name" : "bulbasaur",
    "generation": { "name": "kanto"},
    "type": ["grass", "poison"],
    "weaknesses": ["fire","ice","flying","psychic"],
    "pokemon-rarity": "normal"
  },
  ]
  expect(filterOrder ([
    {
      "name" : "ur",
      "generation": { "name": "johto"},
      "type": ["psychic","grass"],
      "weaknesses": ["water","electric","grass","fighting","ground"],
      "pokemon-rarity": "mythic"
    },
    {
    "name" : "bulbasaur",
    "generation": { "name": "kanto"},
    "type": ["grass", "poison"],
    "weaknesses": ["fire","ice","flying","psychic"],
    "pokemon-rarity": "normal"
  },
  ],"1")).toStrictEqual(
    [
      {
        "name" : "bulbasaur",
        "generation": { "name": "kanto"},
        "type": ["grass", "poison"],
        "weaknesses": ["fire","ice","flying","psychic"],
        "pokemon-rarity": "normal"
      },
      {
        "name" : "ur",
        "generation": { "name": "johto"},
        "type": ["psychic","grass"],
        "weaknesses": ["water","electric","grass","fighting","ground"],
        "pokemon-rarity": "mythic"
      }
    ]
  )
});

