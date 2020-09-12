//Stake of $100 every day and bet $1 every game is constant.
const STAKE = 100;
const BET = 1;
const WIN = 1;

//Initialize stake for the day
var currentStake = STAKE;

function playGame() {
    return Math.floor(Math.random() * 10) % 2
}

function calculateCurrentStake(playGame) {
    if (playGame() == WIN) {
        currentStake += BET;
        console.log("Player Won!");
    } else {
        currentStake -= BET;
        console.log("Player Lost!");
    }
    return currentStake;
}

console.log("Current Stake : " + calculateCurrentStake(playGame))