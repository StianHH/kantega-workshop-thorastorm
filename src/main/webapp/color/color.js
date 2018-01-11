window.addEventListener("load", function () {

    // See overview of <video> events and properties:
    // https://www.w3.org/2010/05/video/mediaevents.html

    var video = document.querySelector("video");
    var canvas = document.querySelector("canvas");

    var error = document.querySelector(".error");


    var g = canvas.getContext("2d");


    function animationLoop() {

        g.drawImage(video, 0, 0, canvas.width, canvas.height);
        var imageData = g.getImageData(0, 0, canvas.width, canvas.height);

        var pixelColors = imageData.data;

        // pixelColors is an array of color components: [red, green, blue, alpha, red, green, blue, alpha, ..]
        // So, let's iterate over every 4th component:

        for (var i = 0; i < pixelColors.length; i += 4) {
            //this code "selects" every 4th index in the array. "i" is the index of every selected element. i = 0, 4, 8 etc..

            // Get each color value (0-255)
            var red = pixelColors[i];
            var green = pixelColors[i + 1];
            var blue = pixelColors[i + 2];


            // Calculate the average value  of the color components
            var avg = (red + green + blue) / 3;

            //tip: putting code between /* and */ will make it a comment, commented code will not be executed.
            //This can sometimes be better than deleting the code. Example:

            /*This code will not be executed:
            pixelColors[i] = 0;*/


            // TODO: Replace below with your solution!

            // Make every second (of 5) stripe black / white
            var y = Math.floor(i / 4 / canvas.width);

            if (Math.floor(y / canvas.height * 5) % 2 == 0) {
                //This code is only executed when the statement between the parentheses is true.
                // Set each color to the average ("black & white")
                pixelColors[i] = avg;
                pixelColors[i + 1] = avg;
                pixelColors[i + 2] = avg;
            } else {
                //This code is executed when the above code is not.
            }
        }
        g.putImageData(imageData, 0, 0);

        window.requestAnimationFrame(animationLoop);
    }


    window.navigator.mediaDevices.getUserMedia({video: true, audio: false})
        .then(getUserMediaSuccess)
        .catch(userMediaFailed);


    function getUserMediaSuccess(stream) {
        video.src = window.URL.createObjectURL(stream);
        video.play();
    }

    function userMediaFailed(err) {
        error.innerHTML = "Failed to get user media: " + err.name + " " + err.message;
        error.classList.remove("hide")
    }


    window.requestAnimationFrame(animationLoop);

});