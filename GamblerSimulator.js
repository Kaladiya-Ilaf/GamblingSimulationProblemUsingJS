//Stake of $100 every day and bet $1 every game is constant.
const STAKE = 100;
const BET = 1;
const WIN = 1;

//Initialize stake for the day
var currentStake = STAKE;

playGame = () => Math.floor(Math.random() * 10) % 2;

calculateFiftyPercentOfStake = () => Math.floor(50 * STAKE / 100);

//Initializing max and min limit for the day 
var maxStakeLimit = STAKE + calculateFiftyPercentOfStake();
var minStakeLimit = STAKE - calculateFiftyPercentOfStake();

calculateCurrentStake = (playGame) => (playGame() == WIN) ? currentStake += BET : currentStake -= BET;

while (true) {
    if (currentStake <= minStakeLimit)
        break
    if (currentStake >= maxStakeLimit)
        break
    console.log(calculateCurrentStake(playGame))
}