function setusername(username){
    this.username=username
}

function setuser(username,email,password){
    setusername.call(this,username)
    this.email=email;
    this.password=password;
}

const chai=new setuser("Himadri","him@gmail.com","123")
console.log(chai);
