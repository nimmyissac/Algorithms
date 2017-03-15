

function TreeNode(data){
   this.data = data
   this.left = null
   this.right = null
}

var isBalanced = function(node) {
  

var flag = 1;
var check = function(node) {
    if(!(node)) {
     return 0;
    }
    if(flag === 0 ){
      return;
    }
    
    var left =  (check(node.left) + 1);
    var right = (check(node.right) + 1);
    if(Math.abs(right - left) > 1) {
      flag = 0;
    }
    return Math.max(right, left);

  }
  check(node)
  return flag;
}




var root = new TreeNode(1);
root.left = new TreeNode(2);
//root.left.left = new TreeNode(3);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.left.right = new TreeNode(5);

console.log(isBalanced(root));





/*

var check = function(node) {
  if(!(node)) {
    return 0;
  }
  var left = check(node.left);
  if(left === -1) { // not balanced
    return -1;
  }
  var right = check(node.right);
  if(right === -1) {
    return -1;
  }
  var diff = right - left;
  // tree height differs more than by 1
  if(Math.abs(diff) > 1) {
    return -1;
  }
  return 1+ Math.max(left, right);

}
 if(check(node) === -1) {
    return 0;
 } else {
    return 1;

 }

}*/
