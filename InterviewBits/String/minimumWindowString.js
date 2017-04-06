/*
Window String
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in linear time complexity.
Note that when the count of a character C in T is N, then the count of C in minimum window in S should be at least N.

Example :

S = "ADOBECODEBANC"
T = "ABC"
*/

var minWindowString= function(S, T) {
  if((!S || !T) || (T.length > S.length) )return -1;
  var count={};
  T.split('').forEach(function(element) {
    count[element] =  count[element] ? (count[element] + 1) : 1;
  });
  /*---for storing found characters in S---*/
  var found ={}; 
  var start = 0; var end = 0;
  var foundCount = 0;
  var min = Number.MAX_VALUE;
  var minString = "";
  while(end < S.length) {
    var endChar = S.charAt(end);
    if(count[endChar]) {
      if(found[endChar]) {
        if(found[endChar] < count[endChar]) {
          foundCount++;
        }
        found[endChar] += 1;
      } else {
        found[endChar] = 1;
        foundCount++;
      }
    }
    if(foundCount === T.length) {
      var startChar = S.charAt(start);
      while((!count[startChar]) || (found[startChar] > count[startChar])) {
         /*--this means the startchar is repeating somewhere in the coming indices, therefore you can advance your start pointer--*/
         if(count[startChar] && (found[startChar] > count[startChar])) {
           found[startChar] -= 1;
         }
         start++;
         startChar = S.charAt(start);
      }
     if(min > S.substring(start, end+1).length) {
        minString = S.substring(start, end+1);
        min = minString.length;
      }
    }
    end++;
  }
   return minString;

}
console.log(minWindowString("ADOBECODEBABNC", "ABC"));
