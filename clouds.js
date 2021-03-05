let clouds = [];

class Clouds {
  constructor(xpos, ypos, img) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.img = img;
  }
  show() {
    image(this.img, this.xpos, this.ypos);
  }
  change() {
    let next_xpos = this.xpos + random([-1, 1]);
    let next_ypos = this.ypos + random([-1, 1]);
    if (next_xpos > -20 && next_xpos < width) this.xpos = next_xpos;
    if (next_ypos > 0 && next_ypos < height/2) this.ypos = next_ypos;
  }
}