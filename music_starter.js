
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
  
  background (20);
  image (testIng, 0,0);

  
  



///////////small eyes 
 let eyelid =  125;
 let eyeheight = map(drum,0,100,1400,1400);
fill (239,157,174);
 stroke (239,157,174);
 ellipse(220,eyeheight,eyelid,drum);
 
 //sideeye
 ellipse (230,1210,125,drum,400);
ellipse (370,1210,125,drum,400);
ellipse (370,1400,125,drum,400);

ellipse (830,1210,125,drum);
ellipse (960,1210,125,drum);
ellipse (830,1400,125,drum);
ellipse (960,1400,125,drum);

ellipse (370,1015,125,bass);
ellipse (230,1015,125,bass);
ellipse (370,830,125,bass);
ellipse (230,830,125,bass);

ellipse (370,645,125,drum);
ellipse (230,645,125,drum);
ellipse (370,455,125,drum);
ellipse (230,455,125,drum);

ellipse (830,1015,125,bass);
ellipse (960,1015,125,bass);
ellipse (830,830,125,bass);
ellipse (960,830,125,bass);

ellipse (830,645,125,drum);
ellipse (960,645,125,drum);
ellipse (830,455,125,drum);
ellipse (960,455,125,drum);



// middle eyes 
 ellipse (520,1110,125,bass);
 ellipse (520,1300,125,bass);
 ellipse (670,1110,125,bass);
 ellipse (670,1300,125,bass);

ellipse (520,930,125,drum);
ellipse (660,930,125,drum);
ellipse (520,740,125,drum);
ellipse (660,740,125,drum);

ellipse (520,545,125,bass);
 ellipse (520,354,125,bass);
 ellipse (670,545,125,bass);
 ellipse (670,354,125,bass);







  }
