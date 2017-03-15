var permute = function(arr, prev, result) {
   if(arr.length === 0) {
    result.push(prev);
    return;
  }
  for(var i=0; i<arr.length; i++) {
    var newArr = arr.slice(0);
    var prevBackUp = prev.slice(0);
    newArr[0] = arr[i];
    newArr[i] = arr[0];
    prev.push(newArr[0]);
    permute(newArr.slice(1), prev, result);
    prev = prevBackUp.slice();
    
  }
  return result;
}


console.log((permute([1,2,3], [], [])));