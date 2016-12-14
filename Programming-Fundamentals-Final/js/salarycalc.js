
alert("Helo, lets calculate your paycheck this week")


// Pacheck calculate function
function paycheck(){
  var employeeType = Number(prompt("Press 1 if you are a full-time employee or 2 if you are a part-time employee"));

  // Make sure user enter's the correct number
  while(employeeType !== 1 && employeeType !==2 ){
    alert("Please enter a valid number")
    var employeeType = Number(prompt("Press 1 if you are a full-time employee or 2 if you are a part-time employee"));
  }

  // set base hourly pay for part time worker vs full time worker
  if(employeeType === 1){
    basePay = 14;
  }else if (employeeType === 2){
    basePay = 12;
  }

  var shiftType = Number(prompt("Press 1 if you work days or press 2 if you work nights"));

  // Make sure user enter's the correct number
  while(shiftType !== 1 && shiftType !== 2){
   alert("Please enter a valid number")
  var shiftType = Number(prompt("Press 1 if you work days or press 2 if you work nights"));
  }

  if (shiftType === 2){
      basePay = basePay + 2;
  }

  // prompt for total hours
  var totalHours = -1;

  while(totalHours < 0){
    var totalHours = Number(prompt("How many hours did you work this week"));
  }

  // If total hours are 0
  if (totalHours === 0){
    document.write("You did not work this week and will not be paid.  <br>" )
  }

  // Prompt for weekend hours and making sure weekend hours can't be more than total hours
  var weekendHours = Number(prompt("How many hours were on the weekend?"));
  if(weekendHours > totalHours){
    alert("The number of weekend hours cannot be more than the total number of hours");
    var weekendHours = Number(prompt("How many hours were on the weekend?"));
  }

  // Calculate total hours , base hours, weekend hours, and overtime hours
  // basehours are the hours during the weekdays, otHours are the hours during overtime
  // * weekendHours and baseHours are not the same.*
  var otHours = "";
  var baseHours = "";


  if(totalHours > 40){
    otHours = Number(totalHours - 40);
    baseHours = Number(totalHours - weekendHours - otHours);
      if(baseHours < 0){
        baseHours = 0;
      }
  }else if (totalHours < 40){
    baseHours = Number(totalHours - weekendHours);
    otHours = 0;
  }else if (totalHours = 40){
    otHours = 0;
    baseHours = Number(totalHours - weekendHours);
  }

  // pay rates
  var otPay = (1.5 * basePay);
  var weekendPay = basePay + 2.5;

  // weekley paycheck calculation
  var check = (baseHours * basePay) + (otHours * otPay) +
              (weekendHours * weekendPay);

  // Display for user
  document.write("base pay = $" + basePay + ".00" + "<br>");
  document.write("total hours: " + totalHours + "<br>");
  document.write("weekend hours = " + weekendHours + "<br>");
  document.write("base hours = " + baseHours +"<br>");
  document.write("over time hours = " + otHours + "<br>");
  document.write("weekend pay rate = $" + weekendPay + ".00 an hour<br>");
  document.write("overtime payrate = $" + otPay + ".00 an hour<br>");
  document.write("week paycheck = " + check + "<br>");
}

paycheck();
