//filter in js


// const mynum=[1,2,3,4,5,6,7,8,9,10]

// const newnum=mynum.filter( (num)=> num>=3 )
// console.log(newnum);


//map in js


// const newnum=mynum.map( (num)=> num*10 )
// .map( (num)=> num+1)
// console.log(newnum);


//reduce in js


const mynum=[1,2,3]

const total=mynum.reduce( (acc,curval)=>  acc+curval,0 )
console.log(total);
