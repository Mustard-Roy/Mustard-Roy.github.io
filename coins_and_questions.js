let get_in_car = {
  show: true,
  yesorno: false,
  position: [84, 36],
  question: 'It is 8:15 a.m.\n\nYou get in the car',
  special: [3, 0],
  addnew1: false,
  addnew2: false,
};

let breakfast_delivery = {
  show: false,
  yesorno: false,
  position: [55, 65],
  question: 'Your breakfast is delivered. Have a nice day~',
  special: [0, 0],
  addnew1: get_in_car,
  addnew2: get_in_car,
}

let check_real_time = {
  show: true,
  yesorno: true,
  position: [34, 59],
  question: 'Do you want to check the real-time position of breakfast delivery on the phone',
  special: [1, 1],
  addnew1: breakfast_delivery,
  addnew2: breakfast_delivery,
};

let buy_breakfast = {
  show: true,
  yesorno: false,
  position: [110, 12],
  question: 'Buy the breakfast?',
  special: [0, 0],
  addnew1: get_in_car,
  addnew2: false,
};

let teleport = {
  show: false,
  yesorno: false,
  position: [35, 76],
  question: 'Continue pressing <RIGHT>\n\n(Drive along the raod)',
  special: [5, 0],
  addnew1: false,
  addnew2: false,
};

let google_turn = {
  show: false,
  yesorno: false,
  position: [2, 76],
  question: 'Press <RIGHT>\n\n(Turn left at the corner)',
  special: [0, 0],
  addnew1: teleport,
  addnew2: false,
};

let google_suggest = {
  show: true,
  yesorno: false,
  position: [2, 49],
  question: 'Google recommends a hidden shortcut for you\n\nPress <DOWN>\n(Turn left at the corner)',
  special: [0, 0],
  addnew1: google_turn,
  addnew2: false,
};

let enote = {
  show: true,
  yesorno: true,
  position: [32, 40],
  question: 'Would you prefer to take electronic notes, say, with your iPad, in the class discussion?',
  special: [9, 9],
  addnew1: false,
  addnew2: false,
};

let class_discussion = {
  show: false,
  yesorno: true,
  position: [36, 24],
  question: 'To complet a hard assignment in the class, would you tend to Google it first instead of asking your classmates for help?',
  special: [0, 0],
  addnew1: enote,
  addnew2: enote,
};

let rec_stall = {
  show: true,
  yesorno: false,
  position: [33, 71],
  question: 'Kado\'s Asian Grill\n\nThe only 5 star stall in this area! Have a try!',
  special: [11, 0],
  addnew1: false,
  addnew2: false,
};

let meal = {
  show: true,
  yesorno: true,
  position: [81, 58],
  question: 'So many food stalls!\n\nWould you like to use Yelp for recommendations?',
  special: [0, 10],
  addnew1: rec_stall,
  addnew2: false,
};

let stall1 = {
  show: false,
  yesorno: false,
  position: [74, 71],
  question: 'Azteca Tacos (VEGAN)',
  special: [11, 0],
  addnew1: false,
  addnew2: false,
};

let stall2 = {
  show: false,
  yesorno: false,
  position: [54, 71],
  question: 'Grilled Chicken Sandwich',
  special: [11, 0],
  addnew1: false,
  addnew2: false,
};

let stall3 = {
  show: false,
  yesorno: false,
  position: [33, 71],
  question: 'Kado\'s Asian Grill',
  special: [11, 0],
  addnew1: false,
  addnew2: false,
};

let stall4 = {
  show: false,
  yesorno: false,
  position: [12, 71],
  question: 'ASHAH\'s Halal Food (GLUTEN-FREE)',
  special: [11, 0],
  addnew1: false,
  addnew2: false,
};

let go_home = {
  show: true,
  yesorno: true,
  position: [107, 69],
  question: 'It\'s time to go home.\n\n Do you want to turn on the home air conditioner in advance remotely from your phone?',
  special: [12, 12],
  addnew1: false,
  addnew2: false,
};

