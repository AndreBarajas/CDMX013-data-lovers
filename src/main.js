import allData from "./data/pokemon/pokemon.js"

const mainData = allData.pokemon;

const pokemonCard = (mainData) => {
    let pokemonContainer = document.getElementById("containerPokemon");
    let displayPokemon = document.createElement("div");
    displayPokemon.className = 'pokeDiv';
    pokemonContainer.appendChild(displayPokemon);
    console.log(displayPokemon);
    
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
