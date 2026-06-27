document.addEventListener("DOMContentLoaded", () => {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });
    }, {
        threshold: 0.2
    });

    const elements = document.querySelectorAll(
        ".mission-title, .mission-card, .vision-title, .vision-card"
    );

    elements.forEach(element => {
        observer.observe(element);
    });

});

const cards = document.querySelectorAll('.member-card');

cards.forEach(card => {

    card.addEventListener('mousemove', (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 4;
        const centerY = rect.height / 4;

        const rotateY = ((x - centerX) / centerX) * 6;
        const rotateX = ((centerY - y) / centerY) * 6;

        card.style.transform =
            `perspective(1200px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {

        card.style.transition = "transform 0.5s ease";

        card.style.transform =
            `perspective(1200px)
             rotateX(0deg)
             rotateY(0deg)`;
    });

    card.addEventListener('mouseenter', () => {
        card.style.transition = "transform 0.15s ease-out";
    });

});