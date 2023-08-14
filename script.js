// variables

let workTittle = document.getElementById('work');
let shortbreakTittle = document.getElementById('break');
let longbreakTittle = document.getElementById('break');

let workTime = 25;
let shortbreakTime = 5;
let longbreakTime =10;

let seconds = "00"

// display
window.onload = () => {
	document.getElementById('minutes').innerHTML = workTime;
	document.getElementById('seconds').innerHTML = seconds;
    
	workTittle.classList.add('active');
    }
    