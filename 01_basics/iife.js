(function chai(){                           //named iife
    console.log("My name is Himadri");
})();                                       //we should always put ; at the end of a iife function


(()=>{
    console.log("My name is Himadri");
    
})();


((name)=>{
    console.log(`My name is Himadri ${name}`);   //unnamed iife
    
})(`Sarkar`)