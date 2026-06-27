const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName-Adoption").value.trim();
    const lastName  = document.getElementById("lastName-Adoption").value.trim();
    const address   = document.getElementById("address-Adoption").value.trim();
    const phone     = document.getElementById("phone-Adoption").value.trim();
    const email     = document.getElementById("email-Adoption").value.trim();
    const reason    = document.getElementById("reason-Adoption").value.trim();

    const warning = document.getElementById("warningMessage-Adoption");

    if (!firstName || !lastName || !address || !phone || !email || !reason) {
        warning.style.display = "block";
        return;
    }

    warning.style.display = "none";

    window.location.href = "process.html";
});