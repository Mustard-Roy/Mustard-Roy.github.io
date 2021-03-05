class car2 {
  constructor(xpos, ypos) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.speed = 2;
    this.rot = 10;
    this.face = 2;
  }
  show() {
    switch (this.face) {
      case 1:
        image(Car1, this.xpos, this.ypos);
        break;
      case 2:
        image(Car2, this.xpos, this.ypos);
        break;
      case 3:
        image(Car3, this.xpos, this.ypos);
        break;
      case 4:
        image(Car4, this.xpos, this.ypos);
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

function move_car() {
  if (!question_mode) {
    if (keyIsDown(UP_ARROW)) {
      car.face = 1;
      if (no_obstacle(car))
        car.move(1);
    }
    if (keyIsDown(DOWN_ARROW)) {
      car.face = 2;
      if (no_obstacle(car))
        car.move(2);
    }
    if (keyIsDown(LEFT_ARROW)) {
      car.face = 3;
      if (no_obstacle(car))
        car.move(3);
    }
    if (keyIsDown(RIGHT_ARROW)) {
      car.face = 4;
      if (no_obstacle(car))
        car.move(4);
    }
  }
}