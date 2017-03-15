// var createCharCountObj = function(array) {
//   var obj = {};
//   array.forEach(function(element) {
//     if(element in obj) {
//       obj[element] += 1;
//     } else {
//       obj[element] = 1;
//     }
//   });
//   return obj;
// }



// var subsets = function(array) {
//   var charCountObj = createCharCountObj(array);
//   var character = [];
//   var count = [];
//   var result = [];
//   for(var key in charCountObj) {
//     character.push(key);
//     count.push(charCountObj[key]);
//   }

//   var findSubsets = function(tempArray, index) {
//     if(index >= array.length) {
//       return;
//     }
//     for(var i=index; i<character.length; i++) {
//       if(count[i] <= 0) {
//         continue;
//       }
//       tempArray.push(character[i]);
//       result.push(tempArray.slice());
//       count[i] -= 1;
//       findSubsets(tempArray, i);
//       count[i] += 1;
//       tempArray.pop();
//     }
//   }
//   findSubsets([],0);
//   return result;
// }
var appendCount = function(A) {
   A = A.map(function(item) {
     return item.toString();
   });
   A = A.sort();
   var arr = [];
  for(var i=0; i<A.length; i++) {
    var count = 1;
    while(A[i] === A[i+1]) {
      count++;
      i++;
    }
    arr.push([A[i], count]);
  }
  return arr;
}

var subsets = function(array) {
  var charCountArray = appendCount(array);
  var result = [[]];
  var findSubsets = function(tempArray, index) {
    if(index >= array.length) {
      return;
    }
    for(var i=index; i<charCountArray.length; i++) {
      if(charCountArray[i][1] <= 0) {
        continue;
      }
      tempArray.push(charCountArray[i][0]);
      result.push(tempArray.slice());
      charCountArray[i][1] -= 1;
      findSubsets(tempArray, i);
      charCountArray[i][1] += 1;
      tempArray.pop();
    }
  }
  findSubsets([],0);
  return result;
}

console.log(JSON.stringify(subsets([1,1,2,3])));
/*var appendCount = function(A) {
   A = A.map(function(item) {
     return item.toString();
   });
   A = A.sort();
   console.log(JSON.stringify(A));
  var arr = [];
  for(var i=0; i<A.length; i++) {
    var count = 1;
    while(A[i] === A[i+1]) {
      count++;
      i++;
    }
    arr.push([A[i], count]);
  }
  return arr;
}
var subsets = function(A){
 var arr = appendCount(A);
 result =[[]];
 var tempArr = [];
 var findSubsets = function(index, tempArr, a) {
  var arrCopy = a.slice();
  while(index < arrCopy.length) {
     if(arrCopy[index][1] > 0) {
       tempArr.push(arrCopy[index][0]);
       result.push(tempArr.slice());
       var newArr = arrCopy.slice();
       newArr[index][1] -= 1;
       findSubsets(index, tempArr, newArr);
       tempArr.pop();
       index++;
     } else {
       index++;
     }
     
   } 

 }
 findSubsets(0,tempArr, arr.slice());
 return result;
}
console.log(JSON.stringify(subsets(['A', 'A', 'B', 'C'])));*/

