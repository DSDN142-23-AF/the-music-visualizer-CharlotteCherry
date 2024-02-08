// vocal, drum, bass, and other are volumes ranging from 0 to 100

let firstRun = true
let testImg;

function draw_one_frame(vocal, drum, bass, other) {

  if(firstRun){
    rectMode(CENTER);
    testImg = loadImage('test.png');


    firstRun = false
  }

  background(20);

  image(testImg, drum,80)

}
