{
//
//generic type

type GenericArray<T> = Array<T>;


// const rollNumbers: number [] =[3,6,8]
const rollNumbers: GenericArray<number> =[3,6,8]

// const mentors: string[] =['Mr.X', "Mr.Y", 'Mr.Z']
const mentors: GenericArray<string> =['Mr.X', "Mr.Y", 'Mr.Z']

// const boolArray: boolean[] =[true, false, false]
const boolArray:GenericArray<boolean> =[true, false, false]

type User = { 
    name: string;
    email?: string;
    age: number;
}

//generic object
const user:GenericArray<User> = [{
    name: 'Azmal',
    age: 100,
   
},
{
    name: 'Jhankar',
    age: 100,
}
]

const add = (x:number, y:number) => x + y
add(30,20)



// generic tuple

type GenericTuple<X,Y> = [X,Y]
const manush : GenericTuple<string,string> =['Mr.X', 'Mr.Y']

const UserWithId:GenericTuple<number, {name:string, email:string}> = [1234, {name: 'John',email: "a@gmail.com"}]





    //
}