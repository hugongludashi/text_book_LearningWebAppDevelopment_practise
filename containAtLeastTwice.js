//Write a function that accepts two arguments—an array of strings and a string, returns true only if the
//array contains the given string at least twice.


var arrayContainsTwo= function(ar,String){
  var count =0;
  for (var i=0; i<ar.length; i++){
    if (ar[i] === String){
      count += 1;
    }   
  }
  return (count >=2);
}
