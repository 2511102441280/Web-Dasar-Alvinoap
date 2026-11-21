let dataMhs = [];

let inputData = document.getElementById("inputData");
let btnTambah = document.getElementById("btnTambah");
let daftar = document.getElementById("daftar");

function tampilkan() {
  daftar.innerHTML = "";

  for (let i = 0; i < dataMhs.length; i++) {
    let li = document.createElement("li");
    li.textContent = dataMhs[i] + " ";

    let btnHapus = document.createElement("button");
    btnHapus.textContent = "Hapus";
    btnHapus.onclick = function () {
      hapus(i);
    };

    li.appendChild(btnHapus);
    daftar.appendChild(li);
  }
}

function tambah() {
  dataMhs.push(inputData.value);
  inputData.value = "";
  tampilkan();
  console.log(dataMhs); 
}

function hapus(index) {
  dataMhs.splice(index, 1);
  tampilkan();
  console.log(dataMhs); 
}

btnTambah.onclick = tambah;