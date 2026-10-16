// // template string / template literal
// const nama = 'Fajar';
// const umur = '19';
// console.log(`Hallo, perkenalkan saya ${nama},umur saya ${umur}`);

// // // embeded expressions
// // console.log(`${1+1}`);
// // console.log(`${alert('Woi')}`);
// const x = 20;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

// // HTML fragment
// const mhs = {
//     nama : 'Fajar',
//     umur : 19,
//     nrp : '9859398',
//     email : 'jarwo@gmail.com'
// };
// const el = `<div clss="mhs"> 
//     <h2>${mhs.nama}</h2>
//     <span class = "nrp">${mhs.nrp}</span>
// </div>`
// console.log(el);
// document.body.innerHtml = el;








// // 1. HTML fragment
// const mhs = {
//     nama : 'Fajar',
//     umur : 19,
//     nrp : '9859398',
//     email : 'jarwo@gmail.com'
// };
// const el = `<div clss="mhs"> 
//     <h2>${mhs.nama}</h2>
//     <span class = "nrp">${mhs.nrp}</span>
// </div>`;


// //2. Looping
// const mhs = [
//     {
//         nama: 'fajar',
//         email: 'fajar@gmail.com'
//     },
//     {
//         nama: 'nur',
//         email: 'nur@gmail.com'
//     },
//     {
//         nama: 'cahyo',
//         email: 'cahyo@gmail.com'
//     }, 
// ];
// const el = `<div class= "mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//         </ul>`).join('')}
// </div>`;


// // 3.conditionals
// // ternary
// const lagu = {
//     judul : 'teh hijau',
//     penyanyi : 'tulus',
//     feat : 'wowo'
// }

// const el = `<div class= "lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : '' } </li>
//     </ul>`


// 4.nested
// HTML fragment bersarang
const mhs = {
    nama : 'jarwo',
    kelas : 12,
    pelajaran : [
        'mtk','b.ing','b.indo','pjok'
    ]
}

function cetakPelajaran (pelajaran){
    return `
    <ol>
        ${pelajaran.map(mp => `<li> ${mp}</li>`).join ('')}
    </ol>`;
}

const el = `<div>
    <h2>${mhs.nama}</h2>
    <span>kelas : ${mhs.kelas}</span>
    <h4>pelajaran : </h4>
    ${cetakPelajaran(mhs.pelajaran)}
</div>`






document.body.innerHTML = el;