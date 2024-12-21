// No 1. Frequent number
// [1, 1, 2, 2, 2, 3, 3, 3, 3,]
// munculkan dalam bentuk object dengan hasil seperti ini :
// [1:2. 2:3. 3:4] object output

console.log("Soal No. 1");
const angka = [1, 1, 2, 2, 2, 3, 3, 3, 3];

const modusAngka = angka.reduce((frequency, num) => {
    frequency[num] = (frequency[num] || 0) + 1; 
    return frequency; 
}, {});

console.log(modusAngka);


// find the unique element
// [1, 2, 2, 3, 3, 4, 5, 5]
// dengan hasil : ada = [1, 4] & gak ada = []

console.log("");
console.log("Soal No. 2");
const nilai = [1, 2, 2, 3, 3, 4, 5, 5];

// Hitung frekuensi setiap elemen
const unique = nilai.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
}, {});

// Temukan elemen yang unik
const ada = Object.keys(unique).filter(num => unique[num] === 1).map(Number);

// Menentukan rentang elemen untuk dicari
const range = [...Array(6).keys()].slice(1); // [1, 2, 3, 4, 5]

// Temukan elemen yang tidak ada
const gakAda = range.filter(num => !unique[num]);

console.log('ada =', ada); // Output: ada = [1, 4]
console.log('gak ada =', gakAda); // Output: gak ada = []


// check the similarity
// - [7, 8, 9]
// - [7, 9, 10, 11]
// dengan hasil output [7, 9]

console.log("");
console.log("Soal No. 3");

const angka1 = [7, 8, 9];
const angka2 = [7, 9, 10, 11];

// Mencari elemen yang ada di kedua array
const similarity = angka1.filter(num => angka2.filter(val => val === num).length > 0);
console.log(similarity);