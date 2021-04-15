var gs = gs || {}; 
gs.video = document.getElementById('video');
gs.videoAction = document.getElementById('video-action');
gs.videoIsAutoPlaying;

window.onload = function(){
    //MAILCHIMP
    mailchimpInit()
    //COUNTDOWN
    countdownInit();

    //VIDEO
    setTimeout(() => {
        gs.video.paused ? gs.videoAction.innerHTML = "play" : gs.videoAction.innerHTML = "unmute" ;
        gs.video.paused ? gs.videoIsAutoPlaying = false : gs.videoIsAutoPlaying = true;
    }, 300);

    gs.videoAction.onclick = function(){
        if(gs.videoIsAutoPlaying) {
            gs.video.muted ? gs.video.muted = false : gs.video.muted = true;
            gs.video.muted ? gs.videoAction.innerHTML = "unmute" :  gs.videoAction.innerHTML = "mute";
        } else {
            gs.video.muted = !video.muted;
            gs.video.paused ? gs.video.play() : gs.video.pause();
            gs.video.paused ? gs.videoAction.innerHTML = "play" :  gs.videoAction.innerHTML = "pause";
        }
    }
}

function countdownInit() {
    var countDownDate = new Date("Apr 16, 2021 10:00:00").getTime();

    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        var dayText = days != 1 ? " days " : " day ";
        var hoursText = hours != 1 ? " hours " : " hour ";
        var minsText = minutes != 1 ? " mins " : " min ";
        
        if(days < 0) { days = 0 };
        if(hours < 0) { hours = 0 };
        if(minutes < 0) { minutes = 0 };

        document.getElementById("countdown").innerHTML = '<div class="block">' + '<div class="time">' + days +  '</div>' + dayText + '</div>' + '<div class="block">' + '<div class="time">' + hours  + '</div>' + hoursText + '</div>' + '<div class="block">' + '<div class="time">' + minutes  + '</div>' + minsText + '</div>';
    
    }, 100);
}