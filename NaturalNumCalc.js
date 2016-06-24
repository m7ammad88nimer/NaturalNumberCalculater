(function(){
  "use strict";
  var sum=0;
  for(var i=5; i<100; i++){
    if(i%5 === 0 || i%7 === 0){
      sum+=i;
    }
  }
  console.log("The result is: " + sum);
})();