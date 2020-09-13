//Stake of $100 every day and bet $1 every game is constant.
const STAKE = 100;
const BET = 1;
const WIN = 1;

//Initialize stake for the day
var currentStake = STAKE;

calculateFiftyPercentOfStake = () => Math.floor(50 * STAKE / 100);

//Initializing max and min limit for the day 
var maxStakeLimit = STAKE + calculateFiftyPercentOfStake();
var minStakeLimit = STAKE - calculateFiftyPercentOfStake();

playGame = () => Math.floor(Math.random() * 10) % 2;

calculateCurrentStake = (playGame) => (playGame() == WIN) ? currentStake += BET : currentStake -= BET;

while (true) {
    if (currentStake <= minStakeLimit)
        break
    if (currentStake >= maxStakeLimit)
        break
    currentStake = calculateCurrentStake(playGame);
}
(currentStake == maxStakeLimit) ? console.log(`Player won for the day. \nCurrent Stake : ${currentStake}`): console.log(`Player lost for the day. \nCurrent Stake : ${currentStake}`);