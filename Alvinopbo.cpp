#include <iostream>
#include <string>
using namespace std;

// === LANGKAH 1: BUAT KELAS ===
class Mahasiswa {
public:
    string nama;
    string nim;

    void perkenalan() {
        cout << "Halo, saya " << nama
             << " dengan NIM " << nim << endl;
    }
};

// === LANGKAH 2: BUAT OBJEK DI MAIN ===
int main() {
    // Membuat objek
    Mahasiswa mhs1;

    // Mengisi atribut
    mhs1.nama = "Alvino Aditya Putra";
    mhs1.nim = "2511102441280";

    // Memanggil method
    mhs1.perkenalan();

    return 0;
}