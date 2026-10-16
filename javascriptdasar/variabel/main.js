//variabel => wadah/tempat menyimpan sebuah data (var, let,const)

//var
//var mhs1 = "Alvinoap";
//mhs1 = "Alvinoap2";
//console.log(mhs1);

//let
//let mhs2 = "adityap";
//mhs2 = "adityap2";
//console.log(mhs2);

//const
//const mhs3 = "putravno";
// mhs3 = "putravno2"; //error karena const tidak bisa diubah
//console.log(mhs3);

//perilaku var
var mhs1 = "putravno";
{
    var mhs1 = "vnoputra"; //var bisa diubah
    console.log(mhs1);
}
console.log(mhs1);

//perilaku let
var mhs2 = "adityap";
{
    let mhs2 = "adityap2"; //let bisa diubah tapi hanya di dalam block
    console.log(mhs2);
}
console.log(mhs2);
