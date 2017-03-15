
var findMaxSum = function(array) {
  var maxSum = array[0];
  var find = function(array, sum) {
    if(sum > maxSum) {
      maxSum = sum; return maxSum;
    }
    for(var i =1; i < array.length; i++) {
      find(array.splice(1), maxSum+array[i]);
      find(array.splice(1), maxSum);

    }
  }
  find(array, maxSum);
  return maxSum;
}