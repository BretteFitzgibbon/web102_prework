/*****************************************************************************
 * Challenge 2: Review the provided code. The provided code includes:
 * -> Statements that import data from games.js
 * -> A function that deletes all child elements from a parent element in the DOM
*/

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






/*************************************************************************************
 * Challenge 4: Create the summary statistics at the top of the page displaying the
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: arrow functions, reduce, template literals
*/

// grab the contributions card element


// use reduce() to count the number of total contributions by summing the backers


// set the inner HTML using a template literal and toLocaleString to get a number with commas


// grab the amount raised card, then use reduce() to find the total amount raised


// set inner HTML using template literal


// grab number of games card and set its inner HTML



/*************************************************************************************
 * Challenge 5: Add functions to filter the funded and unfunded games
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: functions, filter
*/







// select each button in the "Our Games" section




// add event listeners with the correct functions to each button


/*************************************************************************************
 * Challenge 6: Add more information at the top of the page about the company.
 * Skills used: template literals, ternary operator
*/

// grab the description container


// use filter or reduce to count the number of unfunded games


// create a string that explains the number of unfunded games using the ternary operator


// create a new DOM element containing the template string and append it to the description container

/************************************************************************************
 * Challenge 7: Select & display the top 2 games
 * Skills used: spread operator, destructuring, template literals, sort 
 */


// use destructuring and the spread operator to grab the first and second games

// create a new element to hold the name of the top pledge game, then append it to the correct element

// do the same for the runner up item

