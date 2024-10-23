function myname() {
    console.log("H");
    console.log("I");
    console.log("M");
    console.log("A");
    console.log("D");
    console.log("R");
    console.log("I");
}

myname()

//numbers can be printed in three different ways

function addtwonumbers(number1,number2){
       console.log(number1+number2);
       
}

function addtwonumbers(number1,number2){
    const result=number1+number2;
    return result
}

function addtwonumbers(number1,number2){
    return number1+number2;
    
}

const result=addtwonumbers(3,4)
//console.log("result: ",result);


function logtheusername(username){
    if(!username){
        console.log("please give your name" );
        return;
     }
    return `${username} just logged in`
}

//console.log(logtheusername("Himadri"));
//console.log(logtheusername());


function shopingcartprice(...num1){
    return num1
}

//console.log(shopingcartprice(200,56,666,756,765));


const user={
    username: "Himadri",
    price:199
}

function myuserobj(anyobject){
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`);
}

myuserobj(user)


const mynewarray=[100,200,300]

function bringnewarray(anyarray){
    return anyarray[3]
}

console.log(bringnewarray(mynewarray));


const myobj={
    username:"Himda",
    email:"h@gmail.com"
}

function printmyobj(printall){
    console.log(`the username is ${printall.username} and email is ${printall.email}`);
    
}

printmyobj(myobj)



const notunarray=[200,600,800,700]

function allarray(everyarray){
    return everyarray[3]
}


console.log(allarray(notunarray));