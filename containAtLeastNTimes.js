//Write a function that accepts three arguments and returns true if the
//array contains the element n times, where n is the third argument.

var arrayContainsNTimes= function(ar,String,n){
  var count =0;
  for (var i=0; i<ar.length; i++){
    if (ar[i] === String){
      count += 1;
    }   
  }
  return (count >=n);
}
