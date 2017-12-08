// {
function prn(el) {
  document.write(el + `<br>`);
}

//   function printBold(el) {
//     prn(`<b> ${el}<b>`);
//   }

//   function printArray(array) {
//     array.forEach(element => printBold(`${element} <br>`));
//   }

//   class superCar {
//     constructor(model, engine, color) {
//       this.model = model;
//       this.engine = engine;
//       this.color = color;
//     }
//     print() {
//       prn(`<br>`);
//       prn(`Model: ` + this.model + `<br>`);
//       prn(`Engine: ` + this.engine + `<br>`);
//       prn(`Color: ` + this.color + `<br>`);
//     }
//   }

//   let tesla = new superCar(`Tesla Roadster`, `Electric`, `red`);
//   tesla.print();

//   let TeslaX = Object.create(tesla);
//   TeslaX.model = `Tesla Model X`;
//   TeslaX.print();
//   function kek() {
//     TeslaX.print();
//   }
// }

// kek();
function counter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

let cntr = counter();
prn(cntr());
prn(cntr());

let cntr2 = counter();
prn(cntr2());
prn(cntr2());

var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};
prn(fibonacci_series(10));
