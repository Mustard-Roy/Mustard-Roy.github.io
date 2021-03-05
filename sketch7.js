//Designed by Haoshu Yang
function preload() {
  Home = loadImage('assets/images/home bg.png');
  Car = loadImage('assets/images/car.png');
  Car1 = loadImage('assets/images/small car1.png');
  Car2 = loadImage('assets/images/small car2.png');
  Car3 = loadImage('assets/images/small car3.png');
  Car4 = loadImage('assets/images/small car4.png');
  Cha1 = loadImage('assets/images/cha back.png');
  Cha2 = loadImage('assets/images/cha front.png');
  Cha3 = loadImage('assets/images/cha left.png');
  Cha4 = loadImage('assets/images/cha right.png');
  Staff = loadImage('assets/images/staff.png');
  Coin1 = loadImage('assets/images/coin1.png');
  Coin2 = loadImage('assets/images/coin2.png');
  Coin3 = loadImage('assets/images/coin3.png');
  Coin4 = loadImage('assets/images/coin4.png');
  Coin5 = loadImage('assets/images/coin5.png');
  Coin6 = loadImage('assets/images/coin6.png');
  MainRoad = loadImage('assets/images/main road.png');
  RoadBlock = loadImage('assets/images/roadrepair.png');
  RoadHouse = loadImage('assets/images/house.png');
  RoadTrees = loadImage('assets/images/trees.png');
  HiRoad = loadImage('assets/images/hidden road.png');
  HiTrees = loadImage('assets/images/hidden trees.png');
  RoadFront = loadImage('assets/images/housefront.png');
  School = loadImage('assets/images/school bg.png');
  ChaChair = loadImage('assets/images/char chair.png');
  Stall = loadImage('assets/images/stalls.png');
  PPT = loadImage('assets/images/PPT.png');
  Teacher = loadImage('assets/images/teacher.png');
  Home2 = loadImage('assets/images/home night bg.png');
  Cloud1 = loadImage('assets/images/Clouds/Cloud1.png');
  Cloud2 = loadImage('assets/images/Clouds/Cloud2.png');
  Cloud3 = loadImage('assets/images/Clouds/Cloud3.png');
  Cloud4 = loadImage('assets/images/Clouds/Cloud4.png');
  Cloud5 = loadImage('assets/images/Clouds/Cloud5.png');
  Cloud6 = loadImage('assets/images/Clouds/Cloud6.png');
  Cloud7 = loadImage('assets/images/Clouds/Cloud7.png');
  Cloud1n = loadImage('assets/images/Clouds/Cloud1Night.png');
  Cloud2n = loadImage('assets/images/Clouds/Cloud2Night.png');
  Cloud3n = loadImage('assets/images/Clouds/Cloud3Night.png');
  Cloud4n = loadImage('assets/images/Clouds/Cloud4Night.png');
  Cloud5n = loadImage('assets/images/Clouds/Cloud5Night.png');
  Cloud6n = loadImage('assets/images/Clouds/Cloud6Night.png');
  Cloud7n = loadImage('assets/images/Clouds/Cloud7Night.png');
  myFont = loadFont('assets/fonts/fixedsys-ligatures.ttf');
}

let START = true;
let END = false;
let scene_num;
let question_mode = false;
let fail_mode = false;
let score = 0;
let special = 0;
let coins_and_questions;
let set2up = true;
let car_ypos3 = -165;
let drive2home = true;

function setup() {
  createCanvas(600, 400);
  cha = new character(width / 2 - 25 / 2, height / 2 + 125);

  let cld = [Cloud1, Cloud2, Cloud3, Cloud4, Cloud5, Cloud6, Cloud7];
  for (let i = 0; i < 3; i++) {
    let new_cloud = new Clouds(int(random(width / 2 - (i + 1) * 100, width / 2 - i * 100)), int(random(20, height / 2)), cld[i]);
    clouds.push(new_cloud);
  }
  for (let i = 3; i < 6; i++) {
    let new_cloud = new Clouds(int(random(width / 2 + (i - 3) * 100, width / 2 + (i - 2) * 100)), int(random(20, height / 2)), cld[i]);
    clouds.push(new_cloud);
  }
  clouds.push(new Clouds(500, 30, cld[6]));

  scene_num = 1;
  init_coins_and_questions();
}

function setup2() {
  car = new car2(360, 1);
}

function draw_background() {
  switch (scene_num) {
    case 1:
      image(Home, 0, 0);
      image(Car, 310, 90);
      break;
    case 2:
      if (set2up) {
        setup2();
        set2up = false;
      }
      background(200);
      image(HiRoad, 0, 0);
      image(MainRoad, 0, 0);
      image(RoadBlock, 0, 0);
      image(RoadHouse, 0, 0);
      image(RoadTrees, 0, 0);
      break;
    case 3:
      image(School, 0, 0);
      image(Car, 560, 320);
      break;
    case 4:
      image(Home2, 0, 0);
      break;
  }
  // textSize(10);
  // text(score, 20, 20);
}

