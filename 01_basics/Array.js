const myarr=[1,2,3,4,5]
//console.log(myarr);

//console.log(myarr[4]);

//myarr.push(6)
//console.log(myarr);

//myarr.pop()
//console.log(myarr);


//myarr.unshift(8)
//myarr.shift()

//console.log(myarr.includes(9));
//console.log(myarr.indexOf(3));

//console.log(myarr.join());


//const newarr=myarr.join();
//console.log(typeof newarr);


//console.log("A ",myarr);

const mya1=myarr.slice(0,2);
//console.log(mya1);
//console.log("B ",myarr);


const mya2=myarr.splice(0,2);
//console.log(mya2);
//console.log("C ",myarr);


const marbleheroes=["gdfdgd","fdgdgdgdgd","gdgdgdg"]
const dcheroes=["vvnvnvn","iiiii","hhhh"]

const allheroes=marbleheroes.concat(dcheroes)
//console.log(allheroes);


const newheroes=[...marbleheroes,...dcheroes]
//console.log(newheroes);


const newtypearr=[1,2,3,[3,4],5,[3,7,[5,6]]]
const newallarr=newtypearr.flat(Infinity)

//console.log(newallarr);


console.log(Array.isArray("Himadri"));
console.log(Array.from("Himadri"));
console.log(Array.isArray("Himadri"));


let score1=33
let score2=34
let score3=35

console.log(Array.of(score1,score2,score3));