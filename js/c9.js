{
    function prn(val) {
        document.write(val + '<br>');
    }
    
    
 for (let i = 100; i >= 0; i-=2) {
     if (i % 2 !== 0) {
         continue;
     }
     document.write(i);
     document.write('<br>');
 
 let i = 0;
 while (i < 100) {
     document.write(i);
     document.write('<br>');
     i++;
 
 let i = 0;
 do {
     document.write(i);
     document.write('<br>');  
     i++;
 } while (i > 100)
 let products = [];
 products.push('Audi TT');
 products.push('Toyota Avalon');
 products.push('Ferrari LaFerrari');
 prn(products.length);
 products[3] = 'Volkswagen Polo';
 prn(products.length);
 products[10] = 'Porsche Panamera';
 prn(products.length);
 // for (let i = 0; i < products.length; i++) {
 //     prn('<b>'+products[i]+'</b>');
 // 
 products.forEach(printBold);
 function printBold(element) {
     prn('<b>'+element+'</b>');
 
 products.forEach(function(el){
     prn('<b>'+el+'</b>');
 })
 products.sort()
 products.forEach( el => prn('<b>'+el+'</b>') )
 let nums = [1,23,45,2,87,33,2,4,7];
 nums.sort( (a,b) => a - b );
 prn(nums)
 prn('Hello'.split('').reverse().join(''));
    
    let cars = {};
    
    cars['fastest'] = 'Tesla Roadster';
    cars['cheapest'] = 'Tata Nano';
    cars['favourite'] = 'Ford Mustang';
    
    prn(cars['fastest']);
    prn(cars.length);
    
    let counter = 0;
    for (let key in cars) {
        counter++;
    }
    prn(counter);
    
    let jeep = {};
    jeep.model = 'Grand Cheerokee';
    jeep.engine = 'Turbo Diesel';
    jeep.color = 'Red';
    jeep.run = function() {
        prn('Jeep is running');
    }
    jeep.run();
    
    function Car(model, engine, color) {
        this.model = model;
        this.engine = engine;
        this.color = color;
        this.run = function() {
            prn(this.model + ' is running');
        }
        return this;
    }
    
    // new: this = {}
    let lambo = new Car('Lambordghini Aventador', 'V8', 'yellow');
    lambo.run();
    
    let luaz = {
        model: 'Luaz',
        engine: '1.2',
        color: 'green',
        run: function() {
            prn(this.model + ' is running');
        }
    };
    luaz.run();
    
    class SuperCar {
        constructor(model, engine, color) {
            this.model = model;
            this.engine = engine;
            this.color = color;
        }
        run() {
            prn(this.model + ' is running');
        }
    }
    
    let tesla = new SuperCar('Tesla Roadster', 'electric', 'red');
    tesla.run();
    
    var teslaX = Object.create(tesla);
    teslaX.model = 'Tesla Model X';
    teslaX.run();

}

teslaX.run();

prn('Hello');

function counter() {
    let count = 0;
    return function () {
        return ++count;
    }
}

let cntr = counter();
prn(cntr());
prn(cntr());

let cntr2 = counter();
prn(cntr2());
prn(cntr2());
