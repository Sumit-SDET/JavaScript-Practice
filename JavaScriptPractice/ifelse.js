function checkage(age){

    if (age>=18){
        console.log("you are old enough to vote");
    }
    else {
        console.log("sorry ! you must be 18 or older to vote");
    }
}

checkage(10);
checkage(30);
checkage(0);

//
function checkNumber(number){

    if (number>0){
        console.log ("its a positive number");
    }
    else if (number<0){
        console.log ("ita a negative number");
    }
    else{
        console.log ("zero number found");
    }
}
checkNumber(10);
checkNumber(-9);
checkNumber(0);

//nested if-else 

    function checkgrade(score){

        let grade;
        if (score>=90){
            grade='A';
        }
        else{

            if (score>=80){

                grade='B';
            }
            else {

                if (score>=70){
                    grade='C';
                }
                else{
                    grade='D';
                }
            }
        }
        console.log(grade);
    }
    checkgrade(95);
    checkgrade(65);
    checkgrade(83);
    checkgrade(78);

    //switch case 
    let browser="chrome";
    if (browser=="chrome"){
        console.log ("launch chrome");
    }
     if (browser=="firefox"){
        console.log ("launch firefox");
    }
     if (browser=="edge"){
        console.log ("launch edge");
    }
    else {
        console.log ("please pass the right browser");
    }

    //above code we cannot use break and it wil excute all if blocks     
    let browser1="firefox";
    if (browser1=="chrome"){
        console.log ("launch chrome");
    }
     else if (browser1=="firefox"){
        console.log ("launch firefox");
    }
    else  if (browser1=="edge"){
        console.log ("launch edge");
    }
    else {
        console.log ("please pass the right browser");
    }
//even if we use elseif it wont solve the problem because it will still check first condition


