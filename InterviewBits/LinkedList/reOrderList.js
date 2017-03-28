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
function print(root) {
  var str = "";
  while(root.next!==null) {
    str += (root.data+ ", ");
    root = root.next;
  }
  str += root.data;
  console.log(str);
}
// var root = new Node(1);
// var one = new Node(5);
// var two = new Node(4);
// var three = new Node(3);
// var four = new Node(8);
// var five = new Node(6);
// var six = new Node(2);
// root.next = one;
// one.next = two;
// two.next = three;
// three.next = four;
// four.next = five;
// //five.next = null;
// five.next = six;
// six.next = null;
 
 var root = new Node(99);
 root.next = new Node(87);
 root.next.next = null;
print(reorderList(root));