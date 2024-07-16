//Mendapatkan parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const pemainId = urlParams.get("pemainId");

export let urlFetch = " https://uas-bola-919c3c7dac41.herokuapp.com/pemain/" + pemainId;