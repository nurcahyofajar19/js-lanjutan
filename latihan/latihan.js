// ambil semua elemen vidio
// ubah data-duration dari nodelist   menjadi array dengan array.from
const vidio = Array.from(document.querySelectorAll('[data-duration]'));


// pilih hanya yang javascipt lanjutan
let jsLanjut = vidio.filter(vidios => vidios.textContent.includes ('JAVASCRIPT LANJUTAN'))


// ambil durasi masing masing vidionya
.map (item => item.dataset.duration)



// ubah durasinya menjadi integer ubah menit menjadi float/detik
.map (waktu => {
    // duration 10:30 -> [10,30] split
    const parts = waktu.split(':').map( part => parseFloat(part));
    return (    parts[0] * 60) + parts [1];
})



// jumlahkan semua detiknya
.reduce( (total,detik) => total + detik);


// ubah format dari detik jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;


// simpan di doom 
  const pDurasi = document.querySelector('.total-durasi');
  pDurasi.textContent = `${jam} jam, ${menit} menit,${detik} detik.`;

const jVidio = vidio.filter(vidios => vidios.textContent.includes ('JAVASCRIPT LANJUTAN')).length
const pJVidio = document.querySelector('.jumlah-video');
pJVidio.textContent = `${jVidio} vidio`;



console.log(jsLanjut);