let take_photes = {
  show: true,
  yesorno: true,
  position: [13, 51],
  question: 'Would you like to take photos of the food before eating?',
  special: [0, 0],
  addnew1: go_home,
  addnew2: go_home,
};

let mealchosen = {
  show: true,
  yesorno: true,
  position: [34, 58.4],
  question: 'You have chosen your food.\n\nHave you considered about the daily calorie intake?',
  special: [0, 0],
  addnew1: take_photes,
  addnew2: take_photes,
};

let go_to_bed = {
  show: true,
  yesorno: true,
  position: [9, 37],
  question: 'Before going to bed, would you like to watch some videos or read some articles that Apps recommend for you?',
  special: [13, 14],
  addnew1: false,
  addnew2: false,
};

function init_coins_and_questions() {
  coins_and_questions = {
    scene1: [{
      show: true,
      yesorno: false,
      position: [10, 30],
      question: 'It is 7:30 in the morning.\n\nYou get up.',
      special: [0, 0], //special operation for addnew1 or addnew2
      addnew1: false, //add new when yes
      addnew2: false, //add new when no
    }, {
      show: true,
      yesorno: true,
      position: [14, 43],
      question: 'You are so hungry.\n\nDo you want to order breakfast to-go online before getting dressed and washing up?',
      special: [0, 2],
      addnew1: check_real_time,
      addnew2: buy_breakfast,
    }],
    scene2: [{
      show: true,
      yesorno: true,
      position: [73, 14],
      question: 'Do you want to follow the route on Google Map?',
      special: [0, 4],
      addnew1: google_suggest,
      addnew2: false,
    }, {
      show: true,
      yesorno: false,
      position: [112, 72],
      question: 'It is 8:45.\n\nYou arrive at school in time',
      special: [6, 0],
      addnew1: false,
      addnew2: false,
    }],
    scene3: [{
      show: false,
      yesorno: false,
      position: [107, 70],
      question: 'Hurry up!\n\nDon\'t be late!',
      special: [7, 0],
      addnew1: false,
      addnew2: false,
    }, {
      show: true,
      yesorno: false,
      position: [34.4, 18],
      question: 'Ready for the class?',
      special: [8, 0],
      addnew1: false,
      addnew2: false,
    }],
    scene4: [{
      show: true,
      yesorno: true,
      position: [53, 65],
      question: '..VZZZZT..\n\nINSTAGRAM:\n\"Your friends just added to their stories\"\n\n Do you want to check it?',
      special: [0, 0],
      addnew1: false,
      addnew2: false,
    }, {
      show: true,
      yesorno: true,
      position: [24, 13],
      question: 'You took a picture of the beautiful night sky and posted it on FACEBOOK. After an hour, no one gives you a thumbs up.\n\nDo you want to delete it?',
      special: [0, 0],
      addnew1: go_to_bed,
      addnew2: go_to_bed,
    }]
  };
}

class coin {
  constructor(xpos, ypos, frame) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.frame = frame;
  }
  show() {
    switch (this.frame) {
      case 1:
        image(Coin1, this.xpos, this.ypos);
        break;
      case 2:
        image(Coin2, this.xpos, this.ypos);
        break;
      case 3:
        image(Coin3, this.xpos, this.ypos);
        break;
      case 4:
        image(Coin4, this.xpos, this.ypos);
        break;
      case 5:
        image(Coin5, this.xpos, this.ypos);
        break;
      case 6:
        image(Coin6, this.xpos, this.ypos);
        break;
    }
  }
}

function draw_coins() {
  let m = millis() / 1.5;
  m -= floor(m / 1200) * 1200;
  m = floor(m / 100);
  m %= 6;
  let cp = coins_and_questions["scene" + scene_num];
  for (let i = 0; i < cp.length; i++) {
    if (cp[i].show) {
      let c = new coin(cp[i].position[0] * 5, cp[i].position[1] * 5, m + 1);
      c.show();
    }
  }
}

