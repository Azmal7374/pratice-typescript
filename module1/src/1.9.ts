{
//

type Student ={
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
}

const student1: Student={
    name: "Mezba",
    age:50,
    gender: "male",
    contactNo: '0179999999',
    address:'ctg',
};

const student2: Student ={
  name: "Azmal",
  age: 23,
  gender: "male",
  address: 'Crowland',
}


const student3: Student ={
    name: "Azmal",
    age: 23,
    gender: "male",
    address: 'Crowland',
  }
  

type UserName = string
type IsAdmin = boolean
const userName: UserName = "Azmal"
const isAdmin:IsAdmin = false


type Add = (num1: number, num2: number) => number

const add:Add = (num1, num2) : number => num1 + num2









//
}