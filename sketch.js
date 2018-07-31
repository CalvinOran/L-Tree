var axiom = "F";
var sentence = axiom;
var len = 200;
var angle;
var rules = [];
rules[0] = {
  a: "F",
  b: "FF+[+F-F-F]-[-F+F+F]"
}


function generate() {
  len *= 0.5;
  var nextSentence = "";
  
  for (var i = 0; i < sentence.length; i++){
    
    var current = sentence.charAt(i);
    
    var found = false;
    
    for (var j = 0; j < rules.length; j++){
      
      if (current == rules[j].a) {
        
        found = true;
        
        nextSentence += rules[j].b;
        
        break;
      }
    }
    if (!found){
      nextSentence += current;
    }
  }
  sentence = nextSentence;
  turtle();
}

function turtle() {
  
  translate(width/2,height);
  
  for (var i = 0; i < sentence.length; i++) {
    
    var current = sentence.charAt(i);
    
    switch(current) {
      case "F":
        line(0, 0, 0 ,-len);
        translate(0, -len);
        break;
      
      case "+":
        rotate(angle);
        break;
      
      case "-":
        rotate(-angle);
        break;
        
      case "[":
        push();
        break;
      
      case "]":
        pop();
        break;
    }
    
  }
}

function setup() {
  createCanvas(600,600);
  background(50);
  createP(axiom);
  angle = radians(25);
  turtle();
  var button = createButton('Generate');
  button.mousePressed(generate);
}

function draw() {
  
}