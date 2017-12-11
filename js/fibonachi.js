function fibonacciLoop(num)
 {
  let a = 1,
    b = 0,
    temp;
  for (; num > 0; num--) 
  {
    temp = a;
    a = a + b;
    b = temp;
  }
  return b;
}
function fibonacciArray(num)
 {
  const array = [1, 1];
  for (let i = 0; i < num - 2; i++) 
  {
    array.push(array[array.length - 2] + array[array.length - 1]);
  }
  return array.pop();
}
function fibRec(n) {
  return n <= 2 ? 1 : fibRec(n - 1) + fibRec(n - 2);
}
var a = prompt("введіть порядковий номер числа фібоначі, яке буде розраховано");
document.write("Цикл: " + fibonacciCycle(a) + "<br>");
document.write("Масив: " + fibonacciArray(a) + "<br>");
document.write("Рекурсія: " + fibRec(a));
