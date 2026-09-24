def insertion_sort(data):
    n = len(data)
    komparasi = 0
    pergeseran = 0
 
    for i in range(1, n):
        key = data[i]
        j = i - 1
 
        while j >= 0 and data[j] > key:
            komparasi += 1
            data[j + 1] = data[j]
            pergeseran += 1
            j -= 1
 
        if j >= 0:
            komparasi += 1
 
        data[j + 1] = key
 
    return data, komparasi, pergeseran
 
 
if __name__ == '__main__':
    penjualan = [23, 12, 45, 9, 31, 18, 7, 27]
    print('Data awal :', penjualan)
    hasil, k, p = insertion_sort(penjualan)
    print('Hasil urut:', hasil)
    print('Komparasi :', k)
    print('Pergeseran:', p)
