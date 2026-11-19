// function

// deklarasi function
function sayHello() { // nama function
    console.log('hello'); // blok program
}
sayHello(); // memanggil function

// function expression
const hello = function() {
    console.log('hello');
}

hello(); // memanggil function expression

// arrow function
const world = () => {
    console.log('world');
}

world(); // memanggil arrow function

// function dengan parameter
function mahasiswa(nama) {
    console.log('Nama mahasiswa: ' + nama);
}

mahasiswa('Vino'); // memanggil function dengan parameter

// function dengan return value
function nilai(a, b) {
    return a + b;
}

console.log(nilai(10, 5)); // memanggil function dengan return value

// function dengan nilai default
function nilai2(x, y = 10) {
    return x + y;
}

const hasil = nilai2(10); // memanggil function dengan nilai default
console.log(hasil); // 20

// function dengan rest parameter
function sum(...nilai) {
    return nilai.reduce((total, num) => total + num, 0);
}

const total = sum(1, 2, 3, 4, 5); // memanggil function dengan rest parameter
console.log(total); // 15

 // function dengan callback
//  function inputData(callback) {
//     const nama = prompt('Masukkan nama mahasiswa:');
//     callback(nama);
// }

// inputData(function(nama) { // memanggil function dengan callback
//     console.log(nama);
// })

// function dengan closure
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(outerVariable, innerVariable);
    }
}

outerFunction("outside")("inside"); // memanggil function dengan closure
//innerFunction("inside"); // memanggil function dengan closure(error karena innerFunction tidak dapat diakses dari luar outerFunction)

// function dengan IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("IIFE");
})(); // memanggil function dengan IIFE

// function rekursif
function faktorial(n) {

    // base kondisi
    if (n === 0) {
        return 1;
    }

    return n * faktorial(n - 1);
}

console.log(faktorial(5)); // memanggil function rekursif

// function async/await

async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }catch(error) {
        console.error(`Error fetching data:`, error);
    }
}

fetchData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log(data))
    .catch(error => console.error(error));

// function dengan generator
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = generatorFunction();
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3

// function dengan method
const mhs = {
    nama: 'ELVino',

    dataMhs(){
        console.log(`Nama mahasiswa: ${this.nama}`);
    }

}

mhs.dataMhs(); // memanggil function dengan method

// function dengan constructor
function Person(nama, nim){
    this.nama = nama;
    this.nim = nim;
}

// function dengan prototype
Person.prototype.sayHello = function() {
    console.log(`Nama Mahasiswa : ${this.nama}`);
}

const mhs1 = new Person("Alvino", "2511102441280");
console.log(mhs1); // Alvino


// function dengan class
class Car{
    constructor(nama) {
        this.nama = nama;
    }
}

Car.prototype.model = function() {
    console.log(this.nama);
}
const car1 = new Car('Toyota');
console.log(car1); // Toyota