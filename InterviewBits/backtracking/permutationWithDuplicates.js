
var createCharCountObj = function(array) {
  var obj = {};
  array.forEach(function(element) {
    if(element in obj) {
      obj[element] += 1;
    } else {
      obj[element] = 1;
    }
  });
  return obj;
}

var permutation = function(array) {
  var charCountObj = createCharCountObj(array);
  var character = [];
  var count = [];
  var result = [];
  for(var key in charCountObj) {
    character.push(key);
    count.push(charCountObj[key]);
  }

  var permute = function(level, tempArray) {
  if(level === array.length) {
     console.log(JSON.stringify(tempArray));
     return;
  }
  for(var i=0; i<character.length; i++) {
    if(count[i] === 0){
      continue;
    }
    tempArray[level] = character[i];
    count[i]--;
    permute(level+1, tempArray);
    count[i]++;
  }
}
  permute(0,[]);
  return result
  // console.log(JSON.stringify(character));
  // console.log(JSON.stringify(count));
}

permutation(['A', 'A', 'B', 'C']);