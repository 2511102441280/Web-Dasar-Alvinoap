def hitung_rata_rata(data):
    
    n = len(data)
    
    if n == 0:
        raise ValueError("Data tidak boleh kosong!")
    
    total = 0  
    
    for i in range(n):
        total += data[i]
    
    rata_rata = total / n  
    
    return rata_rata


if __name__ == "__main__":
    n = int(input("Masukkan jumlah data: "))
    data = []
    
    for i in range(n):
        nilai = float(input(f"Masukkan data ke-{i+1}: "))
        data.append(nilai)
    
    hasil = hitung_rata_rata(data)
    print(f"Rata-rata dari data tersebut adalah: {hasil}")
    