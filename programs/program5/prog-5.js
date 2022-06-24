var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var topValues = arr.sort((a,b) => b-a).slice(0,10);

function getArraySum(a){
      var total=0;
      for(var i in a) {
          total += a[i];
      }
      document.write(total);
  }
  var result = getArraySum(topValues);
  document.write('<br>',topValues);
