package furfind.controller;

import furfind.entity.Pet;
import furfind.service.PetService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pets")
@CrossOrigin(origins = "*")
public class PetController {


    private final PetService petService;


    public PetController(PetService petService){
        this.petService = petService;
    }



    @GetMapping
    public List<Pet> getAllPets(){

        return petService.getAllPets();

    }


    @GetMapping("/{id}")
    public Pet getPetById(@PathVariable Long id){

        return petService.getPetById(id)
                .orElse(null);

    }


    @PostMapping("/{id}/adopt")
    public Pet adoptPet(@PathVariable Long id){
    return petService.adoptPet(id);
    }
    
    @PutMapping("/{id}")
    public Pet updatePet(
            @PathVariable Long id,
            @RequestBody Pet updatedPet
    )
    
    {
        return petService.updatePet(id, updatedPet);

    }

    @DeleteMapping("/{id}")
    public String deletePet(@PathVariable Long id){

        petService.deletePet(id);

        return "Pet deleted";

    }

}