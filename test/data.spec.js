
import { allFilters, compute} from '../src/data.js';

describe('allFilters', () => {
  it('is a function', () => {
    expect(typeof allFilters).toBe('function');
  });
});

it("Filtra según los parámetros indicados", () => {
  const data = [
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
    {
      "name": "chikorita",
      "generation": { "name": "johto"},
      "type": ["grass"],
      "weaknesses": ["fire","ice","poison","flying"],
      "pokemon-rarity": "normal"
    },
    {
      "name": "moltres",
      "generation": { "name": "kanto"},
      "type": [ "fire","flying"],
      "weaknesses": [ "water","electric","rock"],
      "pokemon-rarity": "legendary"
    },
    {
      "name": "raikou",
      "generation": { "name": "johto"},
      "type": ["electric"],
      "weaknesses": ["ground"],
      "pokemon-rarity": "legendary"
    },
    {
      "name": "mew",
      "generation": { "name": "kanto"},
      "type": ["psychic"],
      "weaknesses": ["bug","ghost","dark"],
      "pokemon-rarity": "mythic"
    },
  ]
  expect(allFilters (data,"kanto", "poison", "ice", "normal", "Z-A")).toStrictEqual(
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

it("Filtra por región", () => {
  const data = [
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
    {
      "name": "chikorita",
      "generation": { "name": "johto"},
      "type": ["grass"],
      "weaknesses": ["fire","ice","poison","flying"],
      "pokemon-rarity": "normal"
    },
    {
      "name": "moltres",
      "generation": { "name": "kanto"},
      "type": [ "fire","flying"],
      "weaknesses": [ "water","electric","rock"],
      "pokemon-rarity": "legendary"
    },
    {
      "name": "raikou",
      "generation": { "name": "johto"},
      "type": ["electric"],
      "weaknesses": ["ground"],
      "pokemon-rarity": "legendary"
    },
    {
      "name": "mew",
      "generation": { "name": "kanto"},
      "type": ["psychic"],
      "weaknesses": ["bug","ghost","dark"],
      "pokemon-rarity": "mythic"
    },
  ]
  expect(allFilters (data,"johto", "all", "all", "all", "all")).toStrictEqual(
    [
      {
        "name": "chikorita",
        "generation": { "name": "johto"},
        "type": ["grass"],
        "weaknesses": ["fire","ice","poison","flying"],
        "pokemon-rarity": "normal"
      },
      {
        "name": "raikou",
        "generation": { "name": "johto"},
        "type": ["electric"],
        "weaknesses": ["ground"],
        "pokemon-rarity": "legendary"
      },
    ]
  )
});

it("Filtra por tipo", () => {
  const data = [
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
    {
      "name": "chikorita",
      "generation": { "name": "johto"},
      "type": ["grass"],
      "weaknesses": ["fire","ice","poison","flying"],
      "pokemon-rarity": "normal"
    },
    {
      "name": "moltres",
      "generation": { "name": "kanto"},
      "type": [ "fire","flying"],
      "weaknesses": [ "water","electric","rock"],
      "pokemon-rarity": "legendary"
    },
    {
      "name": "raikou",
      "generation": { "name": "johto"},
      "type": ["electric"],
      "weaknesses": ["ground"],
      "pokemon-rarity": "legendary"
    },
    {
      "name": "mew",
      "generation": { "name": "kanto"},
      "type": ["psychic"],
      "weaknesses": ["bug","ghost","dark"],
      "pokemon-rarity": "mythic"
    },
  ]
  expect(allFilters (data,"all", "flying", "all", "all", "all")).toStrictEqual(
    [
      {
        "name": "moltres",
        "generation": { "name": "kanto"},
        "type": [ "fire","flying"],
        "weaknesses": [ "water","electric","rock"],
        "pokemon-rarity": "legendary"
      },
    ]
  )
});

it("Filtra por debilidad", () => {
  const data = [
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
    {
      "name": "chikorita",
      "generation": { "name": "johto"},
      "type": ["grass"],
      "weaknesses": ["fire","ice","poison","flying"],
      "pokemon-rarity": "normal"
    },
    {
      "name": "moltres",
      "generation": { "name": "kanto"},
      "type": [ "fire","flying"],
      "weaknesses": [ "water","electric","rock"],
      "pokemon-rarity": "legendary"
    },
    {
      "name": "raikou",
      "generation": { "name": "johto"},
      "type": ["electric"],
      "weaknesses": ["ground"],
      "pokemon-rarity": "legendary"
    },
    {
      "name": "mew",
      "generation": { "name": "kanto"},
      "type": ["psychic"],
      "weaknesses": ["bug","ghost","dark"],
      "pokemon-rarity": "mythic"
    },
  ]
  expect(allFilters (data,"all", "all", "water", "all", "all")).toStrictEqual(
    [
      {
        "name": "tentacruel",
        "generation": { "name": "kanto"},
        "type": ["water", "poison"],
        "weaknesses": ["fire","water", "ice", "fighting", "poison"],
        "pokemon-rarity": "normal"
      },
      {
        "name": "moltres",
        "generation": { "name": "kanto"},
        "type": [ "fire","flying"],
        "weaknesses": [ "water","electric","rock"],
        "pokemon-rarity": "legendary"
      },
    ]
  )
});

it("Filtra por rareza", () => {
  const data = [
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
    {
      "name": "chikorita",
      "generation": { "name": "johto"},
      "type": ["grass"],
      "weaknesses": ["fire","ice","poison","flying"],
      "pokemon-rarity": "normal"
    },
    {
      "name": "moltres",
      "generation": { "name": "kanto"},
      "type": [ "fire","flying"],
      "weaknesses": [ "water","electric","rock"],
      "pokemon-rarity": "legendary"
    },
    {
      "name": "raikou",
      "generation": { "name": "johto"},
      "type": ["electric"],
      "weaknesses": ["ground"],
      "pokemon-rarity": "legendary"
    },
    {
      "name": "mew",
      "generation": { "name": "kanto"},
      "type": ["psychic"],
      "weaknesses": ["bug","ghost","dark"],
      "pokemon-rarity": "mythic"
    },
  ]
  expect(allFilters (data,"all", "all", "all", "legendary", "all")).toStrictEqual(
    [
      {
        "name": "moltres",
        "generation": { "name": "kanto"},
        "type": [ "fire","flying"],
        "weaknesses": [ "water","electric","rock"],
        "pokemon-rarity": "legendary"
      },
      {
        "name": "raikou",
        "generation": { "name": "johto"},
        "type": ["electric"],
        "weaknesses": ["ground"],
        "pokemon-rarity": "legendary"
      },
    ]
  )
});

it("Ordena de A-Z", () => {
  const data = [
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
    {
      "name": "chikorita",
      "generation": { "name": "johto"},
      "type": ["grass"],
      "weaknesses": ["fire","ice","poison","flying"],
      "pokemon-rarity": "normal"
    },
    {
      "name": "moltres",
      "generation": { "name": "kanto"},
      "type": [ "fire","flying"],
      "weaknesses": [ "water","electric","rock"],
      "pokemon-rarity": "legendary"
    },
    {
      "name": "raikou",
      "generation": { "name": "johto"},
      "type": ["electric"],
      "weaknesses": ["ground"],
      "pokemon-rarity": "legendary"
    },
    {
      "name": "mew",
      "generation": { "name": "kanto"},
      "type": ["psychic"],
      "weaknesses": ["bug","ghost","dark"],
      "pokemon-rarity": "mythic"
    },
  ]
  expect(allFilters (data,"all", "all", "all", "all", "A-Z")).toStrictEqual(
    [
      {
        "name": "bulbasaur",
        "generation": { "name": "kanto"},
        "type": ["grass", "poison"],
        "weaknesses": ["fire","ice","flying","psychic"],
        "pokemon-rarity": "normal"
      },
      {
        "name": "chikorita",
        "generation": { "name": "johto"},
        "type": ["grass"],
        "weaknesses": ["fire","ice","poison","flying"],
        "pokemon-rarity": "normal"
      },
      {
        "name": "mew",
        "generation": { "name": "kanto"},
        "type": ["psychic"],
        "weaknesses": ["bug","ghost","dark"],
        "pokemon-rarity": "mythic"
      },
      {
        "name": "moltres",
        "generation": { "name": "kanto"},
        "type": [ "fire","flying"],
        "weaknesses": [ "water","electric","rock"],
        "pokemon-rarity": "legendary"
      },
      {
        "name": "raikou",
        "generation": { "name": "johto"},
        "type": ["electric"],
        "weaknesses": ["ground"],
        "pokemon-rarity": "legendary"
      },
      {
        "name": "tentacruel",
        "generation": { "name": "kanto"},
        "type": ["water", "poison"],
        "weaknesses": ["fire","water", "ice", "fighting", "poison"],
        "pokemon-rarity": "normal"
      },
    ]
  )
});

it("Ordena de Z-A", () => {
  const data = [
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
    {
      "name": "chikorita",
      "generation": { "name": "johto"},
      "type": ["grass"],
      "weaknesses": ["fire","ice","poison","flying"],
      "pokemon-rarity": "normal"
    },
    {
      "name": "moltres",
      "generation": { "name": "kanto"},
      "type": [ "fire","flying"],
      "weaknesses": [ "water","electric","rock"],
      "pokemon-rarity": "legendary"
    },
    {
      "name": "raikou",
      "generation": { "name": "johto"},
      "type": ["electric"],
      "weaknesses": ["ground"],
      "pokemon-rarity": "legendary"
    },
    {
      "name": "mew",
      "generation": { "name": "kanto"},
      "type": ["psychic"],
      "weaknesses": ["bug","ghost","dark"],
      "pokemon-rarity": "mythic"
    },
  ]
  expect(allFilters (data,"all", "all", "all", "all", "Z-A")).toStrictEqual(
    [
      {
        "name": "tentacruel",
        "generation": { "name": "kanto"},
        "type": ["water", "poison"],
        "weaknesses": ["fire","water", "ice", "fighting", "poison"],
        "pokemon-rarity": "normal"
      },
      {
        "name": "raikou",
        "generation": { "name": "johto"},
        "type": ["electric"],
        "weaknesses": ["ground"],
        "pokemon-rarity": "legendary"
      },
      {
        "name": "moltres",
        "generation": { "name": "kanto"},
        "type": [ "fire","flying"],
        "weaknesses": [ "water","electric","rock"],
        "pokemon-rarity": "legendary"
      },
      {
        "name": "mew",
        "generation": { "name": "kanto"},
        "type": ["psychic"],
        "weaknesses": ["bug","ghost","dark"],
        "pokemon-rarity": "mythic"
      },
      {
        "name": "chikorita",
        "generation": { "name": "johto"},
        "type": ["grass"],
        "weaknesses": ["fire","ice","poison","flying"],
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

it("Filtra con sólo 3 parámteros indicados", () => {
  const data = [
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
    {
      "name": "chikorita",
      "generation": { "name": "johto"},
      "type": ["grass"],
      "weaknesses": ["fire","ice","poison","flying"],
      "pokemon-rarity": "normal"
    },
    {
      "name": "moltres",
      "generation": { "name": "kanto"},
      "type": [ "fire","flying"],
      "weaknesses": [ "water","electric","rock"],
      "pokemon-rarity": "legendary"
    },
    {
      "name": "celebi",
      "generation": { "name": "johto"},
      "type": ["psychic","grass"],
      "weaknesses": ["fire","ice","poison","flying"],
      "pokemon-rarity": "mythic"
    },
    {
      "name": "raikou",
      "generation": { "name": "johto"},
      "type": ["electric"],
      "weaknesses": ["ground"],
      "pokemon-rarity": "legendary"
    },
    {
      "name": "mew",
      "generation": { "name": "kanto"},
      "type": ["psychic"],
      "weaknesses": ["bug","ghost","dark"],
      "pokemon-rarity": "mythic"
    }
  ]
  expect(allFilters (data,"all", "grass", "ice", "mythic", "all")).toStrictEqual(
    [
      {
        "name": "celebi",
        "generation": { "name": "johto"},
        "type": ["psychic","grass"],
        "weaknesses": ["fire","ice","poison","flying"],
        "pokemon-rarity": "mythic"
      },
    ]
  )
});

it("Saca el porcentaje de los pokemones tipo grass", () => {
  const data = [
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
    {
      "name": "chikorita",
      "generation": { "name": "johto"},
      "type": ["grass"],
      "weaknesses": ["fire","ice","poison","flying"],
      "pokemon-rarity": "normal"
    },
    {
      "name": "moltres",
      "generation": { "name": "kanto"},
      "type": [ "fire","flying"],
      "weaknesses": [ "water","electric","rock"],
      "pokemon-rarity": "legendary"
    },
    {
      "name": "celebi",
      "generation": { "name": "johto"},
      "type": ["psychic","grass"],
      "weaknesses": ["fire","ice","poison","flying"],
      "pokemon-rarity": "mythic"
    },
    {
      "name": "raikou",
      "generation": { "name": "johto"},
      "type": ["electric"],
      "weaknesses": ["ground"],
      "pokemon-rarity": "legendary"
    },
    {
      "name": "mew",
      "generation": { "name": "kanto"},
      "type": ["psychic"],
      "weaknesses": ["bug","ghost","dark"],
      "pokemon-rarity": "mythic"
    }
  ]
  expect(compute (data,"grass")).toStrictEqual(43)});


  it("Saca el porcentaje de los pokemones tipo poison", () => {
    const data = [
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
      {
        "name": "chikorita",
        "generation": { "name": "johto"},
        "type": ["grass"],
        "weaknesses": ["fire","ice","poison","flying"],
        "pokemon-rarity": "normal"
      },
      {
        "name": "moltres",
        "generation": { "name": "kanto"},
        "type": [ "fire","flying"],
        "weaknesses": [ "water","electric","rock"],
        "pokemon-rarity": "legendary"
      },
      {
        "name": "celebi",
        "generation": { "name": "johto"},
        "type": ["psychic","grass"],
        "weaknesses": ["fire","ice","poison","flying"],
        "pokemon-rarity": "mythic"
      },
      {
        "name": "raikou",
        "generation": { "name": "johto"},
        "type": ["electric"],
        "weaknesses": ["ground"],
        "pokemon-rarity": "legendary"
      },
      {
        "name": "mew",
        "generation": { "name": "kanto"},
        "type": ["psychic"],
        "weaknesses": ["bug","ghost","dark"],
        "pokemon-rarity": "mythic"
      }
    ]
    expect(compute (data,"poison")).toStrictEqual(29)});

    it ("Saca el porcentaje de los pokemones tipo poison", () => {
      const data = [
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
        {
          "name": "chikorita",
          "generation": { "name": "johto"},
          "type": ["grass"],
          "weaknesses": ["fire","ice","poison","flying"],
          "pokemon-rarity": "normal"
        },
        {
          "name": "moltres",
          "generation": { "name": "kanto"},
          "type": [ "fire","flying"],
          "weaknesses": [ "water","electric","rock"],
          "pokemon-rarity": "legendary"
        },
        {
          "name": "celebi",
          "generation": { "name": "johto"},
          "type": ["psychic","grass"],
          "weaknesses": ["fire","ice","poison","flying"],
          "pokemon-rarity": "mythic"
        },
        {
          "name": "raikou",
          "generation": { "name": "johto"},
          "type": ["electric"],
          "weaknesses": ["ground"],
          "pokemon-rarity": "legendary"
        },
        {
          "name": "mew",
          "generation": { "name": "kanto"},
          "type": ["psychic"],
          "weaknesses": ["bug","ghost","dark"],
          "pokemon-rarity": "mythic"
        }
      ]
      expect(compute (data,"electric")).toStrictEqual(14)});