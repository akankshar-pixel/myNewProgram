const marvel = ["thor", "ironman", "spiderman"]

const dc = ["superman", "flash", "batman"]

//marvel.push(dc);

//console.log(marvel)
//console.log(marvel [3] )

///const allhero = marvel.concat(dc)
//console.log(allhero);

const allhero = [ ...marvel, ...dc]
//console.log(allhero);


const anotherarray = [1, 2, 3, [ 4, 5, 6] , 7, 8, [9, 10, [11, 12]]]

const realarray = anotherarray.flat (Infinity)
//console.log(realarray)


//console.log(Array.isArray("akanksha"))

//console.log(Array.from("anu"))

console.log(Array.from({  name: "akanksha"})   )

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
