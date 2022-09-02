

    var startTime = new Date().getTime();

    function getRandomColour() { // gets random colour for the shape
        var letters = '0123456789ABCDEF';

        var colour = '#';

        for (var i = 0; i < 6; i++) {

            colour += letters[Math.floor(Math.random() * 16)];

        }
        return colour;
    }



    function makeShapeAppear(){ // creates random shape of different sizes and colours
        var left = Math.random() * 800;

        var top = Math.random() * 400;

        var size = (Math.random() * 200) + 100;

        if (Math.random() > 0.5) {  // 50% chance that shape is a circle

            document.getElementById("shape").style.borderRadius = "100%";

        } else {
            
            document.getElementById("shape").style.borderRadius = "0%";

        }
        document.getElementById("shape").style.left = left + "px";

        document.getElementById("shape").style.top = top + "px";
        
        document.getElementById("shape").style.width = size + "px";

        document.getElementById("shape").style.height = size + "px";

        document.getElementById("shape").style.backgroundColor = getRandomColour();

        document.getElementById("shape").style.display = "block";

        startTime = new Date().getTime();
    }

    function anotherShape() {  // creates another shape after certain amount of time (1500ms)
        setTimeout(makeShapeAppear, Math.random() * 1500);
    }


    function setGame() {

    anotherShape();

    var record = 5;

    document.getElementById("shape").onclick = function(){

    document.getElementById("shape").style.display = "none";  // when shape is clicked it disappears
    

    var endTime = new Date().getTime();

    var time = (endTime - startTime) / 1000;

    document.getElementById("timeTaken").innerHTML = time + "s  ";

    while (time<record) {

         record = time;

    document.getElementById("record").innerHTML = record + "s  ";

    }
    
    anotherShape();

        }

    }

    
setGame();



