var buttons = document.getElementById('button');
// var timings = document.getElementById("time");

buttons.addEventListener('click', currentTime)

function currentTime(){
var today = new Date();
var day = today.getDay();
var dayList = ["Sunday" , "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log("Today is :" + dayList[day] +".");

var hour = today.getHours();
var minute = today.getMinutes();
var seconds = today.getSeconds();

var prepand = (hour >= 12)? "PM" : "AM";
hour = (hour >= 12)? hour-12:hour;

if(hour === 0 && prepand === "PM"){
    if(minute === 0 && seconds === 0){
        hour = 12;
        prepand = 'Noon';
    }
    else{
        hour = 12;
        prepand = 'PM';
    }
}
if(hour === 0 && prepand === 'AM'){
    if(minute === 0 && seconds === 0){
        hour = 12;
        prepand = 'Midnight';
    }
    else{
        hour = 12;
        prepand = 'AM';
    }
}

 console.log("Current Time :" +hour+prepand+":" + minute+":"+seconds);


}