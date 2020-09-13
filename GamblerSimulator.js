//Stake of $100 every day and bet $1 every game is constant.
const STAKE = 100;
const BET = 1;
const WIN = 1;

//Initialize stake for the day
var currentStake = STAKE;

playGame = () => Math.floor(Math.random() * 10) % 2;


function calculateCurrentStake(playGame) {
    currentStake = (playGame() == WIN) ? currentStake += BET : currentStake -= BET;
    (currentStake > 100) ? console.log("Player Won"): console.log("Player Lost");
    return currentStake;
}

console.log("Current Stake : " + calculateCurrentStake(playGame))