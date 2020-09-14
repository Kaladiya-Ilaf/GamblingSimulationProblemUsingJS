//Stake of $100 every day and bet $1 every game is constant.
const STAKE = 100;
const BET = 1;
const WIN = 1;
const NUM_OF_DAYS = 20;

var days = 1,
    currentBalance = 0,
    totalAmount = NUM_OF_DAYS * STAKE,
    currentStake,
    betsLost,
    betsWon,
    totalBets;

calculateFiftyPercentOfStake = () => Math.floor(50 * STAKE / 100);

//Initializing max and min limit for the day 
var maxStakeLimit = STAKE + calculateFiftyPercentOfStake();
var minStakeLimit = STAKE - calculateFiftyPercentOfStake();

playGame = () => Math.floor(Math.random() * 10) % 2;

while (days <= NUM_OF_DAYS) {
    //Initialize stake for the day
    currentStake = STAKE;
    betsWon = 0;
    betsLost = 0;
    while (true) {
        if (currentStake <= minStakeLimit)
            break
        if (currentStake >= maxStakeLimit)
            break;
        if (playGame() == WIN) {
            currentStake += BET
            betsWon += 1;
        } else {
            currentStake -= BET;
            betsLost += 1
        }
    }
    totalBets = betsWon + betsLost;
    console.log("No. of bets played: " + totalBets)

    if (currentStake == maxStakeLimit) {
        console.log(`Player won for the day ${days}. 
Current Stake : ${currentStake}.
Bets Won : ${betsWon}.`);
    } else {
        console.log(`Player lost for the day ${days}.
Current Stake : ${currentStake}.
Bets Lost : ${betsLost}.`);
    }

    currentBalance += currentStake;
    days++;
}

console.log(`Balance after playing for ${NUM_OF_DAYS} : ${currentBalance}`);
((currentBalance - totalAmount) > 0) ? console.log("Player won for this month : " + (currentBalance - totalAmount)): console.log("Player lost for this month: " + (currentBalance - totalAmount));