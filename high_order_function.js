// // function kerjakanTugas ini yang dinamakan high order function,jika ada callback di argumentnnya
// // jika ada function pada argument,argument selesai disebut callback

// function kerjakanTugas(mataKuliah,selesai){
//     console.log(`mulai mengerjakan tugas ${mataKuliah}.....`);
//     selesai();
// }
// function selesai (){
//     alert('selesai mengerjakan tugas!');
// }

// kerjakanTugas('MTK',selesai);


// // contoh abstraksi code lebih sederhana
// for(let i = 0; i < 10; i++){
//     console(i);
// }

// function reperatLog(n){
// for (let i = 0; i < n ; i ++ ){
//     console.log(i);
//     }
// }
// reperatLog(10);

// function repeat(n,action){
//     for (let i = 0; i <= n;i++){
//         action(i);
//     }
// }
// repeat (10,console.log);
// repeat (12,alert );





















// jika menggunakan for function biasa ini tidak mengembalikan array baru
// jika menggunakan filer,map,reduce akan mengambalikan array baru

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];


// // for
// // mencari angka >= 3 
// const newAngka = [];
// for (let i = 0 ; i < angka.length ; i ++){
//     if (i >= 3){
//         newAngka.push(angka[i]);
//     }
// }

// // array.prototype.filter()
// // filter
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);  

// // array.prototype.map()
// // map 
// // kalikan semua dengan  dua
// const newAngka = angka.map(a => a*2);
// console.log(newAngka);


// // array.prototype.reduce()
// // reduce
// // accumulator adalah nilai sementara yang menyimpan hasil penjumlahan
// // currentValue adalah nilai elemen array yang sedang diproses
// const newAngka = angka.reduce((accumulator,currentValue) => accumulator + currentValue,0);
// // 0 itu nilai awal yang dijumlah bisa dignti
// console.log(newAngka);



// method chaining
// untuk menggabungkan funsi fungsi pada high order function dalam satu kali eksekusi
// cari angka > 5 ,lalu kalikan 3,lalu jumlahkan
const hasil = angka.filter(a => a > 5).map(a => a * 3 ).reduce(( acc ,curr ) => acc + curr );
console.log(hasil);