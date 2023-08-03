var form = document.getElementById('form');

form.addEventListener('submit', function(event) {

    event.preventDefault();

    const popup = document.querySelector('.popup');

    popup.style.display = "grid";

    var nama = document.getElementById('nama').value;
    var jenisKelamin = document.getElementById('jenisKelamin').value;

    var result = document.querySelector('.contents');

    var img = document.getElementById('img');
    var h3 = document.getElementById('h3');
    var p1 = document.getElementById('p-1');
    var p2 = document.getElementById('p-2');

    h3.innerHTML = "Hai, " + nama.charAt(0).toUpperCase() + nama.slice(1);
    
    const waktu = new Date();
    var jamTime = waktu.getHours();
    var jam = jamTime.toString();

    switch (jenisKelamin) {
        case 'lakiLaki':
            result.style.background = '#068FFF';
            if  (13 <= jam && jam < 18) {
                img.src = "https://giphy.com/embed/NpATWgCGJVn9K"
                p1.innerHTML = "Tetap semangat walaopun capek :)"
            } else if (18 <= jam && jam < 21) {
                img.src = "https://giphy.com/embed/Is1O1TWV0LEJi";
                p1.innerHTML = "Hari ini menyenangkan bukan??? BUKANNN."
            } else if (21 <= jam && jam < 24) {
                img.src = "https://giphy.com/embed/KD8Ldwzx90X9hi9QHW";
                p1.innerHTML = "Tidur bang!!! Ga usah begadang!!!"
            } else if (0 <= jam && jam < 4) {
                img.src = "https://giphy.com/embed/EZICHGrSD5QEFCxMiC";
                p1.innerHTML = "Ga tidur bang???"
            } else if (4 <= jam && jam < 8) {
                img.src = "https://giphy.com/embed/2IxtjutFAGLfdI1GvK";
                p1.innerHTML = "Selamat pagi, semoga alam memihakmu."
            } else if (8 <= jam && jam < 12) {
                img.src = "https://giphy.com/embed/ThrM4jEi2lBxd7X2yz";
                p1.innerHTML = "Yok bisaa yookk!!!"
            } else {
                img.src = "https://giphy.com/embed/Rol6kVQRMOWVLR3vFG";
                p1.innerHTML = "Rehat sejenak, nyantai duluu gaa sihhh."
            }
            break;
        case 'perempuan':
            result.style.background = '#FF90BB';
            if  (13 <= jam && jam < 18) {
                img.src = "https://giphy.com/embed/9GJccpMzvmItUg61Bs";
                p1.innerHTML = "Tetap semangat walaopun capek :)"
            } else if (18 <= jam && jam < 21) {
                img.src = "https://giphy.com/embed/3tEKpm2JP5Zbn2NuRb";
                p1.innerHTML = "Hari ini menyenangkan bukan??? BUKANNN."
            } else if (21 <= jam && jam < 24) {
                img.src = "https://giphy.com/embed/KztT2c4u8mYYUiMKdJ";
                p1.innerHTML = "Tidur euyy!!! Ga usah begadang!!!"
            } else if (0 <= jam && jam < 4) {
                img.src = "https://giphy.com/embed/Y3wzF9erUbjfvs3QFo";
                p1.innerHTML = "Ga tidur euyy???"
            } else if (4 <= jam && jam < 8) {
                img.src = "https://giphy.com/embed/Sb79pciASiTpvNk3h9";
                p1.innerHTML = "Selamat pagi, semoga alam memihakmu."
            } else if (8 <= jam && jam < 12) {
                img.src = "https://giphy.com/embed/H5Ad3kUEUSiYhbCrNH";
                p1.innerHTML = "Yok bisaa yookk!!!"
            } else {
                img.src = "https://giphy.com/embed/WS059BRQXpO2BeLq5L";
                p1.innerHTML = "Rehat sejenak, nyantai duluu gaa sihhh."
            }
            break
        default:
            result.style.background = '#FFFFFF';
    }

    const p2Arr = [
        "Tentu saja, hidup itu mudah! Cukup bangun pagi, bersantai dengan secangkir kopi, dan impian-impian indah akan terwujud begitu saja.",
        "Tidak perlu berusaha mencapai kesuksesan, cukup santai dan hidup akan memberikan segalanya secara ajaib. Siapa bilang mimpi harus dikejar? Biarkan mereka datang menghampiri Anda tanpa usaha sedikit pun!",
        "Keberhasilan itu hanya soal keberuntungan belaka. Jadi, jangan sia-siakan waktu dan energi Anda untuk belajar dan berlatih. Cukup tunggu hoki datang menghampiri, dan segalanya akan beres dengan sendirinya.",
        "Jangan pernah mencoba untuk belajar atau berkembang. Itu cuma membuang waktu berharga Anda.",
        "Bermain game selama berjam-jam adalah cara terbaik untuk melupakan masalah hidup.",
        "Impianmu adalah mimpi buruk? Tidak masalah, abaikan saja dan tidur terus. Siapa bilang impian harus dikejar? Yang penting, ponsel dan gadgetmu selalu ada di samping tempat tidurmu.",
        "Ketika cinta datang, buang saja logika. Jatuh cinta tanpa pemikiran adalah ide yang paling brilian. Ingatlah, perasaan romantis lebih penting daripada akal sehat!",
        "Ingatlah selalu untuk mengeluh dan meratapi hidup. Hidup itu sulit dan selalu adil, tentu saja kita berhak untuk merasa tertekan.",
        "Jadilah pribadi yang tak kenal lelah untuk berjuang demi masa depan. Meskipun kamu tidak tahu apa yang akan terjadi, paling tidak kamu berjuang dalam kebingungan.",
        "Nikmatilah setiap momen tanpa terlalu memikirkan rencana atau tujuan yang jelas",
    ];

    var random = p2Arr[(Math.random() * p2Arr.length) | 0];

    p2.innerHTML = random;
})


function remove() {
    document.querySelector('.popup').style.display='none';
}
