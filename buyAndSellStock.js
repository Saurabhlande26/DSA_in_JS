/**
 * @param {number[]} prices
 * @return {number}
 */

// function maxProfit(prices) {
//     let minPrice = Infinity;
//     let maxProfit = 0;
//     for (const price of prices) {
//         // Update the minimum price seen so far
//         if (price < minPrice) {
//             console.log({ minPrice })
//             minPrice = price;
//         }

//         // Calculate profit if sold today
//         const profit = price - minPrice;
//         console.log({ profit })

//         // Update maximum profit
//         if (profit > maxProfit) {
//             maxProfit = profit;
//         }
//     }

//     return maxProfit;
// }


const maxProfit = (prices) => {
    let maxProfit = 0;
    let minValue = Infinity;

    for (const value of prices) {
        if (value < minValue) {
            minValue = value
        }
        const profit = value - minValue;

        if (profit > maxProfit) {
            maxProfit = profit
        }
    }
    return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))