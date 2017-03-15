var LinkedList = function() {
 this.head = null;
 this.add = function(data) {
   let newNode = new Node(data);
   if(this.head === null){
     this.head = newNode;
   } else {
     let tempNode = this.head;
     for(tempNode = this.head; tempNode.next !== null; tempNode = tempNode.next) ;
       tempNode.next = newNode;
     }
 }
 this.print = function() {
   let array = [];
   for(tempNode = this.head; tempNode !== null; tempNode = tempNode.next) {
     array.push(tempNode.data);
   }
   console.log(JSON.stringify(array));
 }
}

var Node = function(data) {
  this.data = data;
  this.next = null;
}

var list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.print();