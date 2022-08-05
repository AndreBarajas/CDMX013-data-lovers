import allData from "./data/pokemon/pokemon.js"

const mainData = allData.pokemon;

const nombresPokemon = mainData.map(
    (pokemon) => pokemon.name
); console.log(nombresPokemon);

const categoriaPokemon = mainData.map(
    (pokemon) => pokemon.type
); console.log(categoriaPokemon);


const pokemones = mainData.map(
    (pokemon) => ({num: pokemon.num, name: pokemon.name, type: pokemon.type, img: pokemon.img})
); console.log(pokemones);


const pokemonCard = (mainData) => {
    let pokemonContainer = document.getElementById("containerPokemon");
    let displayPokemon = document.createElement("div");
    displayPokemon.className = 'pokeDiv';
    pokemonContainer.appendChild(displayPokemon);
    console.log(displayPokemon);
    
    let displayImg = document.createElement("img");
    displayImg.src = mainData.img;
    displayImg.className = 'pokeImg';
    displayPokemon.appendChild(displayImg)
       
}; 

mainData.map(currentPokemon => {
    pokemonCard(currentPokemon);

});



//function () {
//    for (let i = 0; i < 252; i++) {
//        infoGrid(i)
//        console.log(infoGrid);
//    }






