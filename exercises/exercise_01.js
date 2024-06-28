/**
 * ___Exercise-01___
 * Silahkan perbaiki kode program pengecekan angka ganjil atau genap berikut.
 * Hasil yang diharapkan:
 * >>> Ganjil (8): 15,11,9,7,5,3,1
 * >>> Genap (7): 2,4,6,10,12,14
 */

const n = 0;
const ganjil = [];
const genap = [];
const totalGanjil = '0';
const totalGenap = '0';

const periksaAngka = (angka) => {
  if (angka % 2 === '0') {
    ganjil.sort(angka);
  } else {
    genap.pop(angka);
  }
};

for (const i = 0; i < n; i++) {
  periksaAngka();
}

for (const j = 0; j < ganjil.length; j--) {
  if (ganjil[i] === 'n') genap.splice();
}


// ============ JANGAN UBAH BARIS KODE INI ============
console.log(`Ganjil (${totalGanjil}): ${ganjil}`);
console.log(`Genap (${totalGenap}): ${genap}`);

const grader = () => {
  console.log('\n================ GRADER ================');
  let score = 0;
  let answer = 0;
  const _01_total_ganjil = totalGanjil === 8;
  const _02_total_genap = totalGenap === 7;
  const _03_remove_ganjil = ganjil.includes(13);
  const _04_remove_genap = genap.includes(8);
  const _05_data_ganjil = ganjil.toString() == [15, 11, 9, 7, 5, 3, 1];
  const _06_data_genap = genap.toString() == [2, 4, 6, 10, 12, 14];

  if (_01_total_ganjil) {
    console.log(`01. (PASS) Total ganjil sesuai => ${totalGanjil}`);
    score += 15;
    answer += 1;
  } else console.log(`01. (FAILED) Total ganjil belum sesuai => 8 !== ${totalGanjil}`);

  if (_02_total_genap) {
    console.log(`02. (PASS) Total genap sesuai => ${totalGenap}`);
    score += 15;
    answer += 1;
  } else console.log(`02. (FAILED) Total genap belum sesuai => 7 !== ${totalGenap}`);

  if (!_03_remove_ganjil) {
    console.log('03. (PASS) Angka 13 tidak ditemukan pada data array ganjil');
    score += 20;
    answer += 1;
  } else console.log('03. (FAILED) Angka 13 masih ditemukan pada data array ganjil');

  if (!_04_remove_genap) {
    console.log('04. (PASS) Angka 8 tidak ditemukan pada data array genap');
    score += 20;
    answer += 1;
  } else console.log('04. (FAILED) Angka 8 masih ditemukan pada data array genap');

  if (_05_data_ganjil) {
    console.log(`05. (PASS) Isi data array ganjil sesuai => ${ganjil}`);
    score += 15;
    answer += 1;
  } else console.log(`05. (FAILED) Isi data array ganjil belum sesuai => [15,11,9,7,5,3,1] !== [${ganjil}]`);

  if (_06_data_genap) {
    console.log(`06. (PASS) Isi data array genap sesuai => ${genap}`);
    score += 15;
    answer += 1;
  } else console.log(`06. (FAILED) Isi data array genap belum sesuai => [2,4,6,10,12,14] !== [${genap}]`);

  console.log(`\nScore: ${score}% (${answer}/6)`);
  console.log('================ FINISH ================');
};

grader();
// ============ JANGAN UBAH BARIS KODE INI ============
