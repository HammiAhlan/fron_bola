const urlParams = new URLSearchParams(window.location.search);
const pemainId = urlParams.get('pemainId');

export let urlPUT = "https://uas-bola-919c3c7dac41.herokuapp.com/update/" + pemainId;

export function AmbilResponse(result) {
    console.log(result);  
    window.location.href = "dashboard.html";
}