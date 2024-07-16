// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});

document.getElementById('subbola').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const namapemain = document.getElementById('name').value;
    const club = document.getElementById('club').value;
    const liga = document.getElementById('liga').value;
    const tahun = document.getElementById('tahun').value;
    const stadion = document.getElementById('stadion').value;
    const manajer = document.getElementById('manajer').value;
    const logo = document.getElementById('logo').value;

    if (namapemain && club && liga && tahun && stadion && manajer && logo) {
        // Ganti alert ini dengan logika untuk mengirim data ke server atau melakukan operasi insert lainnya
        alert('Data akan diinsert:\nNama Pemain: ' + namapemain + '\nClub: ' + club + '\nLiga: ' + liga + '\nTahun Berdiri: ' + tahun + '\nStadion: ' + stadion + '\nManajer: ' + manajer + '\nLogo: ' + logo);
    } else {
        alert('Harap isi semua field!');
    }
})
