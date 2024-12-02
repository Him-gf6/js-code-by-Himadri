class user {
    constructor(email,password) {
        this.email=email;
        this.password=password
    }

    get password(){
        return `${this._password}hites`
    }
    
    set password(value){
        this._password=value.toUpperCase();
    }
}


const Himda=new user("Him@him.com","abc")
console.log(Himda.password);

//using function method in getter and setter

function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);


//object based getter and setter


const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);