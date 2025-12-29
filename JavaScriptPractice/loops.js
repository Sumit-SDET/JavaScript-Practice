console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);

//use of loops to avoid repetitive code
//for loop
for (let i=1; i<=10; i++) {
    console.log(i);
}

console.log("................");

// for ... of loop:
const array= [1,2,3,4,5] // index 0 to 4
for (const e of array) {
    console.log(e);
}

//
console.log("................");
for (let i=0; i<array.length; i++){
    console.log(array[i]);
}
console.log("................");
//while loop 
let p=1;
while (p<=10){
    console.log(p);
    p++;
}
console.log("................");
let l=2;
while(l<=10){
    console.log(l);// 2, 4, 6, 8, 10
    l=l+2;
}
console.log("................");
// do while loop
let h=1;

do{
    console.log(h);
    h++;
}
while(h<=10);

console.log("................");

//break
// 1 to 100. print hi when you see multiplication of 5 and break;

let num =1;
while (num<=100){
    console.log(num);
    if (num % 5==0){
        console.log("hi---bye");
        break;
    }
    num++;
}
console.log("................");
//
const browser=["chrome", "firefox", "edge", "IE"];
for (const e of browser){
    if (e=="firefox"){
        console.log ("launch firebox")
        break;
    }
}

console.log("................");

// for of loop on the object 

const user ={

    name: "sumit",
    age: 35 ,
    city: "Patna" 
}

for (const key in user){
console.log( key + ":" + user[key]);
}

console.log("................");
//
const br=["chrome", "firefox", "edge", "IE"];
for (const ele in br){
    console.log (ele+ ":" + br[ele]);

}








