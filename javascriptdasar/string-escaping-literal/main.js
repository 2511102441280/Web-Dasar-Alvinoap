let datamhs = "Alvinoap";
console.log(datamhs);

// escaping (\, \n, \t, " '' ") //
let datamhs2 = "nama mahasiswa adalah \talvino";
console.log(datamhs2);

// string literal 
let nama = "Alvinoap";
let nim = "2511102441280";
let prodi = "Teknik Informatika";

let biodata = nama + " " + nim + " " + prodi;
console.log(biodata);
console.log(typeof biodata);

// template string literal 
let biodatalengkap = `mahasiswa dengan ${nama} dan ${nim} dan ${prodi}`;
console.log(biodatalengkap);