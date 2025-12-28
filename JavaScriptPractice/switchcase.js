function checkDayoftheweek(daynumber){

    let day;

    switch (daynumber) {
        case 0:
            day="Sunday";
            
            break;
            case 1:
            day="Monday";
            
            break;
            case 2:
            day="Tuesday";
            
            break;
            case 3:
            day="Wednesday";
            
            break;
            case 4:
            day="Thursday";
            
            break;
            case 5:
            day="Friday";
            
            break;
            case 6:
            day="Saturday";
            
            break;
    
        default:
            console.log (" invalid day");
            break;
    }
    return day;
}

console.log(checkDayoftheweek(0));
console.log(checkDayoftheweek(5));
console.log(checkDayoftheweek(12));
//browser handling with switch case 
let browser="chrome";

switch (browser) {
    case "chrome":
        console.log("launch chrome browser");
        
        break;
     case "firefox":
        console.log("launch firefox browser");
        
        break;
        case "edge":
        console.log("launch edge browser");
        
        break;
    default:
        console.log ("Please pass the right browser" + browser);
        break;
}
//Scenarios to use switch in Test Automation
//multi env - Dev, QA, Stage , UAT , Prod 
//multi user : admin, customer , seller , distributor , category manager 
