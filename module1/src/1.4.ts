// basic data type

//striung

// let firstName = 'Azmal'  //implicit data type
let firstName: string = 'Azmal'  //explicit data type

// number
let roll:number = 123

// boolean
let isAdmin:boolean = true 

// undefined 
let x : undefined = undefined

//null
let y: null = null


let d;
d = 123 // any type use na korai better


// non primitive

let friends: string[] = ['rachel', 'monika'];
friends.push("Sadek")
let eligibleRollLists: number[] =[12,3,4,5,6]
eligibleRollLists.push(23)


//tuple   --> array --> order --> typeof values

let coordinates: [number, number] = [1,5]


let ageName: [number, string, boolean] =[50, "Mr.X", true]
ageName[1] = "Mr.y"