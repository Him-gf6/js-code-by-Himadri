let newdate=new Date
//console.log(newdate.toDateString())
//console.log(newdate.toLocaleString())
//console.log(newdate.toTimeString())
//console.log(newdate.toLocaleTimeString())

//console.log(typeof newdate);

let newdates=new Date(2023,12,16)
//console.log(newdates.toDateString())


let makedate=new Date
//console.log(makedate.getDate());



console.log(makedate.toLocaleString('default',{
    weekday: "narrow",
}))