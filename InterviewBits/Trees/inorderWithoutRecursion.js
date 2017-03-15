function TreeNode(data){
   this.data = data
   this.left = null
   this.right = null
}

var inorderTraversal = function(A){
  var result = [];
  
  var calculateInorder = function() {
   var array = [];
   var node = root;
   array.push(node);
   while(array.length !== 0) {

     while(node.left !== null) {
       array.push(node.left);
       node = node.left;
     }
     var poppedValue = array.pop();
     result.push(poppedValue.data);
     if(poppedValue.right !== null) {
        node = popped.right;
     } else {
        if(array.length === 0) {
          continue;
        }
        poppedValue = array.pop();
        result.push(poppedValue.data);
        node = poppedValue.right;
     }
     array.push(node);
   }
  }
  calculateInorder();
return result;
 
}

var root = new TreeNode(1);
       
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        

console.log(JSON.stringify(inorderTraversal(root)));