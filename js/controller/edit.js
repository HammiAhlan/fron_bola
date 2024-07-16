// fetch_edit.js
export function isiData(results) {
    const inputMapping = [
        { id: 'nama_pemain', path: 'nama_pemain' },
        { id: 'posisi', path: 'posisi' },
        { id: 'tinggi', path: 'tinggi' },
        { id: 'berat', path: 'berat' },
        { id: 'tanggal_lahir', path: 'tanggal_lahir' },
        { id: 'negara', path: 'negara' },
        { id: 'no_punggung', path: 'no_punggung' },
        { id: 'nama_club', path: 'tim.nama_club' },
        { id: 'liga', path: 'tim.liga' },
        { id: 'tahun_berdiri', path: 'tim.tahun_berdiri' },
        { id: 'stadion', path: 'tim.stadion' },
        { id: 'manajer', path: 'tim.manajer' },
        { id: 'jumlah_pemain', path: 'tim.jumlah_pemain' },
        { id: 'logo', path: 'tim.logo' },
    ];

    inputMapping.forEach(({ id, path }) => {
        const inputElement = document.getElementById(id);
        const value = getNestedValue(results, path);
        inputElement.value = value;
    });
}

function getNestedValue(obj, path) {
    const value = path.split('.').reduce((value, key) => (value && value[key] !== undefined) ? value[key] : '', obj);
    return value !== undefined ? value : '';
}
