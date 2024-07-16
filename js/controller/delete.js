function confirmDelete(IDHAPUS) {
    if (confirm("Apakah ingin menghapus data ID " + IDHAPUS + "?")) {
        deleteData(IDHAPUS);
    }
}

function deleteData(IDHAPUS) {
    var pemainId = IDHAPUS;
    var target_url = "https://uas-bola-919c3c7dac41.herokuapp.com/delete/" + pemainId;

    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    fetch(target_url, requestOptions)
        .then(response => response.json())
        .then(result => {
            alert(result.message);
            location.reload();
        })
        .catch(error => console.log('Error:', error));
}