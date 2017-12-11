var a=prompt();

function fibonacci(num){
    var a = 1, b = 1, temp;
  
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
    return b;
  }
alert(fibonacci(a));
