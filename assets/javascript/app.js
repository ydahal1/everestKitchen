// Business Opening and closing hours
var today = new Date();
var day = today.getDay();
var time = today.getHours();
var year = today.getFullYear();


function businessStatus(){
if (day == 2 || time > 23 || time < 11 ){
    console.log("closed");
    $("#businessStatus").html("CLOSED NOW");
    $("#statusDot").addClass("redDot");
    console.log("its closed");
}else{
    $("#businessStatus").html("CURRENTLY OPEN");
    $("#statusDot").addClass("greenDot");
    console.log("its open");
}
}

setInterval( function(){
    businessStatus();
}, 2000);


//CopyRight 
$("#currentYear").html(year);