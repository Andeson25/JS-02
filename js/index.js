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
let cars={
  fastes:'Tesla roadster',
  slowest:'jigul',
  theBest:'car_name'
}
 for (let key in cars) {
  prn(cars[key]);
}
