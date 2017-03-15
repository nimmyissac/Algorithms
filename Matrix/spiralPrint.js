var spiralPrint = function(array) {
  var left = 0; var top = 0;
  var right = array[0].length-1; var bottom = array.length-1;
  var result = [];
  while(left <= right && top <= bottom) {
    var col = left;
    while(col <= right) {
      result.push(array[top][col++]);
    }
    top++; var row = top;
    while(row <= bottom) {
      result.push(array[row++][right]);
    }
    right--; col = right;
    while(col >= left) {
      result.push(array[bottom][col--]);
    }
    bottom--; row = bottom;
    while(row >= top) {
     result.push(array[row--][left]);
    }
    left++;
  }
  console.log(JSON.stringify(result));
}
var array = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]];
spiralPrint(array);


