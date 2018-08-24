// Business Opening and closing hours   #################################
var today = new Date();
var day = today.getDay();
var time = today.getHours();
var year = today.getFullYear();



function businessStatus(){
if (day == 2){
    console.log("closed");
    $("#businessStatus").html("CLOSED");
    $("#statusDot").addClass("redDot");
    console.log("its closed");
}else if(time == 10){
    $("#businessStatus").html("Opening soon ...");
    $("#statusDot").addClass("orangeDot");
}else if(time == 23){
    $("#businessStatus").html("Closing soon ...");
    $("#statusDot").addClass("orangeDot");
}else if(time > 23 || time < 11 ){
    $("#businessStatus").html("CLOSED");
    $("#statusDot").addClass("redDot"); 
}else{
    $("#businessStatus").html("OPEN");
    $("#statusDot").addClass("greenDot");
    console.log("its open");
}
}

setInterval( function(){
    businessStatus();
}, 2000);


//CopyRight  #############################################################
$("#currentYear").html(year);
