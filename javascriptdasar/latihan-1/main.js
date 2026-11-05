//let nama ,nim, submit, dataMhs;

//document.getElementById("submit").onclick = function() {
//    nama = document.getElementById("nama").value;
//    nim = document.getElementById("nim").value;

//    dataMhs = nama +  " " + nim;
//    console.log(dataMhs);
//    document.getElementById("dataMhs").textContent = dataMhs;
//}

let nama, nim, nilai1, nilai2, nilai3, rataRata, grade, dataMhs;

document.getElementById("submit").onclick = function () {
    nama = document.getElementById("nama").value;
    nim = document.getElementById("nim").value;
    nilai1 = Number(document.getElementById("nilai1").value);
    nilai2 = Number(document.getElementById("nilai2").value);
    nilai3 = Number(document.getElementById("nilai3").value);

    if (
        document.getElementById("nilai1").value === "" ||
        document.getElementById("nilai2").value === "" ||
        document.getElementById("nilai3").value === "" ||
        nilai1 < 0 || nilai1 > 100 ||
        nilai2 < 0 || nilai2 > 100 ||
        nilai3 < 0 || nilai3 > 100
    ) {
        alert("Nilai harus diisi dan berada di antara 0 - 100!");
        return;
    }

    rataRata = (nilai1 + nilai2 + nilai3) / 3;

    if (rataRata >= 85) {
        grade = "A";
    } else if (rataRata >= 70) {
        grade = "B";
    } else if (rataRata >= 55) {
        grade = "C";
    } else if (rataRata >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }

    dataMhs = nama + " " + nim;
    console.log(dataMhs, rataRata, grade);

    document.getElementById("dataMhs").textContent = dataMhs;
    document.getElementById("rataRata").textContent = rataRata.toFixed(2);
    document.getElementById("grade").textContent = grade;
}