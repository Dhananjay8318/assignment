// //you want to call it self is called a recursive function


// //it give a infinite value
// function getRecursive(nr){
//     console.log(nr);
//     getRecursive(--nr);
// }
// getRecursive(3);

// // it give a finite value
// function getRecursive(nr){
//     console.log(nr);
//     if(nr>0){
//         getRecursive(--nr);
//     }
    
// }
// getRecursive(3);

//demonstrate recursive
function logRecursive(nr){
    console.log("stated function",nr);
    if(nr>0){
        logRecursive(nr-1);
    }
    else{
        console.log("done with recursion");
    }
    console.log("ended function:");
}
logRecursive(3);