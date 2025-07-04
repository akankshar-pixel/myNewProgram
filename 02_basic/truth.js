const userEmail = 'a@akanksha.ai'

if(userEmail){

    console.log("got user email");

}else {

    console.log("don't have useremail")
}

// falsy value
//false, 0, -0, BigInt 0n,  " ", null, undefined, Nan


//true value
//"0", "false", " ", [ ], { }, function(){}


const emptyObj = {}

if(Object.keys(emptyObj).length=== 0){

    console.log("object is empty");

}




//nullish coalesing opreator (??) ; null undefind

let val1;
//val1 = 6 ?? 10

//val1 = null ?? 10

//val1 = undefined ?? 30

val1 = null ?? 30 ??6


console.log(val1)




//ternery opreator

condition ? true : false 



