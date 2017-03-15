
 var evalRPN = function(A){
      var stackNum = [];
      var stackOp = [];
      A.forEach(function(element){
         var result;
         if(element!== "+" && element!== "-" && element!== "/" && element!== "*") {
           stackNum.push((element)); 
         } else {
            if(element === "/" || element === "*"){
             var second = parseInt(stackNum.pop());  
             var first = parseInt(stackNum.pop());
            if(element === "/") {
              result = first/second;
             } else {
              result = first*second;  
            }  
            stackNum.push(result);
           
         } else {
            if(element === "+" || element === "-"){
              stackOp.push(element);
           }
         }
          
         }
          
      }); 
     while(stackNum.length !== 1) {
         var second = parseInt(stackNum.pop());  
         var first = parseInt(stackNum.pop()); 
         var op = stackOp.pop();
         if(op === "+") {
             second = second + first;
         } else {
             second = first - second;
         }
        stackNum.push(second);
      }
      return stackNum.pop();
      
 }
console.log(evalRPN([ "5", "1", "2", "+", "4", "*", "+", "3", "-" ]));