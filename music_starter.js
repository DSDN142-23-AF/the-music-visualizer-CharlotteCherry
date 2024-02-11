
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
  image (testIng, 0,0)

  //ellipse (630,550,100,100); 
 var ballSize = 550;
  var ballSize = map(bass,200,200,10,10);
  ellipse (width/2,bass, ballSize );



  //////////////////////////////////////////////

let SecondRun = true
let eye = {};
function draw_one_frame (vocal,drum,bass,other){
  if (SecondRun){
rectMode(CENTER);
eye.push(loadImage('eyes_0.png'));
eye.push(loadImage('eyes_1.png'));
eye.push(loadImage('eyes_2.png'));

SecondRun = flase 
  }

let VocalFrame = int(map(vocal,0,100,0,2));
concole.log(VocalFrame);
push();
scale();
images(eye[VocalFrame],width/2, height/2);
pop();

}



















  }


  //textFont('Verdana'); // please use CSS safe fonts
  

 // var drumHight = map(drum,0,100,0+ballSize/5,height );
 // var ballSize = map(bass,0,100,40,150);
 // fill (0);

 // ellipse (width/2,drum, ballSize );
////ellipse (500,500,500,500);
//ellipse (200,200,200,200);
//ellipse (400,200,200,100);
  
 //for (var i=1; i <5;  i++  ){
 //var step = i=10;
 // ellipse (step,drum, ballSize );
//ellipse ( )

