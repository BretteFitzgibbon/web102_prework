// import the JSON data about the crowd funded games from the games.js file
import GAMES_DATA from './games.js';

const allBtn = document.getElementById("all-btn");
const contributionsCard = document.getElementById("num-contributions");
const descriptionContainer = document.getElementById("description-container");
const firstGameContainer = document.getElementById("first-game");
const fundedBtn = document.getElementById("funded-btn");
const gamesCard = document.getElementById("num-games");
const gamesContainer = document.getElementById("games-container");
const GAMES_JSON = JSON.parse(GAMES_DATA)
const raisedCard = document.getElementById("total-raised");
const secondGameContainer = document.getElementById("second-game");
const unfundedBtn = document.getElementById("unfunded-btn");

// create a function that adds all data from the games array to the page
function addGamesToPage(games) {
    for (let i = 0; i < games.length; i++) {
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");
        gameCard.innerHTML = `<img src = ${games[i].img} alt ="${games[i].name}" class = "game-img" />
        <h3 class="game-name">${games[i].name}</h3>
        <p>${games[i].description}</p>`
        gamesContainer.appendChild(gameCard);
    }
}

// remove all child elements from a parent element in the DOM
function deleteChildElements(parent) {
    while (parent.firstChild) { parent.removeChild(parent.firstChild); }
}

// show only games that are fully funded
function filterFundedOnly() {
    deleteChildElements(gamesContainer);
    let fundedGames = GAMES_JSON.filter ( (game) => {
        return game.pledged >= game.goal;
    });
    addGamesToPage(fundedGames);

    // use filter() to get a list of games that have met or exceeded their goal


    // use the function we previously created to add unfunded games to the DOM

}

// show only games that do not yet have enough funding
function filterUnfundedOnly() {
    deleteChildElements(gamesContainer);
    let unfundedGames = GAMES_JSON.filter ( (game) => {
        return game.pledged < game.goal;
    });
    addGamesToPage(unfundedGames);
}

const getPlural = (num) => num > 1  ? "games" : "game"; 

// show all games
function showAllGames() {
    deleteChildElements(gamesContainer);
    addGamesToPage(GAMES_JSON);

    // add all games from the JSON data to the DOM

}

const sortedGames =  GAMES_JSON.sort( (item1, item2) => {
    return item2.pledged - item1.pledged;
});

const totalContributions = GAMES_JSON.reduce( (acc, game) => acc + game.backers, 0);
const totalPledged = GAMES_JSON.reduce( (acc, game) => acc + game.pledged, 0); 
const totalUnfunded = GAMES_JSON.filter( (game) => game.pledged < game.goal).length;

const displayStr = `A total of ${totalPledged.toLocaleString('en-US')} has been raised for 
    ${GAMES_JSON.length} ${getPlural(GAMES_JSON.length)}. Currently, 
    ${totalUnfunded} ${getPlural(totalUnfunded)} remain unfunded. We need your help to fund 
    these amazing games!`
const fundingParagraph = document.createElement("p");
let topTwo = [sortedGames[0], sortedGames[1]];
let firstGameName = document.createElement("p");
let secondGameName = document.createElement("p");

contributionsCard.textContent = `${totalContributions.toLocaleString('en-US')}`;  
firstGameName.textContent = topTwo[0].name;
fundingParagraph.textContent = displayStr;
descriptionContainer.appendChild(fundingParagraph);
firstGameContainer.appendChild(firstGameName);
gamesCard.textContent = `${GAMES_JSON.length}`;  
raisedCard.textContent = `$${totalPledged.toLocaleString('en-US')}`; 
secondGameName.textContent = topTwo[1].name;    
secondGameContainer.appendChild(secondGameName);  


allBtn.addEventListener("click", showAllGames);
fundedBtn.addEventListener("click", filterFundedOnly);
unfundedBtn.addEventListener("click", filterUnfundedOnly);  


