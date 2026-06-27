package furfind.service;

import furfind.entity.Pet;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class PetService {


    private final List<Pet> pets = new ArrayList<>();
    private long idCounter = 1;
    public PetService(){

        seed();

    }
    private void seed(){
        pets.add(create("Milo",2,"Male","Healthy","Vaccinated","Available"));
        pets.add(create("Bella",1,"Female","Healthy","Vaccinated","Available"));
        pets.add(create("Cooper",3,"Male","Injured","Not Vaccinated","Pending"));
        pets.add(create("Cloud",2,"Male","Healthy","Vaccinated","Adopted"));
        pets.add(create("Salem",4,"Male","Recovering","Vaccinated","Available"));
        pets.add(create("Zumi",2,"Female","Injured","Vaccinated","Pending"));
        pets.add(create("Simba",1,"Male","Healthy","Vaccinated","Available"));
        pets.add(create("Chloe",3,"Female","Recovering","Not Vaccinated","Pending"));

    }
    private Pet create(
            String name,
            int age,
            String sex,
            String health,
            String vacc,
            String adopt
    ){
        Pet p = new Pet();

        p.setId(idCounter++);
        p.setName(name);
        p.setAge(age);
        p.setSex(sex);
        p.setHealthCondition(health);
        p.setVaccinationStatus(vacc);
        p.setAdoptionStatus(adopt);
        return p;
    }

    public List<Pet> getAllPets(){
        return pets;
    }



    public Optional<Pet> getPetById(Long id){
        return pets.stream()
                .filter(p -> p.getId().equals(id))
                .findFirst();

    }
    
    public Pet updatePet(Long id, Pet updatedPet){
    for(Pet p : pets){

        if(p.getId().equals(id)){

            if(updatedPet.getName() != null 
                    && !updatedPet.getName().isEmpty()){
                p.setName(updatedPet.getName());
            }

            if(updatedPet.getAge() != null){
                p.setAge(updatedPet.getAge());
            }

            if(updatedPet.getSex() != null 
                    && !updatedPet.getSex().isEmpty()){
                p.setSex(updatedPet.getSex());
            }

            if(updatedPet.getHealthCondition() != null){
                p.setHealthCondition(
                    updatedPet.getHealthCondition()
                );
            }

            if(updatedPet.getVaccinationStatus() != null){
                p.setVaccinationStatus(
                    updatedPet.getVaccinationStatus()
                );
            }


            if(updatedPet.getAdoptionStatus() != null){
                p.setAdoptionStatus(
                    updatedPet.getAdoptionStatus()
                );
            }
            return p;
        }
    }
    return null;
}

    public Pet adoptPet(Long id){
        for(Pet p:pets){
            if(p.getId().equals(id)){
                p.setAdoptionStatus("Adopted");
                return p;

            }
        }
        return null;

    }

    public void deletePet(Long id){
        pets.removeIf(
                p -> p.getId().equals(id)
        );

    }

}