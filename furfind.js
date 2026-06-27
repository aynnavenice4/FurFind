document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".pet-card");
    const featureCards = document.querySelectorAll(".feature-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.3
    });

    cards.forEach(card => {
        observer.observe(card);
    });

    featureCards.forEach(card => {
        observer.observe(card);
    });
    
});