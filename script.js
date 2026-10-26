
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


const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    document.getElementById("formStatus").textContent =
        "Thank you, " + name + "! This is a demo form.";

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    contactForm.reset();
});
