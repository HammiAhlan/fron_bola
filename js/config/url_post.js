export let urlPOST = "https://uas-bola-919c3c7dac41.herokuapp.com/insert";

// Function to handle API response
export function AmbilResponse(result) {
    console.log(result); // Display API response in console
    alert(result.message); // Display API response in an alert
    window.location.reload(); // Reload page after clicking OK on the alert
}