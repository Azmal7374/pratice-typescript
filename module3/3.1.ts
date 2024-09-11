{
    //
//oop- class 


// class Animal {
//        public name: string; //property
//        public speciec: string;
//        public sound: string;

//         constructor(  name: string,  speciec: string,  sound: string) {
//             this.name = name;
//             this.speciec = speciec;
//             this.sound = sound;
//         }
//         makeSound(){ // method
//             console.log(`The ${this.name} syas ${this.sound}`)
//         }
//     }
    

//use parameter property
class Animal {

   //parameter Properties


    constructor(public name: string, public speciec: string, public sound: string) {
  
    }
    makeSound(){ // method
        console.log(`The ${this.name} syas ${this.sound}`)
    }
}



const dog =new Animal("German Shepard Bhai", "Dog","Ghew Ghew");
  const cat =new Animal("Persian Bhai","cat", "meaw meaw")
// dog.
// cat.makeSound()



















    //
}