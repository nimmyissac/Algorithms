var combine = function(n, k){
  var generateArray = function() {
    var array = [];
    for(var i = 1; i<=n; i++) {
      array[i] = 1;
    }
    return array;
  }
  var array = generateArray();
  var tempArray = [];
  var result = [];
  var createCombinations = function(index) {

    if(tempArray.length === k) {
      result.push(tempArray.slice());
      return;
    }
    for(var i=index; i<array.length; i++) {
      if(array[i] === 0) {
        continue;
      }
      tempArray.push(i);
      array[i] = 0;
      createCombinations(i);
      array[i] = 1;
      tempArray.pop();
    }

  }
  createCombinations(1);
  return result;
  
}
console.log(combine(4,2));