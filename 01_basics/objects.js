const mysym=Symbol("mykey1");


const myobj={
    name:"Himadri",
    [mysym]:"key1",
    age: 33,
    location:"Assam",
    email:"himadri@google.com"
}

//console.log(myobj.age);
//console.log(myobj["age"]);
//console.log(typeof myobj[mysym]);

myobj.age=38;
//Object.freeze(myobj)
myobj.age=32
//console.log(myobj);


myobj.greetings=function(){
    //console.log("Hello Himadri");
    
}
myobj.greetingstwo=function(){
    //console.log(`Hello how are you,${this.name}`);

}

//console.log(myobj.greetings());
//console.log(myobj.greetingstwo());


//const tinderuser=new Object()

const tinderuser={}

tinderuser.id="123abc"
tinderuser.name="Himda"
tinderuser.isloggedin=false

//console.log(tinderuser);


const regularname={
    username:{
        fullname:{
            myname:"Sammy",
            lastname:"Das"
        }
    }
}

//console.log(regularname.username.fullname.myname);


const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}
const obj3={5:"a", 6:"b"}

//const obj4=Object.assign({},obj1,obj2,obj3)

const obj4={...obj1,...obj2,...obj3}
//console.log(obj4);

const users=[
    {
        id:1,
        email1:"h@google.com"
    },

    {
        id:2,
        email:"s@google.com"
    },

    {
        id:1,
        email:"h@google.com"
    }
]

users[1].email
//console.log(tinderuser);

//console.log(Object.keys(tinderuser));
//console.log(Object.values(tinderuser));
//console.log(Object.entries(tinderuser));

//console.log(tinderuser.hasownproperty('isloggedin'));


const course ={
    coursename:"js in hindi",
    courseprice:"999",
    courseinstructor:"Himadri"
}

const{courseprice:price}=course
//console.log(courseprice);
console.log(price);

//JSON syntax

// {
//     "coursename":"js in hindi",
//     "courseprice":999,
//     "courseinstructor":"Himadri"
// } 


//sometimes JSON also come as array format as well like

[
    {},
    {},
    {},
]