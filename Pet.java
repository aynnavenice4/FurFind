package furfind.entity;

public class Pet {

    private Long id;
    private String name;
    private Integer age;
    private String sex;

    private String healthCondition;
    private String vaccinationStatus;
    private String adoptionStatus;
    
    
    //Logic
    public boolean p() {
    return "Healthy".equalsIgnoreCase(healthCondition);
    }
    public boolean q() {
        return "Vaccinated".equalsIgnoreCase(vaccinationStatus);
    }
    public boolean r() {
        return p() && q();
    }
    public boolean s() {
        return r() && "Available".equalsIgnoreCase(adoptionStatus);
    }
    public boolean t() {
        return !p() && !q() && !r();
    }

    private boolean adopterInfoComplete;

    public boolean v() {
        return adopterInfoComplete;
    }
    public void setV(boolean v) {
        this.adopterInfoComplete = v;
    }
    public boolean u() {
        return r() && v();
    }

    

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getHealthCondition() {
        return healthCondition;
    }

    public void setHealthCondition(String healthCondition) {
        this.healthCondition = healthCondition;
    }

    public String getVaccinationStatus() {
        return vaccinationStatus;
    }

    public void setVaccinationStatus(String vaccinationStatus) {
        this.vaccinationStatus = vaccinationStatus;
    }

    public String getAdoptionStatus() {
        return adoptionStatus;
    }

    public void setAdoptionStatus(String adoptionStatus) {
        this.adoptionStatus = adoptionStatus;
    }
}