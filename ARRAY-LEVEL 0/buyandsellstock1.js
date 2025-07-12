//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

//kadane's algorithm
//Time Complexity: O(n)

var maxProfit = function(prices) {
    let buy = prices[0];
    let maxProfit=0;
    if(prices.length === 0) return 0;
    for(let i = 1;i<prices.length;i++){
          if(prices[i] < buy){
            buy = prices[i];
          }     else{
            maxProfit = Math.max(maxProfit, prices[i] - buy)
          }
    }
    return maxProfit;
    
};