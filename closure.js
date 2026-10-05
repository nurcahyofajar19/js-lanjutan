// // closure
// // Closure adalah fungsi yang tetap dapat mengakses lingkungan leksikal tempat fungsi itu dibuat, termasuk variabel dari fungsi luar, meskipun fungsi luar sudah selesai dijalankan.
// function init (){
//     return function (nama){
//         console.log(nama);
//     }
// }
// let panggilNama = init ();
// panggilNama('jarwo');
// panggilNama('fajar');




// kenapa menggunakan closure


// // untuk membuat function factories

// function ucapkanSalam (waktu){
//     return function (nama){
//         console.log (`Hallo ${nama} ,selamat ${waktu}, Semoga harimu menyenangkan `)
//     }
// }
// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('Fajar');
// selamatSiang('Jarwo');
// console.dir (selamatMalam);



// // untuk membuat privat method

// let counter = 0;
// let add = function(){
//     return ++counter;
// }

// counter = 10;

// console.log (add());
// console.log (add());
// console.log (add());
// // karna hoisting jadi counter terpengeruh 



// let add = function(){
//     let counter = 0;
//     return ++counter;
// }

// counter = 10;

// console.log (add());
// console.log (add());
// console.log (add());
// // sekarang jadi tidak terganggu karna hoisting.hoisting local
// // tapi sekarang setiap di panggil add() akan selalu keriset dari 0



let add = function(){
    let counter = 0;
    return function (){
        return ++counter;

    }
}
// add() untuk menjalani semua variabel add
// a untuk menjalani inner functionnya saja 
let a = add();

// nilainya tetap dipertahankan karna menjadi closure
counter = 10;

console.log (a());
console.log (a());
console.log (a());


// jadi dengan cara ini counternya jadi privet
// dan jika dikasih 'counter = 10;' tidak akan terpengaruh





// let add = (function(){
//     let counter = 0;
//     return function(){
//     return ++counter;
//     }
// })();

// console.log (add());
// console.log (add());
// console.log (add());
// console.log (add());