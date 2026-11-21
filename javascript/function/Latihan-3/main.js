let dataMhs = [];

let inputData = document.getElementById("inputData");
let btnTambah = document.getElementById("btnTambah");
let daftar = document.getElementById("daftar");

// function dengan return value
function validasi(teks) {
  return teks.trim() !== "";
}

// function dengan parameter
function buatTombolHapus(index) {
  let btnHapus = document.createElement("button");
  btnHapus.textContent = "Hapus";
  btnHapus.onclick = function () {
    hapus(index);
  };
  return btnHapus;
}

function tampilkan() {
  daftar.innerHTML = "";

  for (let i = 0; i < dataMhs.length; i++) {
    let li = document.createElement("li");
    li.textContent = dataMhs[i] + " ";
    li.appendChild(buatTombolHapus(i));
    daftar.appendChild(li);
  }
}

function tambah() {
  if (!validasi(inputData.value)) {
    alert("Nama tidak boleh kosong!");
    return;
  }
  dataMhs.push(inputData.value);
  inputData.value = "";
  tampilkan();
}

function hapus(index) {
  dataMhs.splice(index, 1);
  tampilkan();
}

// arrow function
const hapusSemua = () => {
  dataMhs = [];
  tampilkan();
};

btnTambah.onclick = tambah;
document.getElementById("btnHapusSemua").onclick = hapusSemua;