function get_coin() {
  let cp = coins_and_questions["scene" + scene_num];
  for (let i = 0; i < cp.length; i++) {
    let p1;
    if (scene_num == 2) {
      p1 = [car.xpos + 6, car.ypos + 6, car.xpos + 20, car.ypos + 20];
    } else {
      p1 = [cha.xpos + 5, cha.ypos + 10, cha.xpos + 15, cha.ypos + 30];
    }
    let p2 = [cp[i].position[0] * 5, cp[i].position[1] * 5, cp[i].position[0] * 5 + 29, cp[i].position[1] * 5 + 29];
    if (in_rectangle(p1, p2)) {
      coins_and_questions["scene" + scene_num][i].show = false;
      question_mode = true;
      questions(cp[i].question, cp[i].yesorno, i);
      // special = 0;
      if (!question_mode) {
        coins_and_questions["scene" + scene_num].splice(i, 1);
      }
    }
  }
}

let question_choose = 0,
  question_enter;
let end_of_the_day = false;

function questions(txt, yesorno, i) {
  push();
  textFont(myFont);
  fill(0, 200);
  rect(0, 0, width, height);
  textAlign(CENTER);
  fill(255);
  textSize(30);
  text(txt, width / 2 - 210, height / 2 - 150, 420, 500);
  if (yesorno) {
    fill(200, 200);
    textSize(10);
    text("Press    or    to choose\nPress Enter to confirm.", width / 2, height / 2 + 120);
    noStroke();
    triangle(273, 317, 280, 314, 280, 320);
    triangle(307, 317, 300, 314, 300, 320)
    fill(255);
    textSize(15);
    text('Yes', width / 2 - 100, height / 2 + 157);
    text('No', width / 2 + 100, height / 2 + 157);
    pop();
    if (question_choose == 1) {
      push();
      textFont(myFont);
      fill(250);
      noStroke();
      rectMode(CENTER);
      rect(width / 2 - 100, height / 2 + 150, 40, 20);
      fill(0);
      textAlign(CENTER);
      textSize(15);
      text('Yes', width / 2 - 100, height / 2 + 157);
      pop();
      if (question_enter) {
        score++;
        continue_(i, 1);
      }
    } else if (question_choose == 2) {
      push();
      textFont(myFont);
      fill(250);
      noStroke();
      rectMode(CENTER);
      rect(width / 2 + 100, height / 2 + 150, 40, 20);
      fill(0);
      textAlign(CENTER);
      textSize(15);
      text('No', width / 2 + 100, height / 2 + 157);
      pop();
      if (question_enter) {
        continue_(i, 2);
      }
    }
  } else {
    fill(200, 200);
    textSize(10);
    text("Press <Enter> to continue.", width / 2, height / 2 + 120);
    fill(250);
    noStroke();
    rectMode(CENTER);
    rect(width / 2, height / 2 + 150, 70, 20);
    textSize(15);
    fill(0);
    text('Continue', width / 2, height / 2 + 157);
    pop();
    if (question_enter && !end_of_the_day) {
      continue_(i, 1);
    } else if(question_enter && end_of_the_day) {
      END = true;
    }
  }
}

function continue_(i, new1or2) {
  question_mode = false;
  keyCode = 0;
  question_enter = false;
  question_choose = 0;
  let addn;
  if (new1or2 == 1) {
    addn = coins_and_questions["scene" + scene_num][i].addnew1;
    special = coins_and_questions["scene" + scene_num][i].special[0];
  } else if (new1or2 == 2) {
    addn = coins_and_questions["scene" + scene_num][i].addnew2;
    special = coins_and_questions["scene" + scene_num][i].special[1];
  }
  special_start = 0;
  specialpushed = false;
  if (addn) {
    coins_and_questions["scene" + scene_num].push(addn);
  }
}