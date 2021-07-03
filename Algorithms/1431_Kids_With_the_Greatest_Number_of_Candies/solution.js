/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies);
    let result = [];
    candies.forEach(function(candy) {
        result.push(candy + extraCandies >= max);
    });
    return result;
};