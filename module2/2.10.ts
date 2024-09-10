{
// mapped types


const arrOfnumbers: number[] = [1,4,5]


// const arrOfString: string[] = ['1', '4' ,'5']
const arrOfString: string[] =arrOfnumbers.map(number =>number.toString())
console.log(arrOfString)


 type AreaNumber = {
    height: number;
    width: number;
 };

 type Height = AreaNumber ["height"]  //lookup type
//  type AreaString = {
//     height: string;
//     width: string;
//  }

// keyof AreaNumber
type AreaString<T> = {
    [key in keyof T]: T[key];
}

const area1: AreaString<{height: string; width:number}> = {
    height:"100",
    width:100,
}




















    //
}