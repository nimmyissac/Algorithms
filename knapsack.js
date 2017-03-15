var knapsack = function(kg, price, knapsackWeight) {
   var maxPrice = 0;
   var findMax = function(index, remainingWeight, totalPrice) {
     if(index >= kg.length || kg[index] > remainingWeight){
       return;
     }
     maxPrice = (totalPrice > maxPrice) ? totalPrice : maxPrice;
     console.log(remainingWeight);
     //he chooses to take the thing
     findMax(index+1, remainingWeight-kg[index], totalPrice+price[index]);
     //he chooses not to take the thing
     findMax(index+1, remainingWeight, totalPrice);
   }
   findMax(-1, knapsackWeight, 0);
   return maxPrice;
}
console.log(knapsack([50, 20, 30, 5], [6000, 100, 120, 1000], 50));
// +var val = [6000, 100, 120, 1000];
// +var wt = [50, 20, 30, 5];
// +var W = 50;