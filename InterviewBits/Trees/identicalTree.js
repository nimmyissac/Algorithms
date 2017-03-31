// Definition for a  binary tree node

/*See if 2 trees are similar using morris inorder traversal*/
 function TreeNode(data){
  this.data = data
  this.left = null
  this.right = null
 }

var isSameTree = function(a, b) {
  var currentA = a;
  var currentB = b;
  while(currentA !== null && currentB !== null) {
    if(currentA.left === null || currentB.left === null) {
       if(currentA.left !== null || currentB.left!== null) return false;
       if(currentA.data !== currentB.data) return false;
       currentA = currentA.right;
       currentB = currentB.right;
    } else {
       var predecessorA = currentA.left;
       var predecessorB = currentB.left;
       while((predecessorA.right !== currentA || predecessorB.right!== currentB) && (predecessorA.right!==null || predecessorB.right!==null)) {
          if(predecessorA.right === currentA || predecessorB.right === currentB) {
             return false;
          }
          if(predecessorA.right === null || predecessorB.right === null) {
             return false;
          }
          predecessorA = predecessorA.right;
          predecessorB = predecessorB.right;
       }

       if(predecessorA.right === null || predecessorB.right===null) {
          if(predecessorA.right!==null || predecessorB.right!==null) {
            return false;
          }
          predecessorA.right = currentA;
          predecessorB.right = currentB;
          currentA = currentA.left;
          currentB = currentB.left;
        
       } else {
          if(predecessorA.right !== currentA || predecessorB.right !== currentB) {
             return false;
          }
          predecessorB.right = null;
          predecessorA.right = null;
          if(currentA.data !== currentB.data) return false;
          currentA = currentA.right;
          currentB = currentB.right;
       }
      }
  }
  return (!(currentA || currentB )) ;
  }
 var a = new TreeNode(1);
  a.left = new TreeNode(2);
  a.right = new TreeNode(3);
  var b = new TreeNode(1);
  b.left = new TreeNode(2);
  b.right = new TreeNode(3);
 // ===b.right.right = new TreeNode(3);
console.log(isSameTree(a,b));




