//var 
//scope:var 
//function scoped+ global scoped 
var x=10;
function test(){
    var y=20;
}

console.log(x);

var pop="hi JS";

function rel (){
    var top= "hello js";

}
rel();
console.log (pop);
//console.log(top);

var browser="chrome";
var browser="firefox";
browser="edge";
console.log (browser);

var g;
console.log (g);//undefined 

g="hello world";
console.log (g); //hello world 

//issue with var keyword 
var flag="hey sumit";
var t1=4;
if (t1>3){

    var flag="hey tom";
}
console.log (flag);

//let 
//scope : block scoped 
//{}
let m="hey sumit";
let time= 4;

if (time>3){
    let msg ="hey how are you";
    console.log (msg);
}
//console.log (msg);
console.log(m);

let len=4;
//let len=6; cannot be redelared 
len=5; // can be reinitialized 
console.log(len);
let p;
console.log(p);

//const 

//block scoped 
//cannot be redeclared and cannot be reinitialzed 

const mg= "hey i am sumit";
//mg="hey tom"; // error as cannot be reinitialed 
//const mg=" hey i am tom"; // error as cannot be redeclared
console.log (mg);

//const p; cannot be declared without a value 









