// singleton 
//object litral 
//Object.create

const mysym = Symbol("key")

const jsuser = {

    name: "akanksha",
  "full name": "Akanksha Rai",
   [mysym]  : "mykey1",

    age: 18,
   location: "pune",
    email: "akanksha.it07@gmail.com",
    isLoggedin: false,
    lastLoginDays: ["Monday", "saturday"] 
}

//console.log(jsuser.age)
//console.log(jsuser ["email"])
//console.log(jsuser["full name"])
//console.log(jsuser [mysym]);


jsuser.email = "prai774@gmail.com"
//Object.freeze(jsuser)
jsuser.email ="anu@gmail.com"

console.log(jsuser)

jsuser.greeting = function(){
 console.log("hello")

}

jsuser.greeting2 = function(){

  console.log(`hello world, ${this.name}`)

}




console.log(jsuser.greeting ())












