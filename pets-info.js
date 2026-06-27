function loadPet(){

    const params =
    new URLSearchParams(window.location.search);


    const id =params.get("id");


    console.log("ID:", id);


    if(!id){
        console.log("Missing ID");
        return;
    }


    fetch(`http://localhost:8085/pets/${id}`)

    .then(response=>response.json())

    .then(pet=>{


        console.log("PET:", pet);
        document.getElementById("petName").innerText = pet.name;
        document.getElementById("petAge").innerText = pet.age + " years old";
        document.getElementById("petSex").innerText = pet.sex;
        document.getElementById("petHealth").innerText = pet.healthCondition;
        document.getElementById("petVaccination").innerText = pet.vaccinationStatus;
        document.getElementById("petAdoption").innerText =pet.adoptionStatus;




            const images = {
                1: "images/milo.png",
                2: "images/bella.png",
                3: "images/cooper.png",
                4: "images/cloud.png",
                5: "images/salem.png",
                6: "images/zumi.png",
                7: "images/simba.png",
                8: "images/chloe.png"
            };

            document.getElementById("petImage").src = images[pet.id];

             const desc = {
            1: "Milo was rescued after being found roaming alone near a construction site, seeking safety and comfort. He is recovering well and grows stronger each day. Milo is friendly, gentle, and ready for a loving forever home.",
            2: "Bella was rescued as a young kitten after being found alone in a residential area. She quickly adapted to shelter life and enjoys playing with toys and surroundings. Bella is curious, affectionate, and always ready to greet visitors.",
            3: "Cooper was found wandering the streets alone in search of food and shelter. He is a sweet and affectionate dog who loves spending time with people and enjoys every bit of attention he receives. Cooper is looking for a loving home where he can feel safe, cared for, and truly belong.",
            4: "Cloud was frequently seen roaming around a neighborhood where residents regularly left food for stray animals. He is a calm and friendly cat who enjoys relaxing in quiet places. Cloud loves receiving attention and would make a wonderful companion.",
            5: "Salem was rescued from a vacant lot where he spent most of his time hiding among the grass. Although shy at first, he gradually became comfortable around people and other cats. He enjoys peaceful environments and gentle companionship.",
            6: "Zumi was rescued after being found near a busy roadside, where she was in need of medical care. She is now steadily recovering and regaining her strength each day. Despite everything she went through, she remains gentle, sweet, and calm. She hopes for a patient and loving home.",
            7: "Simba was found wandering near a roadside and was brought to safety by a local rescuer. His playful personality and endless curiosity make him one of the most energetic cats at the shelter. He loves chasing toys and meeting new friends.",
            8: "Chloe was found near a roadside drainage area, injured and in need of immediate care. She is currently receiving treatment and recovering with the help of the rescuers. Despite her condition, Chloe remains sweet and gentle. She hopes to find a loving home where she can continue to heal and thrive. "
        
        };
            document.getElementById("petDescription").innerText =
                desc[pet.id] || "No description available";

                const container = document.getElementById("adoptButtonContainer");
            const badge = document.getElementById("adoptBadgeContainer");

            container.innerHTML = "";
            badge.innerHTML = "";

        // p = The animal is healthy
        // q = The animal is vaccinated
        // r = The animal has complete medical records
        // r = p ∧ q
        // s = The animal is available for adoption
        // s = (p ∧ q) ∧ r
        // t = The animal is pending for adoption
        // t = (¬p ∧ ¬q) ∧ ¬r
        // v = adopter submitted complete information
        // This will come true after your form submission
        // u = The animal is successfully adopted
        // u = r ∧ v

        const p = pet.healthCondition === "Healthy";
        const q = pet.vaccinationStatus === "Vaccinated";
        const r = p && q;
        const s = (p && q) && r;
        const t = (!p && !q) && !r;
        const w = true;
        const u = r && w;
        container.innerHTML="";
        badge.innerHTML="";

        if(s && pet.adoptionStatus==="Available"){
            container.innerHTML= `<a href="form.html?id=${pet.id}&name=${pet.name}"class="adopt-btn">Adopt now!</a>`;

        }

        else if(pet.adoptionStatus==="Pending"){
            container.innerHTML=`<div class="adopt-btn-disabled">Pending</div>`;

        }

        else if(u && pet.adoptionStatus==="Adopted"){
            badge.innerHTML=`<div class="adopt-badge">Already Adopted</div>`;

        }
    })
    .catch(error=>{
        console.error("Error:",error);

    });
}

loadPet();
setInterval(loadPet, 3000);