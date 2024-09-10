//destructuring
{



//object destructuring
const user = {
    id: 345,
    name: {
        firstName: 'Mazbaul',
        middleName: 'Abedin',
        lastName: 'persian'
    },
    contactNo: '0138383',
    address: "Uganda"
}


const {contactNo:phoneNum, name: {middleName:midName},
} = user;


//array destructuring
const myFriends = ['chandler', 'joey,ross', 'rachel','monika','phoebe']

const [,, bestFriend,...rest] = myFriends

}