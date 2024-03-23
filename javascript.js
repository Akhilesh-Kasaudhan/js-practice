

//call back function
// setTimeout(() => {
//     console.log("hey i am back");
// }, 5000);
//first class function
// function abcd(a){
//    a();
// }
// abcd(function(){console.log("hey");})

// const thankYou = function () {
//     console.log("hello");
    
// };
// thankYou();


// var arr =[1,2,3,4];
// console.log(arr);
// arr[-1]=9;
// console.log(arr);
// var obj={
//     name:"akhil",
//     age:21
// }
// console.log(obj);
// delete obj.age;
// console.log(obj);

// const obj={
//     name:"akhilesh",
//     qualification :function(){
//         console.log(this.name + " is a software engineer");
//     }
// }
// obj.qualification();

const myName =function(){
    return "Hello";
}
const greetings = function(sayHi, name){
    console.log(sayHi()+name);
}
greetings(myName," Akhilesh");
function a( ){
    return function b(){
        console.log("hey glad to see you back");
    }
}

a()();
const c=a();
c();function createMultiplexer(factor){
    return function(X){
        return X *factor; 
    };
}
    const multiplyByTwo =createMultiplexer(2);
    console.log(multiplyByTwo(5));
const arr =[1,2,3,4];
console.log(arr);
arr[-1]=9;
console.log(arr.entries());