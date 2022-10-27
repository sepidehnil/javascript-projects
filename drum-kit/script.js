{
    var playingClass ='playing'
    var crashride = document.getElementById('crash-ride');
    var hihattop = document.getElementById('hihat-top');
    
    var animatecrashride = function(){
        crashride.style.transform = 'rotate(0deg) scale(1.5)';
    }
    var animatehihattop = function(){
        hihattop.style.top = '171px';
    }
    var playsound = function(event){
        var keyCode = event.keyCode
        var keyelement = document.querySelector(`div[data-key="${keyCode}"]`)
        if(!keyelement) return;
        
    var audioelement = document.querySelector(`audio[data-key="${keyCode}"]`)
        audioelement.currenttime=0;
        audioelement.play();
    
        switch(keyCode) {
            case 69:
            case 82:
                animatecrashride();
                break;
            case 75:
                animatehihattop();
                break;
        }
        keyelement.classList.add(playingClass);
    };
        var removeanimatecrashride = function(event){
            if(event.propertyName !== 'transform') return;
            event.target.style.transform = 'rotate(-7.2deg) scale(1.5)';
        };
    
        var removeanimatehihattop = function(event){
            if(event.propertyName !== 'top') return;
            event.target.style.top = '166px';
        };
    
      	var removeKeyTransition = function(event){
		       if(event.propertyName !== 'transform') return;
		       event.target.classList.remove(playingClass);
	};

	    var drumKeys = Array.from(document.querySelectorAll('.key'));
	    drumKeys.forEach(key => {
	    key.addEventListener('transitionend',removeKeyTransition);
	});
 crashride.addEventListener('transitionend',removeanimatecrashride);
 hihattop.addEventListener('transitionend',removeanimatehihattop);
 window.addEventListener('keydown',playsound);
}
