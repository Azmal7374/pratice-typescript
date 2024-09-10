{
//

//function with generics

const CreateArray = (param:string):string[] =>{
    return [param]
}

const CreateArrayWithGenric = <T>(param:T):T[] =>{
    return [param]
}



const res1 = CreateArray("Bangladesh")
const resGeneric =CreateArrayWithGenric<boolean>(true)

type  User = {
    id: number;
    name: string;
}

const resGenericObj = CreateArrayWithGenric<User>({id:222, name: "MR.Pasan"})



const CreateArrayWithTuple = <T,Q>(param1:T, param2:Q):[T,Q] =>{
    return [param1, param2];
}



const res10 =  CreateArrayWithTuple<string, number>("Bangladesh", 123)

const resGeneric2 =CreateArrayWithTuple<string, object>("Bangladesh",{name:"Asia"})

const addCourseToStudent = <T>(student: T) => {
 const course = "Next Level Web Developemnt"
 return {
    ...student,
    course
 }
}

const student1 = addCourseToStudent({name: "Mr.X", email: "x@gamil.com", devType:"next level web developer"})


const student2 = addCourseToStudent({name: "Mr.Y", email: "y@gamil.com", hasWatch: "Apple Watch"})










    //
}