window.addEventListener("load", function () {

    // See overview of <video> events and properties:
    // https://www.w3.org/2010/05/video/mediaevents.html

    var canvas = document.querySelector("canvas");
    var panda = document.querySelector("#panda");

    var g = canvas.getContext("2d");

    function drawSadPanda() {
        drawPandaImage();

        drawWhiteBackground();

        drawMouth();

        drawHat();
    }

    function drawPandaImage() {
        g.drawImage(panda, 0, 0, canvas.width, canvas.height);
    }


    function drawWhiteBackground() {
        g.fillStyle = "white";
        g.beginPath();
        g.arc(250, 165, 30, 0, 0.9 * Math.PI);
        g.fill();
    }

    function drawMouth() {
        g.lineWidth = 2;
        g.beginPath();
        //TODO: Make the panda smile, tip: .arc(x, y, radius, startAngle, endAngle)
        g.arc(255, 195, 20, 1.1 * Math.PI, 1.8 * Math.PI);
        //TODO: Set mouth color
        g.stroke();
    }


    function drawHat() {
        g.fillStyle = "yellow";
        g.beginPath();
        //TODO: Make the hat sit on top of the panda's head.
        g.moveTo(100, 100);
        g.lineTo(0, 50);
        g.lineTo(100, 0);
        g.fill();
        g.strokeStyle = "green";
        g.stroke()
    }


    drawSadPanda();


});