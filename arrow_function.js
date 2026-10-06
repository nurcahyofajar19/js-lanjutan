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


// let mahasiswa = ['fajar','nur','cahyo'];

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


// konsep this pada arrow function

// // constructur function
// const Mahasiswa = function(){
//     this.nama = 'fajar';
//     this.umur = '19';
//     this.sayHello = function(){
//         console.log(`Hallo nama saya adalah ${this.nama}, umur saya ${this.umur}`);
//     }
// }
// const fjr = new Mahasiswa();


// // arrow function dengan constructor function
// // arrow function tidak bisa digunakan dengan constructor function
// const Mahasiswa = function(){
//     this.nama = 'fajar';
//     this.umur = '19';
//     // arrow  function bisanya digunakan di methodnnya 
//     this.sayHello =()=> {
//         // tetapi arrow function tidak menyimpan this
//         console.log(`Hallo nama saya adalah ${this.nama}, umur saya ${this.umur}`);
//     }
// }
// const fjr = new Mahasiswa();



// //object literal 
// const mhs1 = {
//     nama:'fjr',
//     umur: 19, 
//     sayHello:() =>{
//         // arrow function tidak menyimpan/menangkap this,yang keluar akan undefined
//         console.log(`Hallo nama saya ${this.nama}, umur saya ${this.umur} tahun`);
//     } 
// }




// // function expretion tidak akan terhoisting
// const Mahasiswa = function(){
//     this.nama = 'fajar';
//     this.umur = '19';
//     this.sayHello = function(){
//         console.log(`Hallo nama saya adalah ${this.nama}, umur saya ${this.umur}`);
//     }
// // //jika menggunakan function declaration akan terkena hoisting
// //     setInterval(function(){
// //         // sehingga pada saat thisnya dipanggil this.nama pada Mahasiswa tidak terbaca
// //         // yang terbaca di globalnya,yang terjadi adalah this=window,yang ++ window itu/globalnya
// //         console.log(this.umur++)
// //     },500);
//      setInterval(() => {
//         // maka dengan menggunakan arrow function thisnya tidak tersimpan/terbaca
//         console.log(this.umur++)
//     },500);

// }
// const fjr = new Mahasiswa();









const box = document.querySelector('.box');
box.addEventListener('click',function(){
    let satu = 'size';
    let dua = 'caption';

    if(this.classList.contains(satu)){
        [satu, dua] = [dua, satu];
    }
         

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    },600);

});