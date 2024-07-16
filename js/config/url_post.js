export let urlPOST = "https://uas-bola-919c3c7dac41.herokuapp.com/insert"

//test

export function AmbilResponse(result) {
    console.log(result); //menampilkan response API pada console
    alert(result.message); //menampilkan response API pada alert
    window.location.reload(); //reload halaman setelah klik ok pada alert
}