var permutation = function(string) {
  var findPermutation = function(fixed, str) {
    for( var i =0; i<str.length; i++ ) {
      console.log("str ", str);
      if(str === "") {
      console.log(fixed);
      return;
      }
      var temp = str[0];
      str[0] = str[i];
      str[i] = temp;
      findPermutation( fixed+str[0], str.substring(1) );
    }
  }
  findPermutation("", string);
}
permutation("abc");