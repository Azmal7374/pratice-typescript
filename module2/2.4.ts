{
//

 // generic interface

 interface Developer<T, X=null>{
    name: string;
    computer: {
        brand: string;
        model: string;
        display?: string;
        releaseYear: number;
    },
    smartWatch:T;
    bike?:X
 }
 
 interface EmilabWatch {
    brand: string;
    model: string;
    display: string;
 }
const poorDeveloper: Developer<EmilabWatch> = {
    name: "Azmal",
    computer: {
        brand: "Asus",
        model: "X-2344UR",
        releaseYear:2012
    },
    smartWatch:{
        brand: "Emilab",
        model: "KW-66",
        display:"OLED"
    }

}

interface AppleWatch{
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack:boolean;
}
interface  YamahaVike {
    model: string;
    engineCapacity: string
}
const richDeveloper: Developer<AppleWatch, YamahaVike> = {
    name: "John",
    computer: {
        brand: "HP",
        model: "X-2344UR",
        releaseYear:2013
    },
    smartWatch:{
        brand: "Apple Watch",
        model: "KW-66",
        heartTrack: true,
        sleepTrack: true,
    },
    bike: {
        model:'yamah',
        engineCapacity:"100cc"
    }

}





































    //
}