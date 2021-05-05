
function LogoGenerator(text){
//    alert(text);
//    var text = document.getElementsByName("input_text").value;
    var canvas = document.getElementById("myCanvas");
    canvas.width = window.innerWidth; //document.width is obsolete
    canvas.height = window.innerHeight*0.9; //document.height is obsolete
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;
    var ctx = canvas.getContext("2d");
    var canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    function drawCircle() {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(Math.random()*canvas.width, Math.random()*canvas.height, 5, 0, 2 * Math.PI);
        ctx.fill();
    }
    for (var i = 1; i < 3; i++)
        window.clearInterval(i);

    window.setInterval(function(){
      drawCircle();
    }, 500 / 1); // 25 times per second

    drawCircle();
}

