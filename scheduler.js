//////// to Display date in jumbotron /////
//console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

$("#currentDay").text(moment().format("dddd, MMMM Do"));


///to save entries in local storage//

//localStorage.setItem("savebtn")
 $(".saveBtn").on("click",function() {
    
        let dayActivity = $(this).siblings().val();  
        console.log(dayActivity);

    let hour = $(this).parent().attr("id");
    console.log(hour);   
    
    localStorage.setItem(hour, dayActivity);

 });

 $("#hour-9 .time-block").val(localStorage.getItem("hour-9"));
 $("#hour-10 .time-block").val(localStorage.getItem("hour-10"));
 $("#hour-11 .time-block").val(localStorage.getItem("hour-11"));
 $("#hour-12 .time-block").val(localStorage.getItem("hour-12"));
 $("#hour-13 .time-block").val(localStorage.getItem("hour-13"));
 $("#hour-14 .time-block").val(localStorage.getItem("hour-14"));
 $("#hour-15 .time-block").val(localStorage.getItem("hour-15"));
 $("#hour-16 .time-block").val(localStorage.getItem("hour-16"));
 $("#hour-17 .time-block").val(localStorage.getItem("hour-17"));



    function changeColor() {  
    ///to change colors when it's past, present, future///
    let actualTime = moment().format("H:mm:ss a"); 
    console.log(actualTime);
    let parsedVariable = parseInt(actualTime);
    console.log(parsedVariable);
    console.log(typeof parsedVariable);

    let pastTime = "past";
    let presentTime = "present";
    let futureTime = "future";

    
    let now = document.querySelector(".time");
    let parsedVar = parseInt(now);
    console.log(typeof parsedVar);

    let nineAM = "#hour-9";
    let nineSplit = nineAM.split("-");
    console.log(nineSplit);

    let nineNumber = parseInt(nineSplit[1]);
    console.log(nineNumber);

    
    //console.log(nineNumber > parsedVariable);
   
 
//  for (let i = 0; i < parsedVariable; i++) {
//     if (nineNumber < parsedVariable) {
        
//         pastTime = "past";
//         pastTime.attr("class", "past");
//     }
//     console.log(i);
//  };



// themeSwitcher.addEventListener("click", function() {
//   if (mode === "dark") {
//     mode = "light";
//     container.setAttribute("class", "light");
//   }
//   else {
//     mode = "dark";
//     container.setAttribute("class", "dark");
//   }
// // });

