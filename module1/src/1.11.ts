{
// ternary operator || optional chaning || nullish polishing operator


// const age: number = 18
// if(age>=18) {
//     console.log("Adult")
// }else{
//     console.log('Not Adult')
// }

// const isAdult = age >= 18 ? 'adult' :'not adult'
// console.log(isAdult)


//nallish coalesing operator
//null / undefined ---> decision makeing
const  isAutomaticated = "";

const result1 = isAutomaticated ?? 'Guest'
console.log(result1)

const result2 = isAutomaticated ? isAutomaticated : 'Guest'
console.log(result2)


type User = {
    name: string;
    address: {
        city: string;
        road: string;
        presentAddress: string;
        parmanentAddress?: string;
    }
}

const user: User = {
    name: 'Azmal',
    address: {
        city: 'BSL',
        road: 'BH-highway',
        presentAddress: 'BSL town'
    }
}
const permanentAddress = user?.address?.parmanentAddress ?? "No permanent address";
console.log(permanentAddress)













//
}