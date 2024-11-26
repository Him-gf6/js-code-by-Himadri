// const promiseone = new Promise(function(resolve,reject){

//     setTimeout(function() {
//         resolve()
//         console.log("Async task is completed");
//     }, 1000);
// })

// promiseone.then(function(){
//     console.log("Task is completed");
// })


// new Promise(function(resolve,reject){

//     setTimeout(function() {
//         resolve()
//         console.log("Async task 2");
//     }, 1000);

// }).then(function(){
//     console.log("Task completed");
// })


// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve({username:"Himadri",email:"him@gmail.com"})
//     }, 1000);

// }).then(function(user){
//     console.log(user);
// })

// new Promise(function(resolve,reject){

//    setTimeout(function() {
//     let error=false;
//     if(!error){
//         resolve({username:"Himadri",email:"him@gmail.com"})
//     }
//     else{
//        reject("ERROR something went wrong")
//     }
//    }, 1000);
    
// }).then(function(user){
//         console.log(user);
//         return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=> console.log("it is finally executed or rejected"))


// const promisefive=new Promise(function(resolve,reject){

//     setTimeout(function() {
//      let error=true;
//      if(!error){
//          resolve({username:"Himadri",email:"him@gmail.com"})
//      }
//      else{
//         reject("ERROR something went wrong")
//      }
//     }, 1000);

// });

// async function consumepromisefive(params) {
//     try {
//         const response=await promisefive;   
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumepromisefive()

// async function getasyncfun(params) {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getasyncfun()


// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response;
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

