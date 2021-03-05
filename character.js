class character {
  constructor(xpos, ypos) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.speed = 2;
    this.face = 2;
  }
  show() {
    switch (this.face) {
      case 1:
        image(Cha1, this.xpos, this.ypos); //Back
        break;
      case 2:
        image(Cha2, this.xpos, this.ypos); //Front
        break;
      case 3:
        image(Cha3, this.xpos, this.ypos); //Left
        break;
      case 4:
        image(Cha4, this.xpos, this.ypos); //Right
        break;
    }
  }
  move(i) {
    switch (i) {
      case 1:
        this.ypos -= this.speed;
        break;
      case 2:
        this.ypos += this.speed;
        break;
      case 3:
        this.xpos -= this.speed;
        break;
      case 4:
        this.xpos += this.speed;
        break;
    }
  }
}

function move_character() {
  if (!question_mode) {
    if (keyIsDown(UP_ARROW)) {
      cha.face = 1;
      if (no_obstacle(cha))
        cha.move(1);
    }
    if (keyIsDown(DOWN_ARROW)) {
      cha.face = 2;
      if (no_obstacle(cha))
        cha.move(2);
    }
    if (keyIsDown(LEFT_ARROW)) {
      cha.face = 3;
      if (no_obstacle(cha))
        cha.move(3);
    }
    if (keyIsDown(RIGHT_ARROW)) {
      cha.face = 4;
      if (no_obstacle(cha))
        cha.move(4);
    }
  }
}