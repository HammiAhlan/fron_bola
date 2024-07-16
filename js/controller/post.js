import { urlPOST, AmbilResponse } from '../config/url_post.js';

export function insertData() {
    const data = {
        Nama_Pemain: document.getElementById('name').value,
        Tim: {
            Nama_Club: document.getElementById('club').value,
            Liga: document.getElementById('liga').value,
            Tahun_Berdiri: parseInt(document.getElementById('tahun').value),
            Stadion: document.getElementById('stadion').value,
            Manajer: document.getElementById('manajer').value,
            Logo: document.getElementById('logo').value,
            Jumlah_Pemain: 0 // Sesuaikan dengan input yang sesuai jika ada
        },
        Posisi: document.getElementById('posisi').value,
        Tinggi: parseInt(document.getElementById('tinggi').value),
        Berat: parseInt(document.getElementById('berat').value),
        Tanggal_Lahir: document.getElementById('tanggal_lahir').value,
        Negara: document.getElementById('negara').value,
        No_Punggung: parseInt(document.getElementById('no_punggung').value)
    };

    fetch(urlPOST, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => AmbilResponse(result))
    .catch(error => console.error('Error:', error));
}