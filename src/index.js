// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    answer = new Object();
    var coins = [50, 25, 10, 5, 1], Names = ['H', 'Q', 'D', 'N', 'P'], per;
    var errror = {
        error: "You are rich, my friend! We don't have so much coins for exchange"
    };

    if(currency > 10000) return errror;
    if(currency < 0) return answer;
    for(let i = 0; i<5; i++){
        per = Math.floor(currency / coins[i]);
        if(per != 0) answer[Names[i]] = per;
        currency -= per*coins[i];
    }

    return answer;
}
