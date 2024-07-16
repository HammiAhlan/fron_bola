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
      { id: 'jumlah_pemain', path: 'jumlah_pemain' },
      { id: 'logo', path: 'tim.logo' },
    ];
  
    inputMapping.forEach(({ id, path, index, property }) => {
      const inputElement = document.getElementById(id);
      const value = getNestedValue(results, path, index, property);
      inputElement.value = value;
    });
}
  
function getNestedValue(obj, path, index, property) {
    const value = path.split('.').reduce((value, key) => (value && value[key]) ? value[key] : '', obj);
    // console.log(`Value at path ${path}:`, value);
  
    if (Array.isArray(value) && value.length > index && value[index].hasOwnProperty(property)) {
      return value[index][property];
    }
  
    return value;
}   