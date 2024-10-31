// for (let index = 0; index <=10; index++) {
//     const element = index;
//     if (element==5) {
//         console.log("5 is best number");
//     }
//     console.log(element);
// }


// for (let i=1; i<=10; i++) {
//     for (let j=1;j<=10;j++) {
        
//         console.log(i+"*"+j+"="+i*j);
        
//     }
    
// }

// const myarray=["flash","superman","batman"]
// console.log(myarray.length);

// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element)
// }


for (let index = 1; index <=10; index++) {
    const element = index;
    if (element==5) {
        console.log("5 is detected");
        break;
    }
    console.log(element);
}


for (let index = 1; index <=10; index++) {
    const element = index;
    if (element==5) {
        console.log("5 is detected");
        continue;
    }
    console.log(element);
}