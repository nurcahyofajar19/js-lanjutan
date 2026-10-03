// // cara membuat object di javascript
// // 1.object literal
// // problem : tidak efektif untuk object yang banyak
// let mahasiswa1 = {
//     nama: 'jarwo',
//     energi: 10,
//     makan: function(porsi){
//         this.energi += porsi;
//         console.log(`selamat makan ${this.nama},selamat makan`);
//     }
// }
// let mahasiswa2 = {
//     nama: 'fajar',
//     energi: 10,
//     makan: function(porsi){
//         this.energi += porsi;
//         console.log(`selamat makan ${this.nama},selamat makan`);
//     }
// }






// // //2.function declaration
// //     const methodMahasiswa = {
// //     makan: function(porsi){
// //         this.energi += porsi;
// //         console.log(`selamat makan ${this.nama},selamat makan`);
// //     },

// //     main: function(jam){
// //         this.energi -= jam;
// //         console.log(`selamat bermain ${this.nama},selamat bermain`);
// //     }
// //     };

// //         // mahasiswa.makan = function(porsi){
// //     //     this.energi += porsi;
// //     //     console.log(`selamat makan ${this.nama},selamat makan`);
// //     // }

// //     // mahasiswa.main = function(jam){
// //     //     this.energi -= jam;
// //     //     console.log(`selamat bermain ${this.nama},selamat bermain`);
// //     // }

// //     function Mahasiswa(nama,energi){
// //     let mahasiswa = {};
// //     mahasiswa.nama = nama;
// //     mahasiswa.energi = energi;
// //     mahasiswa.makan = methodMahasiswa.makan;
// //     mahasiswa.main = methodMahasiswa.main;
// //     return mahasiswa;
// //     }
// // let jarwo = Mahasiswa('jarwo',50);
// // let fajar = Mahasiswa('fajar',40);

// //4. obejct.create()
//     const methodMahasiswa = {
//     makan: function(porsi){
//         this.energi += porsi;
//         console.log(`selamat makan ${this.nama},selamat makan`);
//     },

//     main: function(jam){
//         this.energi -= jam;
//         console.log(`selamat bermain ${this.nama},selamat bermain`);
//     }
//     };

//     function Mahasiswa(nama,energi){
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     return mahasiswa;
//     }
// let jarwo = Mahasiswa('jarwo',50);
// let fajar = Mahasiswa('fajar',40);






// //3.constructor function
// // keyword new (paling sering/banyak digunakan)
// function Mahasiswa (nama,energi){
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`selamat makan ${this.nama},selamat makan`);
//     }

//     this.main = function (jam){
//         this.energi -= jam;
//         console.log(`selamat bermain ${this.nama},selamat bermain`);
//     }

// }
// let jarwo = new Mahasiswa('jarwo',50);
// let fajar = new Mahasiswa('fajar',40);


// // Prototype

// function Mahasiswa (nama,energi){
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function(porsi){
//     this.energi += porsi;
//     return `Hallo ${this.nama},selamat makan`;
// }
// Mahasiswa.prototype.main = function(jam){
//     this.energi -= jam;
//     return `Hallo ${this.nama},Selamat bermain`;
// }

// let jarwo = new Mahasiswa ('jarwo',10);
// let fajar = new Mahasiswa ('fajar',15);



// prototype versi class
class Mahasiswa{
    constructor(nama,energi){
        this.nama = nama;
        this.energi = energi;
}
    makan(porsi){
        this. energi += porsi;
        return `Hallo ${this.nama},selamat makan`;
    }
    main(jam){
        this.energi -= jam;
        return `Hallo ${this.nama},selamat bermain`;
    }
    tidur(jam){
        this.energi += jam * 2;
        return `Hallo ${this.nama},selamat tidur`;
    }
}
let jarwo = new Mahasiswa ('jarwo',10);
let fajar = new Mahasiswa ('fajar',10);