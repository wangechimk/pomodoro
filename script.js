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

   // start timer
function start() {
	// change button
	document.getElementById('start').style.display = "none";
	document.getElementById('reset').style.display = "block";
    
	// change the time
	seconds = 59;
    
	let workMinutes = workTime - 1;
	let shortbreakMinutes =workTime -1;
	let longbreakMinutes =workTime -1;

    
	breakCount = 0;
   
// countdown
let timerFunction = () => {
        //change the display
        document.getElementById('minutes').innerHTML = workMinutes;
	document.getElementById('minutes').innerHTML = shortbreakMinutes;
	document.getElementById('minutes').innerHTML = longbreakMinutes;
        document.getElementById('seconds').innerHTML = seconds;

	// start
        seconds = seconds - 1;

        if(seconds === 0) {
            workMinutes = workMinutes - 1;
            if(workMinutes === -1 ){
                if(breakCount % 2 === 0) {
                    // start break
                    workMinutes = longbreakMinutes;
                    breakCount++
		    // start break
                    workMinutes = shortbreakMinutes;
                    breakCount++

                    // change the buttons__block
                    workTittle.classList.remove('active');
                    breakTittle.classList.add('active');
                }else {
                    // continue work
                    workMinutes = workTime;
                    breakCount++

                    // change the buttons__block
                    breakTittle.classList.remove('active');
                    workTittle.classList.add('active');
                }
            }
            seconds = 59;
        }
    }

    // start countdown
    setInterval(timerFunction, 1000); // 1000 = 1s
}