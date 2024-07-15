export function isiData(results) {  
    const inputMapping = [
      { id: 'nama', path: 'nama_pemain' },
      { id: 'club', path: 'tim.nama_club' },
      { id: 'liga', path: 'tim.liga' },
      { id: 'tahunberdiri', path: 'tim.tahun_berdiri' },
      { id: 'stadion', path: 'tim.stadion' },
      { id: 'manajer', path: 'tim.manajer' },
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