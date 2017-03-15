var longestCommonPrefix = function(A){
     var shortestStr = A[0];
     //get the shortest string
     A.forEach(function(element) {
       if(element.length < shortestStr.length){
           shortestStr = element;
       }  
     });
     // iterate and compare 
     var commonStr = shortestStr;
       
     for(var index = 0; index < A.length; index++) {
       var newStr = "";
       for(var i = 0; i < commonStr.length; i++) {
         if(commonStr.charAt(i) === A[index].charAt(i)) {
             newStr+=commonStr.charAt(i);
         } else {
             break;
         }  
       }
       commonStr = newStr;
     }
       return commonStr;
 }

 console.log(longestCommonPrefix([ "abcd", "abde", "abcf" ]));