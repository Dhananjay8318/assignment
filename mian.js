// console.log("hello g")
// let doingArrowStuff = x => console.log(x);
// doingArrowStuff("Great!");
// let sayHi = () => console.log("Hi");
// const arr = ["a","b","c"];
// arr.forEach(e => console.log(e));

// spread operator
// let spread = ["so", "much", "fun"];
// let message = ["javascript", "is", ...spread, "and", "very"];

// console.log(message);
// function addFourNumbers(x,y,z,a){
//     console.log(x+y+z+a)
// }
// let arr = [5,9];
// let arr2 = [6,7];
// addFourNumbers(...arr, ...arr2);

// Rest operator/parameter
// function someFunction(param1, param2){
//     console.log(param1,param2);}
//     someFunction("hi","there!", "how are you?");

//     function someFunction(param1, ...param2){
//         console.log(param1,param2);}
//         someFunction("hi","there!", "how are you?");


// RETURNING FUNCTION VALUES
// let result = addTwoNumbers(4, 5);
// console.log(result);
// function addTwoNumbers(x,y){
// return x+y;
// }

// let resultsArr = [];
// for(let i = 0; i<10; i ++){
//     let result = addTwoNumbers(i, 2*i);
//     resultsArr.push(result);

// }
// console.log(resultsArr);

// RETURING WITH TWO NUMBER
// let add = (x,y) =>x+y;
// let result = addTwoNumbers(12,15);
// console.log(result);

// let addTwoNumbers = (x, y) => {
//     console.log("adding...");
//     return x + y;
// };




// //  local variable scope in function
// function testAvailability(x){
//     console.log("Available here:",x);
// }
// testAvailability("hi!");
// // console.log("not available here:",x);



// function testAvailability() {
//     let y = "i will return";
//     console.log("Available here:",y);
//     return y;

// function doingStuff() {
//     if(true) {
//         var x = "local";
//     }
//     console.log(x);
//     }
//     doingStuff();
// function doingStuff() {
//     if(true){
//         console.log(x);
//         let x = "local";
//     }
// }
// doingStuff();



// cons scope 
// {
//     const name = "Alice";
//     console.log("Inside block:", name); 
// }

// console.log("Outside block:", name);



// GLOBAL VARIABLE
// let globalVar = "Access!";
// console.log("outside function:",globalVar);
// function creatingNewScope(x) {
//     console.log("acces to global inside the function",gv);
// }
// creatingNewScope("still available",gv)


// let x = "global";
// function doingStuff(){
//     let x = "local";
//     console.log(x);
// }
// doingStuff();
// console.log(x);
// let x = "global";
// function doingStuff(x){
//     console.log(x);

// }
// doingStuff("param");

function confuseReader() {
    x = "Guess my scope...";
    console.log("inside the function:",x);
}
confuseReader();
console.log("outside of function:",x);