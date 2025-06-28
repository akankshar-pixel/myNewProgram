const tinderuser = new Object()

tinderuser.id  = "123ab"
tinderuser.name = "Akanksha"
tinderuser.logedin =  false

//console.log(tinderuser)

const regularuser = {

    Email : "prai774@gmail.com",

    fullname : {
     userfullname :{
            firstname : "akanksha",
            lastname : "rai"

}
 }
}


//console.log(regularuser.fullname.userfullname)




const obj = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}
const obj7 = { 7: "b", 8: "c"}

//const obj3 =  { obj, obj2}

//const obj3 = Object.assign ({}, obj, obj2, obj7 )
//console.log(obj3); 


const obj8 = { ...obj, ...obj2, ...obj7}

//console.log(obj8)


const users = [

{
    id : 233,
    Email : "akanksha.it07@gmail.com"
},


{
    id : 233,
    Email : "akanksha.it07@gmail.com"
},



{
    id : 233,
    Email : "akanksha.it07@gmail.com"
},


{
    id : 233,
    Email : "akanksha.it07@gmail.com"
},

]

users[1].Email

console.log(tinderuser);

console.log(Object.keys(tinderuser));

console.log(Object.values(tinderuser));

console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('logedin'))


const cource =  {

   courcename : "hindi",

   price: 300,

   courceinstroctor : "akanksha"


}

const { courceinstroctor}  = cource

console.log(courceinstroctor)













