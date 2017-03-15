function longestConsecutiveSubsequence(array) {
  var set = new Set();
  array.forEach( element => set.add(element) );
  var max = 0;
   for(let i of set) {
     var count = 1;
     var left = i-1;
     var right = i+1;
     while( set.has( left ) ) {
       set.delete(i);
       left = left - 1;
       count ++;
     }
     while( set.has( right ) ) {
       right = right + 1;
       count ++;
     }
     if( count > max ) {
       max = count;
     }
   }
   return max;
  }

console.log(longestConsecutiveSubsequence( [1, 9, 3, 10, 4, 20, 2] ));
