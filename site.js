//const check=alert("The file is linked successsfully!")

const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const welcome=document.querySelector('#welcome');

 if(isMorning){

     welcome.textContent="It is Morning"
 }
  else if(isAfternoon){

     welcome.textContent="It is Afternoon"
 }
 else if(isEvening){

     welcome.textContent="It is Evening"
 }
