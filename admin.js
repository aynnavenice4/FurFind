const petTable = document.getElementById("petTable");

loadPets();

function loadPets() {
    fetch("http://localhost:8085/pets")
        .then(res => {
            console.log("STATUS:", res.status);
            return res.json();
        })
        .then(data => {
            console.log("DATA:", data);

            if (!Array.isArray(data) || data.length === 0) {
                petTable.innerHTML = "<tr><td colspan='6'>No pets found in backend</td></tr>";
                return;
            }

            renderTable(data);
        })
        .catch(err => {
            console.error("FETCH ERROR:", err);
            petTable.innerHTML = "<tr><td colspan='6'>Backend not running or API error</td></tr>";
        });
}

function renderTable(data) {
    petTable.innerHTML = "";

    data.forEach(pet => {
        petTable.innerHTML += `
            <tr>
                <td>${pet.name ?? ""}</td>
                <td>${pet.age ?? ""}</td>

                <td>
                    <select id="health-${pet.id}">
                        <option ${pet.healthCondition === "Recovering" ? "selected" : ""}>Recovering</option>
                        <option ${pet.healthCondition === "Healthy" ? "selected" : ""}>Healthy</option>
                        <option ${pet.healthCondition === "Injured" ? "selected" : ""}>Injured</option>
                    </select>
                </td>

                <td>
                    <select id="vac-${pet.id}">
                        <option ${pet.vaccinationStatus === "Vaccinated" ? "selected" : ""}>Vaccinated</option>
                        <option ${pet.vaccinationStatus === "Not Vaccinated" ? "selected" : ""}>Not Vaccinated</option>
                    </select>
                </td>

                <td>
                    <select id="adopt-${pet.id}">
                        <option ${pet.adoptionStatus === "Available" ? "selected" : ""}>Available</option>
                        <option ${pet.adoptionStatus === "Pending" ? "selected" : ""}>Pending</option>
                        <option ${pet.adoptionStatus === "Adopted" ? "selected" : ""}>Adopted</option>
                    </select>
                </td>

                <td>
                    <button onclick="savePet(${pet.id})">Save</button>
                </td>
            </tr>
        `;
    });
}

function savePet(id) {

    const updatedPet = {
        id: id,
        healthCondition: document.getElementById(`health-${id}`).value,
        vaccinationStatus: document.getElementById(`vac-${id}`).value,
        adoptionStatus: document.getElementById(`adopt-${id}`).value
    };

    fetch(`http://localhost:8085/pets/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedPet)
    })
    .then(res => {
        if (!res.ok) {
            throw new Error("Failed to update pet");
        }
        return res.json();
    })
    .then(() => {
        alert("Pet updated successfully!");
        loadPets();
    })
    .catch(err => console.error("Update error:", err));
}