function draw() {
  if (START) {
    background('rgba(189, 228, 249, 0.2)');
    for (let i = 0; i < 7; i++) {
      clouds[i].show();
      clouds[i].change();
    }
    push();
    textFont(myFont);
    textAlign(CENTER);
    strokeWeight(8);
    stroke(49, 45, 65);
    fill(49, 45, 65);
    textSize(80);
    text('A Day\nwith Tech', width / 2 - 2, height / 2 - 97);
    strokeWeight(1);
    fill(255);
    textSize(80);
    text('A Day\nwith Tech', width / 2, height / 2 - 100);
    pop();

    push();
    textFont(myFont);
    textAlign(CENTER);
    textSize(15);
    text('PS. Please make sure to collect every coin you see.\n\nPress <ENTER> and have a try!', width / 2, height / 2 + 60);
    pop();

    cha.show();
    cha.face = int(millis() / 1000) % 4 + 1;

  } else if (END) {
    background('rgba(32, 32, 35, 1)');
    for (let i = 0; i < 7; i++) {
      clouds[i].show();
      clouds[i].change();
    }
    push();
    textFont(myFont);
    textAlign(CENTER);
    strokeWeight(8);
    stroke(49, 45, 65);
    fill(49, 45, 65);
    textSize(80);
    text('A Day\nwith Tech', width / 2 - 2, height / 2 - 97);
    strokeWeight(1);
    fill(255);
    textSize(80);
    text('A Day\nwith Tech', width / 2, height / 2 - 100);
    pop();

    push();
    fill(255);
    textFont(myFont);
    textAlign(CENTER);
    textSize(15);
    text('Your total score is '+score, width / 2, height / 2 + 60);
    if(score>=0 && score<=1)
      text("Great! You're extremely unlikely to\nget tech anxiety.",width / 2, height / 2 + 100);
    else if(score>=2 && score<=3)
      text("Well... You're unlikely to\nget tech anxiety.",width / 2, height / 2 + 100);
    else if(score>=4 && score<=5)
      text("Fine. You might be\ntech-anxious unconscious.",width / 2, height / 2 + 100);
    else if(score>=6 && score<=7)
      text("Umm... You might be\nlightly tech-anxious.",width / 2, height / 2 + 100);
    else if(score>=8 && score<=9)
      text("Watch out! You might be\nheavily dependent on technology.",width / 2, height / 2 + 100);
    else if(score>=10)
      text("OOF! You're definitely\na Tech Addict!",width / 2, height / 2 + 100);
    pop();
  } else {
    draw_background();
    switch (scene_num) {
      case 1:
        cha.show();
        move_character();
        break;
      case 2:
        car.show();
        move_car();
        image(RoadFront, 0, 0);
        image(HiTrees, 0, 0);
        break;
      case 3:
        if (ClassBegin) {
          image(Teacher, 43 * 5, 6 * 5);
          image(PPT, 0, 0);
        }
        cha.show();
        move_character();
        image(Stall, 0, 0);
        if (!ChaSit)
          image(ChaChair, 0, 0);
        else
          image(ChaChair, 0, -5);
        break;
      case 4:
        if (car_ypos3 < 90 && drive2home) {
          car_ypos3 += cha.speed;
          image(Car, 310, car_ypos3);
          cha.xpos = 72 * 5;
          cha.ypos = 34 * 5;
          cha.face = 4;
        } else if (cha.xpos <= 83 * 5 && drive2home) {
          cha.xpos += cha.speed;
          cha.show();
          image(Car, 310, 90);
        } else {
          drive2home = false;
          image(Car, 310, 90);
          cha.show();
          move_character();
        }
        break;
    }
    draw_coins();
    if (special) {
      special_game();
    }
    if (set2up) {
      setup2();
      set2up = false;
    }
    get_coin();
  }
}

function in_rectangle(p1, p2) {
  let x1 = p1[0];
  let y1 = p1[1];
  let x2 = p1[2];
  let y2 = p1[3];

  let x_min = p2[0];
  let y_min = p2[1];
  let x_max = p2[2];
  let y_max = p2[3];
  // check whether the two rectangles intersect
  let zx = abs(x1 + x2 - x_min - x_max);
  let x = abs(x1 - x2) + abs(x_min - x_max);
  let zy = abs(y1 + y2 - y_min - y_max);
  let y = abs(y1 - y2) + abs(y_min - y_max);
  if (zx <= x && zy <= y)
    return true;
  else
    return false;
}

function fail() {
  push();
  textFont(myFont);
  fill(0, 200);
  rect(0, 0, width, height);
  textAlign(CENTER);
  fill(255);
  textSize(30);
  text('Failed', width / 2 - 210, height / 2 - 150, 420, 500);
  fill(200, 200);
  textSize(10);
  text("Press Enter to restart.", width / 2, height / 2 + 120);
  fill(250);
  noStroke();
  rectMode(CENTER);
  rect(width / 2, height / 2 + 150, 70, 20);
  textSize(15);
  fill(0);
  text('Restart', width / 2, height / 2 + 157);
  fail_mode = true;
  pop();
}


function keyPressed() {
  if (START) {
    if (keyCode == ENTER) {
      START = false;
      cha.xpos = 50;
      cha.ypos = 150;
    }
  }
  if (end_of_the_day) {
    if (keyCode == ENTER) {
      END = true;
        let cld = [Cloud1n, Cloud2n, Cloud3n, Cloud4n, Cloud5n, Cloud6n, Cloud7n];
      for (let i = 0; i < 7; i++) {
        clouds[i].img = cld[i];
      }
    }
  }
  if (question_mode) {
    if (keyCode == LEFT_ARROW) {
      question_enter = false;
      question_choose = 1;
    } else if (keyCode == RIGHT_ARROW) {
      question_enter = false;
      question_choose = 2;
    } else if (keyCode == ENTER) {
      question_enter = true;
    }
  }
  if (fail_mode) {
    if (keyCode == ENTER) {
      restart();
    }
  }
}

function restart() {
  question_mode = false;
  fail_mode = false;
  score = 0;
  special = 0;
  cha = new character(50, 150);
  scene_num = 1;
  init_coins_and_questions();
}