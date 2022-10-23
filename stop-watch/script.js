var Interval;
var tens;
var seconds;
var minutes;

function startbutton(){
	clearInterval(Interval);
	Interval = setInterval(startTimer);
	
}
function stopbutton(){
	clearInterval(Interval);

}

function resetbutton(){
	clearInterval(Interval);
    tens = "00";
  	seconds = "00";
  	minutes= "00";
  	document.getElementById('ten').innerHTML=tens;
	document.getElementById('second').innerHTML=seconds;
	document.getElementById('minute').innerHTML=minutes;

}
function startTimer(){
	tens++
	    if(tens<=9){
	     	document.getElementById('ten').innerHTML= "0"+tens
	    }
	    if(tens>9){
		    document.getElementById('ten').innerHTML=tens

	    }
	    if(tens>99){
	    	seconds++;
	    	document.getElementById('second').innerHTML="0"+seconds;
	    	tens=0;
	    	document.getElementById('ten').innerHTML="0"+0;
	    }
	    if (seconds>9) {
	    	document.getElementById('second').innerHTML=seconds
	    }
	    if (seconds>59){
	    	minutes++
	        document.getElementById('minute').innerHTML="0"+minutes
	        seconds=0;
	        document.getElementById('second').innerHTML="0"+0
	        tens=0
	        document.getElementById('ten').innerHTML="0"+0;
	    }
	    if (minutes>9) {
	    	document.getElementById('minute').innerHTML=minutes

	    }
}