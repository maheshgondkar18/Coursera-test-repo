// var message = "in global";
// console.log("global:message =" + message);

// var a = function(){
//     var message = "inside a";
//     console.log("a: message =" + message);
//     b();
// }

// function b()
// {
// console.log("b: message = " + message);
// }
// a();

//String Combination**
// var string="Hello";
// string="world";
// string =  string +" world";
// console.log(string+"!");

//Regular math operators
// console.log((5+4) /3);
// console.log(undefined / 5);

//Equality

// var x=4 ,y=4;
// if(x==y){
//     console.log("X=4 is equal to y=4");
// }

// x="4";
// if(x==y){
//     console.log("x=4 is equal to y=4");
// }

//Strict equality
// var x=4;
// var y="4";

// if(x===y){
//     console.log("x=4 is equla to y=4");
// }
// else{
//     console.log("Strict: x=4 is NOT equal to y=4");
// }


//****If statement (all false) */
// if(false || null || undefined || "" || 0 ||NaN){
//     console.log("This line wont ever execute");
// }
// else{
//     console.log("All False");
// }

//***If statement (all true) */
// if(true && "Hello" && -1 && "false"){
//     console.log("All true");
// }

//*** Best practice for {} style 
//curly braces on the same or next line...
// function a()
// {
//     return
//     {
//         name:"Mahesh"
//     };
// }

// function b(){
//     return{
//         name:"Mahesh"
//     };
// }
// console.log(a());
// console.log(b());

////*** For Loop */
// var sum = 0;
// for(var i =0;i <10; i++){
//     console.log(i);
//     sum = sum+i;
// }
// console.log("Sum of 0 through 9 is : "+ sum);