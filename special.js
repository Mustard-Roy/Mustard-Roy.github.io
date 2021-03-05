function special_game() {
  switch (special) {
    case 1:
      staff_comes();
      break;
    case 2:
      breakfast_countdown();
      break;
    case 3:
      car_drive();
      break;
    case 4:
      car_drive_countdown();
      break;
    case 5:
      car_teleport();
      break;
    case 6:
      get_in_school();
      break;
    case 7:
      hurry_up();
      break;
    case 8:
      class_begin();
      break;
    case 9:
      class_over();
      break;
    case 10:
      stalls_ad();
      break;
    case 11:
      meal_chosen();
      break;
    case 12:
      car_drive_home();
      break;
    case 13:
      end1();
      break;
    case 14:
      end2();
      break;
  }
}

let special_start = 0;

function staff_comes() {
  if (!special_start) special_start = millis();
  let step = (millis() - special_start) / 20;
  if ((120 - step) > 60)
    image(Staff, (120 - step) * 5, 64 * 5);
  else
    image(Staff, 60 * 5, 64 * 5);
}

function breakfast_countdown() {
  if (!special_start) special_start = millis();
  let cnt = 10 - int((millis() - special_start) / 1000);
  if (cnt >= 0) {
    push();
    textFont(myFont);
    textAlign(CENTER);
    strokeWeight(4);
    stroke(49, 45, 65);
    fill(49, 45, 65);
    textSize(20);
    text('You have ' + cnt + ' seconds left\nto buy the breakfast\nor you will be late for the class', width / 2 - 1, 30 + 1);
    strokeWeight(1);
    fill(255);
    textSize(20);
    text('You have ' + cnt + ' seconds left\nto buy the breakfast\nor you will be late for the class', width / 2, 30);
    pop();
  } else {
    fail();
  }
}

let car_ypos = 90;

function car_drive() {
  if (cha.xpos > 380) {
    cha.face = 3;
    cha.move(3);
    image(Car, 310, 90);
  } else {
    car_ypos += cha.speed;
    image(Home, 0, 0);
    image(Car, 310, car_ypos);
  }
  if (car_ypos > height) {
    scene_num = 2;
    special = 0;
  }
}

function car_drive_countdown() {
  if (!special_start) special_start = millis();
  let cnt = 16 - int((millis() - special_start) / 1000);
  if (cnt >= 0) {
    push();
    textFont(myFont);
    textAlign(CENTER);
    strokeWeight(4);
    stroke(49, 45, 65);
    fill(49, 45, 65);
    textSize(20);
    text('You have ' + cnt + ' seconds left\nto drive to the school\nor you will be late for the class', width / 2 - 1, 30 + 1);
    strokeWeight(1);
    fill(255);
    textSize(20);
    text('You have ' + cnt + ' seconds left\nto drive to the school\nor you will be late for the class', width / 2, 30);
    pop();
  } else {
    fail();
  }
}

function car_teleport() {
  car.xpos += 25 * 5;
  special = 0;
}

function get_in_school() {
  scene_num = 3;
  special = 0;
  cha.xpos = 535;
  cha.ypos = 345;
}

function hurry_up() {
  if (!special_start) special_start = millis();
  let cnt = 10 - int((millis() - special_start) / 1000);
  if (cnt >= 0) {
    push();
    textFont(myFont);
    textAlign(CENTER);
    strokeWeight(4);
    stroke(49, 45, 65);
    fill(49, 45, 65);
    textSize(20);
    text('You have ' + cnt + ' seconds left\nto make it to the class\nor you will be late', width / 2 - 1, 30 + 1);
    strokeWeight(1);
    fill(255);
    textSize(20);
    text('You have ' + cnt + ' seconds left\nto make it to the class\nor you will be late', width / 2, 30);
    pop();
  } else {
    fail();
  }
}

let ChaSit = false;
let ClassBegin = false;
let specialpushed = false;

function class_begin() {
  if (!special_start) special_start = millis();
  let step = (millis() - special_start) / 20;
  if ((120 - step) >= 43) {
    image(Teacher, (120 - step) * 5, 6 * 5);
    if (cha.xpos <= 34.6 * 5)
      cha.xpos += 1;
  } else {
    cha.face = 1;
    cha.xpos = 34.6 * 5;
    cha.ypos = 20 * 5;
    ChaSit = true;
    ClassBegin = true;
    if (!specialpushed) {
      coins_and_questions["scene" + scene_num].push(class_discussion);
      scene_obstancle["scene" + scene_num].push(35, 30, 58, 30);
      specialpushed = true;
    }
  }
}

function class_over() {
  if (!special_start) special_start = millis();
  let step = (millis() - special_start) / 20;
  let teacher_speak = ['Hey ', 'guys, ', 'today\'s ', 'class ', 'is ', 'over. ', 'Enjoy ', 'your ', 'meal!'];
  let ts = '';
  if (int(step / 10) < 9) {
    for (let i = 0; i < int(step / 10); i++) {
      ts += teacher_speak[i];
    }
    push();
    fill(0);
    rect(47 * 5, 21, ts.length * 5, 13);
    textFont(myFont);
    textAlign(LEFT);
    fill(255);
    textSize(10);
    text(ts, 47 * 5, 30);
    pop();
  } else if (int(step / 10) < 20) {
    for (let i = 0; i < 9; i++) {
      ts += teacher_speak[i];
    }
    push();
    fill(0);
    rect(47 * 5, 21, ts.length * 5, 13);
    textFont(myFont);
    textAlign(LEFT);
    fill(255);
    textSize(10);
    text(ts, 47 * 5, 30);
    pop();
  } else {
    if (!specialpushed) {
      coins_and_questions["scene" + scene_num].push(meal);
      specialpushed = true;
      ClassBegin = false;
    }
  }
}

function stalls_ad() {
  if (!specialpushed) {
    coins_and_questions["scene" + scene_num].push(stall1);
    coins_and_questions["scene" + scene_num].push(stall2);
    coins_and_questions["scene" + scene_num].push(stall3);
    coins_and_questions["scene" + scene_num].push(stall4);
    specialpushed = true;
  }
}

let MealIsChosen = false;

function meal_chosen() {
  if (!MealIsChosen) {
    coins_and_questions["scene" + scene_num].push(mealchosen);
    MealIsChosen = true;
  }
}

let car_ypos2 = 320;

function car_drive_home() {
  if (cha.xpos < 119 * 5) {
    cha.face = 4;
    cha.move(4);
    image(Car, 560, 320);
    image(Stall, 0, 0);
    image(ChaChair, 0, -5);
  } else {
    car_ypos2 += cha.speed;
    image(School, 0, 0);
    image(Car, 560, car_ypos2);
    image(Stall, 0, 0);
    image(ChaChair, 0, -5);
  }
  if (car_ypos2 > height) {
    scene_num = 4;
    special = 0;
  }
}

let endi = 0;

function end1() {
  end_of_the_day = true;
  push();
  if (endi < 255)
    endi += 2;
  fill(0, endi);
  rect(0, 0, width, height);
  pop();
  questions('After scrolling and scrolling the infinite content, you feel sleepy and go to sleep.\n\nEnd of the day.', false);
}

function end2() {
  end_of_the_day = true;
  push();
  if (endi < 255)
    endi += 2;
  fill(0, endi);
  rect(0, 0, width, height);
  pop();
  questions('You check the alarm clock, put off your phone and go to sleep.\n\nEnd of the day.', false);
}