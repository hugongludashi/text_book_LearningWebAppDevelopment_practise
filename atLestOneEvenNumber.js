//Write a function that accepts an array of numbers and returns true if it contains at
//least one even number, false otherwise.

var atLestOneEvenNumber = function(n){
  for (var i =0; i< n.length; i++){
    if (n[i]%2===0){
      return true;
    }
  }
  return false;
}
