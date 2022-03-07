//default values
// function orderCheckenWith(sideDish){
//    sideDish = sideDish || "whatever";
//     console.log("Chiken with " + sideDish);
// }

// orderCheckenWith("noodles");
// orderCheckenWith();

//object creation
// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName="MArk";
// company.ceo.favcolor="Blue";
// console.log(company);
// console.log("Company ceo name is: "+ company.ceo.firstName);

// console.log(company["name"]);
// company.$stock = 110;
// console.log(company);

//Better way Object literal
// var facebook = {
//     name: "Facebook",
//     ceo: {
//         firstname:"Mark",
//         favcolor:"blue"
//     },
//     $stock: 110
// };
// console.log(facebook.ceo.firstname);

//Function are Objects
// function mul(x,y){
//     return x*y;
// }
// console.log(mul(5,3));
// mul.version = "v.1.0.0";
// console.log(mul.version);

//Function factory
// function makeMultiplier(multiplier){
//     var myfunc = function(x){
//         return multiplier *x;
//     };
//     return myfunc;
// }

// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));
// var doubleAll =  makeMultiplier(2);
// console.log(doubleAll(100));

// //passing functions as arguements

// function doOpreationOn(x,Opreation){
//     return Opreation(x);
// }

// var result = doOpreationOn(5,multiplyBy3);
// console.log(result);
// result= doOpreationOn(100,doubleAll);
// console.log(result);


//copy by Reference vs by valuey
//pass by value
// var a=7;
// var b=a;

// console.log("a: "+a);
// console.log("b: "+b);

// b=5;
// console.log("after b update:");
// console.log("a: "+a);
// console.log("b: "+b);

//
// var a={x:7};
// var b=a;
// console.log(a);
// console.log(b);

// b.x=5;
// console.log("after b.x update:");
// console.log(a);
// console.log(b);

//Pass by reference vs by value
// function changePrimitive(primValue){
//     console.log("in chnagePrimitive..");
//     console.log("Before:");
//     console.log(primValue);

//     primValue = 5;
//     console.log("after:");
//     console.log(primValue);
// }

// var value = 7;
// changePrimitive(value);
// console.log("after changePrimitive, orig value:")
// console.log(value);

function changePrimitive(objValue){
    console.log("in changeObject..");
    console.log("before:");
    console.log(objValue);

    primValue = 5;
    console.log("after:");
    console.log(objValue);
}

var value ={x:7} ;
changePrimitive(value);
console.log("after changePrimitive, orig value:")
console.log(value);

