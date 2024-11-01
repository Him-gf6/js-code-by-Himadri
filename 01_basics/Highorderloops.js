// for of

// let arr=[1,2,3,4,5,6]
// for (const i of arr) {
//     console.log(i);
// }


// const greetings="Hello world"
// for (const greet of greetings) {
//     console.log(greet);
    
// }

// we cannot use for-of for object

// const myobj={
//     'IN':"India",
//     'USA':"United States of America",
//     'FR':"France"
// }

// for (const i of myobj) {
//     console.log(i);
// }


//for-in

// const myobj={
//     js:"Javascript",
//     cpp:"C++",
//     py:"Python",
//     jsx:"React"
// }

// for (const key in myobj) {
//         console.log(`${key} is the shortcut of ${myobj[key]}`);
        
//     }


// const programming=["js","cpp","py","jsx"]

// for (const key in programming) {
//     console.log(`${key} it is for ${programming[key]}`);
    
// }

// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }


//for each loop

// const programming=["js","cpp","py","jsx"]

// programming.forEach(function (language){
//     console.log(language);
    
// })

//for each with arrow function

// programming.forEach( (language)=>{
//     console.log(language);
    
// })


const myheroes=[
    {
        heroname:"spiderman",
        channelname:"marvelstudios"
    },
    {
        heroname:"batman",
        channelname:"marvelcinema"
    },
    {
        heroname:"ironman",
        channelname:"marvelfilm"
    }
]

myheroes.forEach( (marvelheroes)=>{
    console.log(marvelheroes.channelname);
})