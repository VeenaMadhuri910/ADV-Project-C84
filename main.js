canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_height=70;
car1_width=120;
car1_img="download1.jpg"; 
car1_x=10; 
car1_y=10;

car2_height=70; 
car2_width=120;
car2_img="download2.jpg";
car2_x=10;
car2_y=100;
background_img="https://i.postimg.cc/bv5d35nK/racing.jpg";

function add() {
  background_imgtg=new Image(); 
  background_imgtg.onload=uploadBackground();
  background_imgtg.src=background_img;
  
  car1_imgtg=new Image(); 
  car1_imgtg.onload=uploadcar1();
  car1_imgtg.src=car1_img;

  car2_imgtg=new Image();
  car2_imgtg.onload=uploadcar2();
  car2_imgtg.src=car2_img;
} 
function uploadBackground() { 
 ctx.drawImage(background_imgtg,0,0,canvas.width,canvas.height);
}
function uploadcar1() {
  ctx.drawImage(car1_imgtg,car1_x,car1_y,car1_width,car1_height); 
} 
function uploadcar2() {
  ctx.drawImage(car2_imgtg,car2_x,car2_y,car2_width,car2_height); 
} 
window.addEventListener("keydown",my_keydown);
function my_keydown(e) { 
  keypressed=e.keyCode; 
  console.log(keypressed);
  if(keypressed == '38'){
    car1_up();
    console.log("up arrow key"); 
  } 
  if(keypressed == '40'){
    car1_down(); 
    console.log("down arrow key"); 
  } 
  if(keypressed == '37'){
    car1_left(); 
    console.log("left arrow key");
  } 
  if(keypressed == '39'){ 
    car1_right();
    console.log("right arrow key"); 
  } 
  if(keypressed == '87'){
    car2_up();
    console.log("w key");
  }
  if(keypressed == '83'){
    car2_down(); 
    console.log("s key"); 
  }
  if(keypressed == '65'){
    car2_left(); 
    console.log("a key");
  }
  if(keypressed == '68'){ 
    car2_right();
    console.log("d key");
  }
  function car1_up() { 
    if(car1_y >=0) {
      car1_y = car1_y - car1_height;
      console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y); 
      uploadBackground();
      uploadcar1();
      uploadcar2();
    }
  }
  function car1_down() {
    if(car1_y <=500) {
      car1_y =car1_y+ car1_height;
      uploadBackground();
                  uploadcar1();
                  uploadcar2();
                 } 
                }
function car1_left() { 
                  if(car1_x >= 0) {
                        car1_x =car1_x - car1_width;
                           console.log("When left arrow is pressed, x = " + car1_x + " | y = " +car1_y);
                            uploadBackground();
                             uploadcar1();
                             uploadcar2();
                         }
                         }
function car1_right() { 
   if(car1_x <= 700) { 
   car1_x =car1_x + car1_width;
   console.log("When right arrow is pressed, x = " + car1_x + " | y = " + car1_y);
   if(car1_x > 700)
      {
        console.log("Car 1 won!!");
        document.getElementById("game_status").innerHTML = "Car 1 won!!";
      }
   uploadBackground();
   uploadcar1();
   uploadcar2();
 }
}
} 
function car2_up() {
  if(car2_y >=0) {
    car2_y = car2_y - car2_height;
    console.log("When w key is pressed, x = " + car2_x + " | y = " +car2_y);
     uploadBackground();
      uploadcar1();
       uploadcar2();
    }
    } 
    function car2_down() { if(car2_y <=500) {
        car2_y = car2_y + car2_height;
        console.log("When s key is pressed, x = " + car2_x + " | y = " +car2_y);
         uploadBackground();
          uploadcar1();
           uploadcar2();
        }
        } 
        function car2_left() { if(car2_x >=0) {
            car2_x = car2_x - car2_width;
            console.log("When a key is pressed, x = " + car2_x + " | y = " +car2_y);
             uploadBackground();
              uploadcar1();
               uploadcar2();
            }
            } 
            function car2_right() { if(car2_x <=700) {
                car2_x = car2_x + car2_width;
                console.log("When d key is pressed, x = " + car2_x + " | y = " +car2_y);
                 uploadBackground();
                  uploadcar1();
                   uploadcar2();
                }
                } 
