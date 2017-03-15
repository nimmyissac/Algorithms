 var letterCombinations = function(A){
   var hashMap = {
    1: "1",
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
    0: "0"
   }
   var result = [];
   var numtoDigits = function(digits, temp) {
    if(digits.length === 0) {
      result.push(temp);
      return;
    }
    var digit = digits.charAt(0);

    var letters = hashMap[digit];
    for(var i=0; i<letters.length; i++) {
      temp += letters.charAt(i);
      numtoDigits(digits.substring(1), temp);
      temp = temp.substring(0, temp.length-1);
    }
  }
  numtoDigits(A.toString(),"");
  return result;
 }

 console.log(letterCombinations(12));