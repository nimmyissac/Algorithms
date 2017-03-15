//Sort the array
//swap every second element to its previous
function wave(A) {
  var A = A.sort(function(a, b) {
    return a-b;
  });
  for(var item = 1; item < A.length; item = item+2) {
    var temp = A[item-1];
    A[item-1] = A[item];
    A[item] = temp;
  }
  return JSON.stringify(A);
}

console.log(wave([4,3,7,1,9]));