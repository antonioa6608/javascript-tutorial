//understanding classes in javascript 101
//create a parent class 

class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
  
    //getters
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    //create a function that passes daysoff 
    //calculate the remaining days - days off 
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
    //generate a random number 100,10000 for the password
    static generatePassword(){
      return Math.floor(Math.random()* 10000);
    }
  }
  //create a subclass extending from the parent class 
  class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      super(name);
      this._certifications = certifications;
    } 
    //getters
    get certifications() {
      return this._certifications;
    }
    //create a function to add a certification 
    addCertification(newCertification) {
      this.certifications.push(newCertification);
    }
  }
  //create a new instance 
  const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
  nurseOlynyk.takeVacationDays(5);
  console.log(nurseOlynyk.remainingVacationDays);
  //add a certification 
  nurseOlynyk.addCertification('Genetics');
  console.log(nurseOlynyk.certifications);