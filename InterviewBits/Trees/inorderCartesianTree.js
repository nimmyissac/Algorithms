function TreeNode(data){
   this.data = data
   this.left = null
   this.right = null
}

var buildTree = function(array) {
  var max_index = function(array) {
    if(array.length === 0) return;
    var max = array[0];var index = 0;
    array.forEach(function(element, i) {
      if(element > max) {
         max = element;
         index = i;
      }
    });
    return [max, index];
  }
  var build = function(arr, index, node) {
    if(arr.length === 0){
      return;
    }
    var leftTree = arr.slice(0, index);
    var rightTree = arr.slice(index+1);
    var maxindex_left = max_index(leftTree);
    var maxindex_right = max_index(rightTree);
    if(maxindex_left) {
      node.left = new TreeNode(maxindex_left[0]);

    }
    if(maxindex_right) {
      node.right = new TreeNode(maxindex_right[0]);
    }
    if(maxindex_left) {
      build(leftTree, maxindex_left[1], node.left);
     
    }
    if(maxindex_right) {
       build(rightTree, maxindex_right[1], node.right);
    }
   
    
    
   
  };
 var root = new TreeNode(max_index(array)[0]);
 build(array, max_index(array)[1], root);
 return root;
}
function inorder(node){
   if(node){
      inorder(node.left);
      console.log(node.data);
      inorder(node.right);
   }
}
((buildTree([1, 5, 10, 40, 30, 15, 28, 20])));
console.log((inorder(buildTree([1, 5, 10, 40, 30, 15, 28, 20]))));