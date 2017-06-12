/*Write a function that accepts two arguments—an array of strings and a string—and
* returns true if the string is contained in the array, false otherwise. For example,
* your function should behave as follows:
* arrayContains(["hello", "world"], "hello");
* //=> true
* arrayContains(["hello", "world"], "goodbye");
* //=> false
* arrayContains(["hello", "world", "goodbye"], "goodbye");
* //=> true
*/


var arrayContains = function(b,c){
  var d = b.length;
  for (var i = 0; i<d;i++){
    if (b[i] ===c){
      return true;
    }
  }
  return false;
}

arrayContains(["hello", "world"], "hello");
arrayContains(["hello", "world"], "goodbye");
arrayContains(["hello", "world", "goodbye"], "goodbye");
