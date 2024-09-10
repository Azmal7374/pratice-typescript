{
//

// union types

// type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'

// type FullstackDeveloper = 'frontendDeveloper' | 'expertDeveloper'


// const newDeveloper: FrontendDeveloper ='juniorDeveloper'
// type Developer =FrontendDeveloper | FullstackDeveloper

// type User = {
//     name: string;
//     email?: string;
//     gender: 'male' | 'female';
//     bloodGroup: "O+" | "A+" | "AB+"
// }

// const user1: User = {
//     name: 'Azmal',
//     gender: 'male',
//     bloodGroup: 'O+'

// }




//intersection type

type FrontendDeveloper = {
    skills:string[],
    designation1: "Frontend Developer",
}

type BackendDeveloper = {
    skills:string[],
    designation2: "Backend Developer",
}


type FullstackDeveloper = FrontendDeveloper & BackendDeveloper

const fullstackDeveloper:FullstackDeveloper = {
    skills:["Html", "Css", "JavaScript", "Express"],
    designation1: "Frontend Developer",
    designation2:"Backend Developer"
}















    //
}