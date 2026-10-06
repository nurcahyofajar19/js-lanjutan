// // function expretion
// const tampilNama = function(nama){
//     return  (`Hallo ${nama}`)
// }
// console.log(tampilNama('fajar'));




// arrow function

// const tampilNama = (nama) => {return (`Hallo ${nama}`);}
// console.log(tampilNama('fjr'));

// // ini dinamakan implisit return 
// // jika parameternya hanya satu bisa lebih ringkas 
// const tampilNama = nama => `Hallo ${nama}`;
// console.log(tampilNama('fjr'));

// // jika menggunakan lebih dari satu parameter maka menggunakan ()
// const tampilNama = (nama,waktu) => `Hallo ${nama},Selamat ${waktu}`;
// console.log(tampilNama('fjr','Malam'));

// const tampilNama = () => `Hello World`
// console.log(tampilNama());


let mahasiswa = ['fajar','nur','cahyo'];

// // menggunakan function biasa
// let jumlahHuruf = mahasiswa.map(function(nama){
//     return nama.length;
// });
// console.log(jumlahHuruf);

// // menggunakan arrow function
// let jumlahuruf = mahasiswa.map ( nama => nama.length)
// console.log(jumlahuruf);

// // jika ingin petakan/map sebagai object
// let jumlahhuruf = mahasiswa.map (nama => ({nama , jmlhhuruf: nama.length}));
// console.table(jumlahhuruf);
