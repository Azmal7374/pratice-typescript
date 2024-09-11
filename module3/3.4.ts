{
// instanceof guard

class Animal {
    name: string;
    species: string;


    constructor (name: string, species: string) {
        this.name = name;
        this.species = species;
    }
    makesSound() {
        console.log(`I am makeing sounf`)
    }
}

class Dog extends Animal {

    constructor(name: string, species: string) {
        super(name, species)
    }
    makeBar() {
        console.log(`I am barking`)
    }
}


class Cat extends Animal {

    constructor(name: string, species: string) {
        super(name, species)
    }
    makeMeaw() {
        console.log(`I am  make meawing`)
    }
}

//smart way tw handle korar jonno chaile amra function use korte pari

const isDog =(animal: Animal):animal is Dog=>{
    return animal instanceof Dog 
}

const isCat =(animal: Animal): animal is Cat=>{
    return animal instanceof Cat 
}

const getAnimal=(animal: Animal) =>{
    if(isDog(animal)){
        animal.makeBar();
    }else if(isCat(animal)){
      animal.makeMeaw();
    }else{
        animal.makesSound()
    }
}

const dog = new Dog("Dog Bhai", "dog");
const cat= new Cat("Cat Bhai", "cat");

// dog.makeBar();
getAnimal(dog)
getAnimal(cat)





























    //
}