/* http://www.algolist.net/Data_structures/Binary_heap/Remove_minimum */
var array = [1,3,6,5,9,8];
var removeMin = function () {
  result = array[0];
  array[0] = array[array.length-1];
  array.splice(array.length-1,1);
  if(array.length === 1) return result;
  else {
   function rearrangeArray (index) {
     // if index is undefined or no left child, return
      if(!(array[index]) || (!(array[(2*index)+1]))) return ;
      var nextIndex;
      // seeing if there is a right child
      if(array[(2*index)+2]) {
        (array[(2*index)+2] < array[(2*index)+1]) ? nextIndex= (2*index)+2 : nextIndex= (2*index)+1;
      } else {
        nextIndex= (2*index)+1;
      }
      if (array[index] < array[nextIndex]) {
        return;
      } else {
        var temp = array[index];
        array[index] = array[nextIndex];
        array[nextIndex] = temp;
        rearrangeArray(nextIndex);
      }

    }
    rearrangeArray(0);
    console.log(JSON.stringify(array));
    return result;
  }
}
console.log(removeMin());