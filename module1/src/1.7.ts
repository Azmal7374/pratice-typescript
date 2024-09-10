{
    
    // const poorUser = {
    //     name: 'Mr.x'
    // }
    
      
    
//spread operator  
//rest operator
//destructuriing  

const bors1: string[] =["Mir", "Mizan","Firoz"]
const bros2: string[] =["Tonmoy", "Nahid","Rahat"]
bors1.push(...bros2)

const mentors1 ={
    typescript: 'Mezba',
    redux: "Mir",
    dbms: "Mizan"
}

const mentors2 = {
    prisma: "Firoz",
    next:"Tanmoy",
    cloud: "Nahid"
}

const mentorList = {
    ...mentors1,
    ...mentors2
}


//learn rest operator
const greetFriends =(...friends:string[]) =>{
    // console.log(`Hi ${friend1} ${friend2} ${friend3}`)
    friends.forEach((friend: string) => console.log(friend))
}

greetFriends("Abul", "Mokbul", "Babul", "Ubul", 'labul')



}