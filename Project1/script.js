// collect all the left rectangle elements
var leftRec = document.getElementsByClassName('flash-rectangle-left');
var rightRec = document.getElementsByClassName('flash-rectangle-right');
var horizontalRec = document.getElementsByClassName('flash-rectangle-horizontal');

// get window width and height
var winHeight = window.innerHeight;

for ( var i=0; i < leftRec.length; i++ ) {
 	
    var thisLeftRec = leftRec[i];
    
    // get random numbers for each element
    randomTop = getRandomNumber(80, winHeight);
    randomLeft = getRandomNumber(0, 100);
    random = getRandomNumber(0,4);
    
    // update top and left position
    thisLeftRec.style.top = randomTop +"px";
    thisLeftRec.style.left = randomLeft +"px";

    thisLeftRec.style.animation = "flash " + random + "s" + " infinite";
    
}

for ( var i=0; i < rightRec.length; i++ ) {
 	
    var thisRightRec = rightRec[i];
    
    // get random numbers for each element
    randomTop = getRandomNumber(80, winHeight);
    randomRight = getRandomNumber(0, 100);
    random = getRandomNumber(0,4);
    
    // update top and right position
    thisRightRec.style.top = randomTop +"px";
    thisRightRec.style.right = randomRight +"px";

    thisRightRec.style.animation = "flash " + random + "s" + " infinite";
    
}

for ( var i=0; i < horizontalRec.length; i++ ) {
 	
  var thisHorizontalRec = horizontalRec[i];
  
  // get random numbers for each element
  randomTop = getRandomNumber(80, winHeight);
  randomLeft = getRandomNumber(100, 200);
  randomRight = getRandomNumber(100, 200);
  randomWidth = getRandomNumber(100, 400)
  random = getRandomNumber(0,0.2);
  
  // update top and right position
  thisHorizontalRec.style.top = randomTop +"px";
  thisHorizontalRec.style.left = randomLeft +"px";
  thisHorizontalRec.style.right = randomRight +"px";
  thisHorizontalRec.style.width = randomWidth + "px";

  thisHorizontalRec.style.animation = "flash " + random + "s" + " infinite";
  
}

// function that returns a random number between a min and max
function getRandomNumber(min, max) {
    
  return Math.random() * (max - min) + min;
    
}
