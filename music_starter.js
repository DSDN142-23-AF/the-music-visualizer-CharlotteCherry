
// vocal, drum, bass, and other are volumes ranging from 0 to 100  
 
let firstRun = true;
  let testIng;
  
  function draw_one_frame (vocal,drum,bass,other){
  
  if(firstRun){
  //rectmode (CENTER);
  rectMode (CENTER);
  testIng = loadImage ('Background.png');
  
  firstRun=false
  
  }
  
  //background (20);
  image (testIng, 0,0);

  
  fill (0);
  var ball = (50,100);
  ellipse (630,545,bass,ball);
 

var dot = (20,20);
 fill (9,132,113);

 ellipse (340,730,dot);
 ellipse (400,800,dot);
ellipse (500,880,dot);
ellipse (630,884,dot);
ellipse (760,880,dot);
 ellipse (855,800,dot);
 ellipse (910,730,dot);



///////////small eyes 
 let eyelid =  125;
 let eyeheight = map(drum,0,100,1400,1400);
fill (239,157,174);
 stroke (239,157,174);
 ellipse(220,eyeheight,eyelid,drum);
 
 //sideeye
 ellipse (220,1210,125,drum,400);
ellipse (370,1210,125,drum,400);
ellipse (370,1400,125,drum,400);
ellipse (820,1210,125,drum,400);
ellipse (960,1210,125,drum,400);
ellipse (820,1400,125,drum);
ellipse (960,1400,125,drum);
// middle eyes 
 ellipse (520,1110,125,bass,400);
 ellipse (520,1300,125,bass);
 ellipse (670,1110,125,bass,400);
 ellipse (670,1300,125,bass);


ellipse (630,500,825,bass,800);











  }
