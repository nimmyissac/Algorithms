function Node(data){
   this.data = data
   this.next = null
}
var findMidNode = function(node) {
  console.log("inside mid root ", node.data);
  var node1 = node;
  var node2 = node;
  while(node2!==null && node2.next !== null) {
    node1 = node1.next;
    node2 = node2.next.next;
  }
  console.log("insid mid ", node1.data);
  return node1;
}
var reverse = function(node) {
  console.log("reverse with root = ", node.data);
  var pre = null;
  var current = node;
  var next = node;
  while(current !== null) {
    next = current.next;
    current.next = pre;
    pre = current;
    current = next;
  }
  console.log(print(pre));
  return pre;
}
var reorderList = function(a){
  var mid = findMidNode(a);
  if(!(mid.next)) return a;
  var headofReversedList = reverse(mid.next);
  var node1 = a;
  var node2 = headofReversedList;
  mid.next = null;
  print(a);
  while(node1!==headofReversedList ) {
    var next1 = node1.next;
    node1.next = node2;
    node1 = next1;
    var next2= node2.next;
    node2.next = node1;
    node2 = next2;
     if(!(node2)) {
       break;
      }
  } 
   return a;
 }