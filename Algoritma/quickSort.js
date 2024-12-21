// Implementasi fungsi utama algoritma QuickSort dalam JavaScript
function quickSort(arr) {
    /**
     * Fungsi untuk mengimplementasikan algoritma QuickSort.
     *
     * @param {Array} arr - Array angka yang akan diurutkan.
     * @returns {Array} - Array yang sudah diurutkan.
     */

    // Base case: Jika array memiliki 0 atau 1 elemen, itu sudah terurut
    if (arr.length <= 1) {
        return arr;
    }

    // Pilih pivot (elemen terakhir dari array digunakan sebagai pivot)
    const pivot = arr[arr.length - 1];

    // Partisi elemen array ke dalam dua bagian:
    // - Elemen yang lebih kecil atau sama dengan pivot
    // - Elemen yang lebih besar dari pivot
    const left = arr.slice(0, -1).filter(x => x <= pivot); // Semua elemen \u2264 pivot
    const right = arr.slice(0, -1).filter(x => x > pivot);  // Semua elemen > pivot

    // Lakukan rekursi untuk mengurutkan elemen di kiri dan kanan,
    // lalu gabungkan hasilnya dengan pivot di tengah
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Contoh penggunaan
const numbers = [15, 3, 2, 6, 9, 8, 19];

// Cetak array sebelum diurutkan
console.log("Data sebelum diurutkan:", numbers);

// Panggil fungsi quickSort dan cetak hasilnya
const sortedNumbers = quickSort(numbers);
console.log("Data setelah diurutkan:", sortedNumbers);
