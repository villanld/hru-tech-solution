
function welcomeMessage() {
    alert("Welcome to HRU Tech Solutions!");
}

function toggleServices() {
    let services = document.getElementById("serviceList");

    if (services.style.display === "none") {
        services.style.display = "flex";
    } else {
        services.style.display = "none";
    }
}
