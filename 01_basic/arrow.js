const user = {

username: "akanksha",
price: 9999,
welcomemessage : function (){

console.log(`${this.username}, welcome to our website`);
//console.log(this);

}
}

//console.log(this);

//user.welcomemessage()
//
// //user.username = "priya"
//user.welcomemessage()




//function chai (){
   // let username = "akanksha"
// console.log(this.username)
//}

//chai()


//const  chai =  function (){
 //let username = "akanksha"
//console.log(this.username)
//}
//chai()

const  chai =  () => {
 let username = "akanksha"
console.log(this.username)
}
chai()




//const addtwo = ( num1, num2)  =>{
//return num1 + num2

////}

//console.log(addtwo (20,22))





//const addtwo1 = ( num1, num2)  =>   (num1 + num2)
//console.log(addtwo1 (20,22))

const addtwo1 = ( num1, num2)  =>  ({ username : "akanksha"})
console.log(addtwo1 (20,22))











