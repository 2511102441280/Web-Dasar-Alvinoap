// operasi string

//char at
let datamhs = "Alvinoap";
console.log(datamhs);
console.log(datamhs.charAt(3));

// concat
let namadepan = "Alvino";
let namabelakang = "ap";
let namalengkap = namadepan.concat(" ", namabelakang);
console.log(namalengkap);

// index of
console.log(datamhs.indexOf("a"));

// substring
console.log(datamhs.substring(2, 6));
console.log(datamhs.substring(6, 2));

// slice
console.log(datamhs.slice(2, 6));
console.log(datamhs.slice(6, 2)); //data kosong

// replace
ubahData = datamhs.replace("Alvinoap", "Alvino");
console.log(ubahData);

// toLowerCase
console.log(datamhs.toLowerCase());

// upperCase
console.log(datamhs.toUpperCase());