function fibonacciCycle(num) {
  let a = 1,
    b = 0,
    temp;
  while (num > 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }
  return b;
}
function fibonacciArray(num) {
  let array = [1, 1];
  let c;
  for (let i = 0; i < num - 2; i++) {
    c = array.length;
    array.push(array[c - 2] + array[c - 1]);
  }

  return array[array.length - 1];
}
function fibRec(n) {
  return n <= 2 ? 1 : fibRec(n - 1) + fibRec(n - 2);
}
var a = prompt("введіть порядковий номер числа фібоначі, яке буде розраховано"); 
document.write(fibonacciCycle(a) + "<br>");
document.write(fibonacciArray(a) + "<br>");
document.write(fibRec(a));
