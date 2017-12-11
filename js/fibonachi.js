var a=prompt("введіть порядковий номер числа фібоначі, яке буде розраховано за допомгою циклу ");
function fibonacci(num){
    num--;
    var a = 1, b = 0, temp;
    while (num >= 0){
      temp = a;
      a = a + b;
      b=temp;
      num--;
    }
    return b;
  }
alert(fibonacci(a));
