//Stake of $100 every day and bet $1 every game is constant.
const STAKE = 100;
const BET = 1;
const WIN = 1;
const NUM_OF_DAYS = 20;

var days = 1,
    currentBalance = 0,
    totalAmount = NUM_OF_DAYS * STAKE,
    currentStake;

calculateFiftyPercentOfStake = () => Math.floor(50 * STAKE / 100);

//Initializing max and min limit for the day 
var maxStakeLimit = STAKE + calculateFiftyPercentOfStake();
var minStakeLimit = STAKE - calculateFiftyPercentOfStake();

playGame = () => Math.floor(Math.random() * 10) % 2;

calculateCurrentStake = (playGame) => (playGame() == WIN) ? currentStake += BET : currentStake -= BET;

while (days <= NUM_OF_DAYS) {
    //Initialize stake for the day
    currentStake = STAKE;

    while (true) {
        if (currentStake <= minStakeLimit)
            break
        if (currentStake >= maxStakeLimit)
            break;
        calculateCurrentStake(playGame);
    }

    (currentStake == maxStakeLimit) ? console.log(`Player won for the day ${days}. 
Current Stake : ${currentStake}`): console.log(`Player lost for the day ${days}.
Current Stake : ${currentStake}`);
    currentBalance += currentStake;
    days++;
}

console.log(`Balance after playing for ${NUM_OF_DAYS} : ${currentBalance}`);
((currentBalance - totalAmount) > 0) ? console.log("Player won for this month : " + (currentBalance - totalAmount)): console.log("Player lost for this month: " + (currentBalance - totalAmount));