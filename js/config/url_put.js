const urlParams = new URLSearchParams(window.location.search);
const pemainId = urlParams.get('pemainId');

export let urlPUT = "https://uas-bola-919c3c7dac41.herokuapp.com/update/" + pemainId;

export function AmbilResponse(result) {
    console.log(result); //menampilkan response API pada console
    alert(result.message); //menampilkan response API pada alert
    window.location.href = "index.html"; //reload halaman setelah klik ok pada alert
}