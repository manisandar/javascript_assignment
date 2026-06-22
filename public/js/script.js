let a = 10; 

const b = 'hello'; 

var c = 120.11; 

console.log("a ", a); 

console.log("b ", b); 

console.log("c ", c); 

 

a = 20; // valid 

console.log("a ", a); 

a = "world"; //also valid 

console.log("a ", a); 

// b = "Hi there"; //invalid due to const keyword 

console.log("b ", b); 

let x = 10; 
switch (x) { 
    case 5: 
        console.log("1"); 
        break; 
    case 10: 
        console.log("2"); 
        break; 
    case 15: 
        console.log("3"); 
        break; 
    default: { 
        console.log("4"); 
        console.log("No matched"); 
    }  
}