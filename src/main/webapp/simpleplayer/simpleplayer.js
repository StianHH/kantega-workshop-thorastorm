window.addEventListener("load", function () {

    var video = document.querySelector("video");
    var playButton = document.querySelector("#play");
    var pauseButton = document.querySelector("#pause");
    var elapsed = document.querySelector("#elapsed");

    video.addEventListener("timeupdate", function () {
        var currentTime = video.currentTime;
        var totalDuration = video.duration;

        // TODO: Hmmm, how far are we really?
        elapsed.style.marginLeft = 30 + "%";
    });


    playButton.addEventListener("click", function () {
        // TODO: How do we play the video?

        //Makes the pause button visible when play is pressed.
        pauseButton.setAttribute("class", "visible");
    });

    // TODO: Should add similar event listener for pauseButton


});