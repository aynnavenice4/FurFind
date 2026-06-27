const searchInput = document.getElementById("searchInput");

const allBtn = document.getElementById("allBtn");
const catsBtn = document.getElementById("catsBtn");
const dogsBtn = document.getElementById("dogsBtn");

const buttons = document.querySelectorAll(".control-btn button");
const cards = document.querySelectorAll(".animal-card");

let currentFilter = "all";

function filterPets() {

    const searchText = searchInput.value.toLowerCase().trim();

    let visibleCount = 0;

    cards.forEach(card => {

        const nameElement = card.querySelector("h3");

        const originalName = nameElement.textContent;

        const petName = originalName.toLowerCase();

        const petType = card.dataset.type.toLowerCase();

        const matchesSearch =
            petName.includes(searchText) ||
            petType.includes(searchText);

        const matchesCategory =
            currentFilter === "all" ||
            petType === currentFilter;

        if (matchesSearch && matchesCategory) {

            card.style.display = "block";
            visibleCount++;

            if (searchText !== "" &&
                petName.includes(searchText)) {

                const regex = new RegExp(
                    `(${searchText})`,
                    "gi"
                );

                nameElement.innerHTML =
                    originalName.replace(
                        regex,
                        '<span class="highlight">$1</span>'
                    );

            } else {
                nameElement.textContent = originalName;
            }

        } else {

            card.style.display = "none";
            nameElement.textContent = originalName;
        }
    });

    const noResults =
        document.getElementById("noResults");

    noResults.style.display =
        visibleCount === 0 ? "block" : "none";
}

function setActiveButton(button) {

    buttons.forEach(btn =>
        btn.classList.remove("active")
    );

    button.classList.add("active");
}

allBtn.addEventListener("click", () => {
    currentFilter = "all";
    setActiveButton(allBtn);
    filterPets();
});

catsBtn.addEventListener("click", () => {
    currentFilter = "cat";
    setActiveButton(catsBtn);
    filterPets();
});

dogsBtn.addEventListener("click", () => {
    currentFilter = "dog";
    setActiveButton(dogsBtn);
    filterPets();
});

searchInput.addEventListener("input", filterPets);


filterPets();
