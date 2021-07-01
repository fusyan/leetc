/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let max = 0;
    
    accounts.forEach(function(account) {
        let sum = account.reduce((prev, current)=> prev + current, 0);
        if (max < sum) {
            max = sum;
        }
    });
    return max;
};