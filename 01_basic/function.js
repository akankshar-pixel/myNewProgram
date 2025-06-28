function abc () {

    console.log("akanksha");
   console.log("lori");
   
   console.log("pragya");

}

//abc()

//function addTwoNumber(number1,number2){

//console.log(number1 + number2)

//}


function addTwoNumber(number1, number2){

   // let result = number1 + number2

   // return result

   return number1  + number2

}


const result = addTwoNumber(7, 9)

//console.log("result:", result);


function loginUserMassage (username = "sam"){

    if(!username){
        console.log("please enter user name");
        return

    }

    return ` ${ username }  just login ` 

}
console.log (loginUserMassage("akanksha"))

console.log (loginUserMassage("priya"))
























