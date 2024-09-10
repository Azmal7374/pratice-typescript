{
// utility type 

//Pick
type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
}

type NameAge = Pick<Person, "name"| "age">;



// Omit type
type ContactInfo = Omit<Person, "name" |"age">


//Required
type PersonRequird = Required<Person>

//Partial
type PersonPartial = Partial<Person>

//Readonly

type PersonReadonly = Readonly<Person>

const person1:PersonReadonly  = {
   name: "John",
   age: 33,
   contactNo: "023232"
}
// person1.name ="Mr.YZ"


//Record type
// type MyObj ={
//     a:string;
//     b:string;
// }
type MyObj = Record<string, string>
const EmptyObj: Record<string, unknown>= {}
const obj1:MyObj ={
   a:"aa",
   b:"bb",
   c:"cc",
   d:"dd",
//    e:4
}






    //
}