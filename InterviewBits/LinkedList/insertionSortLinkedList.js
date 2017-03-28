function Node(data){
 this.data = data
 this.next = null
}

var insertionSortList = function(a){
  var node = a;
  var sortedHead = node;
  node = node.next;
  sortedHead.next = null;
  while (node !== null) {
    var current = node;
    node = node.next;
   if(current.data < sortedHead.data) {
      current.next = sortedHead;
      sortedHead = current;
    } else {
      var sortedList = sortedHead;
      var prev = null;
      while(sortedList.next !== null && sortedList.data < current.data) {
         prev = sortedList;
         sortedList = sortedList.next;
      }
      if(sortedList.next === null) {
        if(sortedList.data > current.data) {
          prev.next = current;
          current.next = sortedList;
        } else {
          sortedList.next = current;
          current.next = null;
        }
      } else {
        prev.next = current;
        current.next = sortedList;
      }

    }
    
  }
  return sortedHead;
}
function print(root) {
  var str = "";
  while(root.next!==null) {
    str += (root.data+ ", ");
    root = root.next;
  }
  str += root.data;
  console.log(str);
}

var root = new Node(1);
var one = new Node(5);
var two = new Node(4);
var three = new Node(3);
var four = new Node(8);
var five = new Node(6);
var six = new Node(2);
root.next = one;
one.next = two;
two.next = three;
three.next = four;
four.next = five;
five.next = six;
six.next = null;
print(insertionSortList(root));
// var insertionSortList = function(a){
//   var node = a;
//   var array = [];
//   while(node!==null) {
//     array.push(node);
//     node = node.next;
//   }
//   var i =1;
//   while(i < array.length) {
//     var j = i-1;
//     var val = array[i].data;
//     while(j >= 0 && array[j].data > val) {
//       var temp = array[j].data;
//       array[j].data = array[j+1].data;
//       array[j+1].data = temp;
//       j--;
//     }
//     i++;
//   }
//   return array[0];
// }