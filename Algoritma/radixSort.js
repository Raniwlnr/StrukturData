// Implementasi algoritma Radix Sort dalam JavaScript
function getMax(arr) {
    /**
     * Mendapatkan nilai maksimum dalam array
     * @param {Array} arr - Array angka
     * @returns {number} - Nilai maksimum
     */
    return Math.max(...arr);
}

function countingSort(arr, place) {
    /**
     * Mengimplementasikan Counting Sort sebagai bagian dari Radix Sort
     * @param {Array} arr - Array angka
     * @param {number} place - Posisi digit yang sedang diproses (1, 10, 100, ...)
     * @returns {Array} - Array yang diurutkan berdasarkan digit pada posisi tertentu
     */
    const n = arr.length;
    const output = new Array(n).fill(0);
    const count = new Array(10).fill(0);

    // Hitung frekuensi digit pada posisi 'place'
    for (let i = 0; i < n; i++) {
        const digit = Math.floor(arr[i] / place) % 10;
        count[digit]++;
    }

    // Ubah count[i] sehingga berisi posisi akhir elemen dalam array output
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Bangun array output dengan mengurutkan elemen berdasarkan digit
    for (let i = n - 1; i >= 0; i--) {
        const digit = Math.floor(arr[i] / place) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    // Salin elemen yang diurutkan ke array asli
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

function radixSort(arr) {
    /**
     * Mengimplementasikan algoritma Radix Sort
     * @param {Array} arr - Array angka yang akan diurutkan
     * @returns {Array} - Array yang sudah diurutkan
     */
    const max = getMax(arr); // Dapatkan nilai maksimum dalam array

    // Lakukan Counting Sort untuk setiap digit (1, 10, 100, ...)
    for (let place = 1; Math.floor(max / place) > 0; place *= 10) {
        countingSort(arr, place);
    }

    return arr;
}

// Contoh penggunaan
const numbers = [100, 40, 75, 54, 1000, 12, 2, 90];

// Cetak array sebelum diurutkan
console.log("Data sebelum diurutkan:", numbers);

// Panggil fungsi radixSort dan cetak hasilnya
const sortedNumbers = radixSort(numbers);
console.log("Data setelah diurutkan:", sortedNumbers);
