// class user {
//     constructor(username,email,password) {
//         this.username=username;
//         this.email=email;
//         this.password=password
//        }

//        encryptPassword(){
//         return `${this.password}`
//        }

    //    changeusername(){
    //     return `${this.username.toUpperCase()}`
    //    }


// }

// const chai=new user("Hitesh","Hit@gmail.com","123");
// console.log(chai.encryptPassword());
// console.log(chai.changeusername());


function user(username,email,password) {
        this.username=username;
        this.email=email;
        this.password=password
       }


user.prototype.encryptPassword=function(){
    return `${this.password}`
}

user.prototype.changeusername=function(){
    return `${this.username.toUpperCase()}`
}

const tea=new user("Hitesh","Hit@gmail.com","123");
console.log(tea.encryptPassword());
console.log(tea.changeusername());