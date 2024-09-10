{
//

//generic constraints with keyof operator

type Vehicle = {
    bike:string;
    car: string;
    ship: string;
}

type Owner = 'bike' | 'car' | 'ship'; //manually

type Owner2 = keyof Vehicle

// const person1: Owner = ""

const getPropertyValue=<X,Y extends keyof X> (obj:X, key:Y)=> {
    return obj[key]
}

const user = {
    name: 'Mr. Azmal',
    age: 23,
    address: 'bsl',
}


const car = {
    model: 'Toyota 100',
    year: 2000,
}
const result1 = getPropertyValue(car, 'model')

// obj[key]





    //
}