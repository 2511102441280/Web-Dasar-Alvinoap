// array

let dataMhs = ["Alvino", "Revino", "Devino", "Davino", "Jovino"];
console.log(dataMhs);

// menampilkan data array berdasarkan index
console.log(dataMhs[0]); // Alvino
console.log(dataMhs[1]); // Revino
console.log(dataMhs[2]); // Devino
console.log(dataMhs[3]); // Davino
console.log(dataMhs[4]); // Jovino
console.log(dataMhs[5]); // undefined   

//fungsi/method array

// length
console.log(dataMhs.length); // 5

//fungsi push untuk menambahkan data ke array
dataMhs.push("Dovino");
console.log(dataMhs); // ["Alvino", "Revino", "Devino", "Davino", "Jovino", "Dovino"] 

// fungsi pop untuk menghapus data terakhir dari array
dataMhs.pop();
console.log(dataMhs); // ["Alvino", "Revino", "Devino", "Davino", "Jovino"]

// fungsi shift untuk menghapus data pertama dari array
dataMhs.shift();
console.log(dataMhs); // ["Revino", "Devino", "Davino", "Jovino"]

//fungsi unshift untuk menambahkan data pertama dari array
dataMhs.unshift("Elvino");
console.log(dataMhs); // ["Elvino", "Revino", "Devino", "Davino", "Jovino"]

// fungsi splice untuk menghapus data dari array
dataMhs.splice(2, 1);
console.log(dataMhs); // ["Elvino", "Revino", "Davino", "Jovino"]

// fungsi slice untuk menampilkan data dari array
let dataMhs2 = dataMhs.slice(1, 3);
console.log(dataMhs2); // ["Revino", "Davino"]

// fungsi join untuk menggabungkan data dari array menjadi string
let dataMhs3 = dataMhs.join(", ");
console.log(dataMhs3); // "Elvino, Revino, Davino, Jovino"

// fungsi concat untuk menggabungkan dua array
let dataMhs4 = dataMhs.concat(["Kevino", "Giovino"]);
console.log(dataMhs4); // ["Elvino", "Revino", "Davino", "Jovino", "Kevino", "Giovino"]

// fungsi sort untuk mengurutkan data dari array
let dataMhs5 = dataMhs.sort();
console.log(dataMhs5); // ["Elvino", "Davino", "Jovino", "Revino"]

// fungsi reverse untuk membalikkan data dari array
let dataMhs6 = dataMhs.reverse();
console.log(dataMhs6); // ["Revino", "Jovino", "Davino", "Elvino"]

// fungsi indexOf untuk mencari index dari data array
let index = dataMhs.indexOf("Jovino");
console.log(index); // 4