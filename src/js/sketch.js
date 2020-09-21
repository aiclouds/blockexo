function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  
  setTimeout(showTime, 1000);
  
}

showTime();

//Grab day of the week from local computer
let date = new Date();
let dayOfWeekNumber = date.getDay();
let nameOfDay;
let quote;

switch(dayOfWeekNumber){
    case 0: 
        nameOfDay = 'Sunday';
        quote = 'Be strong!';
        break;
    case 1:
        nameOfDay = 'Monday';
        quote = 'Be postitive!';
        break;
    case 2:
        nameOfDay = 'Tuesday';
        quote = 'Taco Tuesday!';
        break;
    case 3:
        nameOfDay = 'Wednesday';
        quote = 'Be happy!';
        break;
    case 4:
        nameOfDay = 'Thursday';
        quote = 'Have fun!';
        break;
    case 5:
        nameOfDay = 'Friday';
        quote = 'The weekend is here!';
        break;
    case 6:
        nameOfDay = 'Saturday';
        quote = 'Time to party!';
        break;

}

//Display the day of the week
let weekdayDiv = document.getElementById('weekday');
weekdayDiv.innerHTML = `${nameOfDay}`;

function handleSubmit() {
  alert('Do your thing...');
}

var dt = new Date();
