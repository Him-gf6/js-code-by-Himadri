// const user={
//     username: "Himadri",
//     price:199,

//     WelcomeMessage:function(){
//         console.log(`${this.username},welcome to website`);
        
//     }
// }

// user.WelcomeMessage()




// const Himadri={
//     title:"Sarkar",
//     age:22,

//     Himadrititle:function(){
//         console.log(`${this.title} is Himadri's title`);
//         console.log(this);
        
//     }
// }



// Himadri.Himadrititle()
// Himadri.title="Ghosh"
// Himadri.Himadrititle()



// const add=(num1,num2)=>{      //explicit function
//     return num1+num2
// }

// console.log(add(3,2))


// const add=(num1,num2)=>(num1+num2)    //implicit function
// console.log(add(5,6))



const user=()=> ({username:"Himadri",title:"Sarkar"})   //when we will declare object inside a arrow function
console.log(user())
