/* For Loop Visualization Designed and Coded by Roy Yang */
/* v 1.0 */
/*all the fowllowing values is based on 1920*1080*/
let gap = 20;
let titleSize = 40;
let conSize = 18;
let codeSize = 30;
let visSize = 15;
let drawL = 40;
let drawGap = 13;
let visW = 103 + 30; //animated visualizer text box width, 103+10
let visH = 51; //animated visualizer text box height

let xc;
let yc;

let sY, sX, eY, eX, pY, pX;

let startAnime = false;
let speed;
let nextT;
let xx, yy;
let newY = true;
let beginning = true;
let reachEndY = false;
let newX = true;

function setup() {
  createCanvas(1920, 1080);
  background(248);

  buttonAnime = createButton("▶ Play Animation");
  buttonAnime.class("button1");
  buttonAnime.position(400, 850);
  buttonAnime.mouseReleased(function () {
    nextT = millis() / 1000;
    DrawCanvasBlock();
    xx = sX;
    yy = sY;
    startAnime = true;
    beginning = true;
    newY = true;
    reachEndY = false;
  });

  buttonStopAnime = createButton("■ Stop Animation");
  buttonStopAnime.class("button1");
  buttonStopAnime.position(400, 850);
  buttonStopAnime.hide();
  buttonStopAnime.mouseReleased(function () {
    ChangeSel();
  });

  speedTune = createSlider(0.2, 20, 8, 0.2);
  speedTune.position(534, 813);
  speedTune.class("slider1");

  /*y starts from*/
  selStartY = createSelect();
  selStartY.class("select-SeaGreen");
  selStartY.position(139, 175);
  for (let i = 0; i < 10; i++) selStartY.option(i);
  selStartY.changed(function () {
    sY = int(selStartY.value());
    ChangeSel();
  });
  sY = int(selStartY.value());

  /*y is smaller than*/
  selEndY = createSelect();
  selEndY.class("select-Crimson");
  selEndY.position(262, 272);
  for (let i = 0; i <= 10; i++) selEndY.option(i);
  selEndY.value(10);
  selEndY.changed(function () {
    eY = int(selEndY.value());
    ChangeSel();
  });
  eY = int(selEndY.value());

  /*Draw*/
  selDraw = createSelect();
  selDraw.class("select-DarkBlue");
  selDraw.position(148, 354);
  selDraw.option("square(s)");
  selDraw.option("circle(s)");
  selDraw.changed(ChangeSel);

  /*y increases by*/
  selPlusY = createSelect();
  selPlusY.class("select-DodgerBlue");
  selPlusY.position(168, 472);
  for (let i = 1; i < 10; i++) selPlusY.option(i);
  selPlusY.value(1);
  selPlusY.changed(function () {
    pY = int(selPlusY.value());
    ChangeSel();
  });
  pY = int(selPlusY.value());

  /*x starts from*/
  selStartX = createSelect();
  selStartX.class("select-SeaGreen");
  selStartX.position(599, 354);
  for (let i = 0; i < 10; i++) selStartX.option(i);
  selStartX.changed(function () {
    sX = int(selStartX.value());
    ChangeSel();
  });
  sX = int(selStartX.value());

  /*x is smaller than*/
  selEndX = createSelect();
  selEndX.class("select-Crimson");
  selEndX.position(722, 472);
  for (let i = 0; i <= 10; i++) selEndX.option(i);
  selEndX.value(10);
  selEndX.changed(function () {
    eX = int(selEndX.value());
    ChangeSel();
  });
  eX = int(selEndX.value());

  /*x increases by*/
  selPlusX = createSelect();
  selPlusX.class("select-DodgerBlue");
  selPlusX.position(628, 666);
  for (let i = 1; i < 10; i++) selPlusX.option(i);
  selPlusX.value(1);
  selPlusX.changed(function () {
    pX = int(selPlusX.value());
    ChangeSel();
  });
  pX = int(selPlusX.value());

  ChangeSel();

  nextT = 1;
  xx = sX;
  yy = sY;

  xc = width / 2 + 1.5 * gap;
  yc = gap * 3 + titleSize + codeSize;
}

function DrawAnime() {
  /*DrawSquares_Anime*/
  if (startAnime) {
    buttonStopAnime.show();
    buttonAnime.hide();
    speed = speedTune.value();
    DrawCodeBlock();

    /*Draw*/
    push();
    translate(
      width / 2 + 3.5 * gap + 2 * visW,
      height - 2 * gap - 10 * drawL - 9 * drawGap
    );
    if (millis() >= nextT * 1000 && yy < eY) {
      if (beginning) {
        nextT += 1 / speed;
        beginning = false;
      } else {
        if (newX) {
          nextT += 1 / speed / 3;
          newY = false;
        } else {
          if (xx < eX) {
            if (selDraw.value() == "square(s)") DrawSquare(xx, yy);
            else if (selDraw.value() == "circle(s)") DrawCircle(xx, yy);
            xx += pX;
            nextT += 1 / speed;
            newY = false;
          } else {
            xx = sX;
            yy += pY;
            newY = true;
            newX = true;
            nextT += 1 / speed;
          }
        }
      }
    }
    pop();

    if (millis() >= nextT * 1000 && yy > eY && beginning) {
      nextT += 1 / speed;
      beginning = false;
    }

    /*visTextBox1*/
    if (newY) {
      if (millis() <= (nextT - (1 / speed / 3) * 2) * 1000) {
        if (yy == sY) {
          DrawVisText1(`y = ${sY}\n`, sY);
          DrawInspection(sX, sY);
          DrawVisIndicator(6);
        } else {
          DrawVisText1(`y = ${yy - pY}\ny increases by ${pY}`, yy - pY);
          DrawInspection(xx, `${yy - pY} + ${pY}`);
          DrawVisIndicator(3);
        }
      } else if (
        millis() > (nextT - (1 / speed / 3) * 2) * 1000 &&
        millis() <= (nextT - (1 / speed / 3) * 1) * 1000
      ) {
        if (yy < eY) {
          DrawVisText1(`y = ${yy}\ny is < ${eY}`, yy);
          DrawInspection(xx, `${yy} < ${eY}`);
        } else {
          DrawVisText1(`y = ${yy}\ny is NOT < ${eY}`, yy);
          DrawInspection(xx, `${yy} NOT < ${eY}`);
          reachEndY = true;
        }
        DrawVisIndicator(4);
      } else if (
        millis() > (nextT - (1 / speed / 3) * 1) * 1000 &&
        millis() <= (nextT - (1 / speed / 3) * 0) * 1000
      ) {
        if (reachEndY) {
          newY = false;
          ChangeSel();
        } else {
          DrawVisText1(`y = ${yy}`, yy);
          DrawVisText2(`x = ${sX}`);
          DrawInspection(sX, yy);
          DrawVisIndicator(5);
        }
      }
    } else {
      /*visTextBox2*/
      if (newX) {
        if (millis() <= nextT) {
          DrawVisIndicator(2);
        } else {
          newX = false;
        }
      }
      if (millis() <= (nextT - (1 / speed / 3) * 2) * 1000) {
        DrawVisText2(`x = ${xx - pX}\nDraw at (${xx - pX}, ${yy})`);
        DrawInspection(xx - pX, yy);
        DrawVisIndicator(0);
      } else if (
        millis() > (nextT - (1 / speed / 3) * 2) * 1000 &&
        millis() <= (nextT - (1 / speed / 3) * 1) * 1000
      ) {
        DrawVisText2(`x = ${xx - pX}\nx increases by ${pX}`);
        DrawInspection(`${xx - pX} + ${pX}`, yy);
        DrawVisIndicator(1);
      } else if (
        millis() > (nextT - (1 / speed / 3) * 1) * 1000 &&
        millis() <= (nextT - (1 / speed / 3) * 0) * 1000
      ) {
        if (xx < eX) {
          DrawVisText2(`x = ${xx}\nx is < ${eX}`);
          DrawInspection(`${xx} < ${eX}`, yy);
        } else {
          DrawVisText2(`x = ${xx}\nx is NOT < ${eX}`);
          DrawInspection(`${xx} NOT < ${eX}`, yy);
        }
        DrawVisIndicator(2);
      }
    }

    WriteCode();

    // if (yy >= eY) ChangeSel();
  }

  WriteCode();
}

function DrawInspection(xx, yy) {
  DrawInspectionBlock();

  /*Write Inspection*/
  push();
  textSize(codeSize);
  textFont("Arial");
  text(
    `x = ${xx}\ny = ${yy}\n`,
    width / 2 + gap + width / 4 - 1,
    gap * 3 + titleSize + codeSize
  );
  pop();
}

function DrawVisIndicator(step) {
  push();
  noStroke();
  fill("#FEFF7F");
  switch (step) {
    case 0: //Draw
      rect(1044, 188, 266, 51);
      break;
    case 1: //x+
      rect(1289, 143, 119, 44);
      break;
    case 2: //x<
      rect(1185, 143, 102, 44);
      break;
    case 3: //y+
      rect(1255, 104, 121, 37);
      break;
    case 4: //y<
      rect(1153, 104, 102, 37);
      break;
    case 5: //x=
      rect(1104, 143, 84, 44);
      break;
    case 6: //y=
      rect(1068, 104, 74, 34);
      break;
  }
  pop();
}

function DrawVisText1(s, yy) {
  push();
  fill(255);
  noStroke();
  rect(
    width / 2 + 1.5 * gap,
    height - 2.5 * gap - 10 * drawL - 9 * drawGap,
    visW,
    gap + 10 * drawL + 9 * drawGap
  );
  pop();

  push();
  textSize(visSize);
  textFont("Arial");
  text(
    s,
    width / 2 + 1.5 * gap,
    height - 2 * gap - 10 * drawL - 9 * drawGap + yy * visH,
    visW,
    visH
  );
  pop();
}

function DrawVisText2(s) {
  push();
  fill(255);
  noStroke();
  rect(
    width / 2 + 2 * gap + visW,
    height - 2.5 * gap - 10 * drawL - 9 * drawGap,
    visW,
    gap + 10 * drawL + 9 * drawGap
  );
  pop();
  push();
  textSize(visSize);
  textFont("Arial");
  text(
    s,
    width / 2 + 2 * gap + visW,
    height - 2 * gap - 10 * drawL - 9 * drawGap + yy * visH,
    visW,
    visH
  );
  pop();
}

function single(drawType) {
  let tmp = "";
  for (let i = 0; i < drawType.length && drawType[i] != "("; i++)
    tmp += drawType[i];
  return tmp;
}

function ChangeSel() {
  startAnime = false;
  buttonStopAnime.hide();
  buttonAnime.show();

  background(248);
  push();
  textSize(titleSize);
  textFont("Arial Black");
  text("Nested For Loop Visualization", gap, gap * 1.5 + titleSize);
  textSize(conSize);
  text("Designed and coded by Roy Yang", gap, gap * 2 + titleSize + conSize);
  pop();
  /*controllerCards*/
  push();
  //y's lines
  stroke("#F6DC23");
  strokeWeight(5);
  line(125, 222, 125, 461);
  noStroke();
  fill(248);
  rect(97, 262, 50, 40);
  rect(118, 329, 10);
  rect(118, 451, 10);
  fill("#F6DC23");
  triangle(118, 262, 132, 262, 125, 272);
  triangle(118, 329, 132, 329, 125, 339);
  triangle(118, 451, 132, 451, 125, 461);
  //x's lines
  stroke("#F6DC23");
  strokeWeight(5);
  line(577, 403, 577, 653);
  noStroke();
  fill(248);
  rect(555, 462, 50, 40);
  rect(570, 534, 10);
  rect(570, 643, 10);
  fill("#F6DC23");
  triangle(570, 462, 584, 462, 577, 472);
  triangle(570, 534, 584, 534, 577, 544);
  triangle(570, 643, 584, 643, 577, 653);
  //expand line
  for (let i = 0; i <= 5; i++) {
    let xx1 = 20 + 339 + i * 20;
    let xx2 = xx1 + 10;
    let yy1 = 340 + 63 / 2 - 5;
    let yy3 = yy1 + 10;
    let yy2 = (yy1 + yy3) / 2;
    triangle(xx1, yy1, xx1, yy3, xx2, yy2);
  }
  //y's cards
  strokeWeight(1);
  stroke("SeaGreen");
  fill(255);
  rect(20, 159, 210, 63, 20);
  stroke("DarkBlue");
  rect(20, 339, 326, 63, 20);
  stroke("DodgerBlue");
  rect(20, 461, 231, 63, 20);
  //x's cards
  stroke("SeaGreen");
  fill(255);
  rect(482, 340, 210, 63, 20);
  stroke("DarkBlue");
  rect(482, 544, 226, 53, 20);
  stroke("DodgerBlue");
  rect(482, 653, 231, 63, 20);
  pop();

  /*controllerText*/
  push();
  textFont("Arial");
  textSize(conSize);
  textAlign(RIGHT);
  text("y starts from ", 139, 175 + conSize);
  text("As long as y is smaller than ", 262, 272 + conSize);
  text("Draw " + (eX - sX >= 0 ? eX - sX : 0) + " ", 118, 354 + conSize);
  textAlign(LEFT);
  text(" in row y", 148 + 120, 354 + conSize);
  textAlign(RIGHT);
  text("y increases by ", 168, 472 + conSize);

  textAlign(RIGHT);
  text("x starts from ", 139 + 460, 354 + conSize);
  text("As long as x is smaller than ", 262 + 460, 472 + conSize);
  textAlign(LEFT);
  text(
    "Draw a " + single(selDraw.value()) + " at (x,y)",
    118 + 390,
    554 + conSize
  );
  textAlign(RIGHT);
  text("x increases by ", 168 + 460, 666 + conSize);
  stroke("#F6DC23");
  strokeWeight(2);
  text("Animation Speed    ", 534, 813 + conSize);
  pop();

  /*Divider*/
  push();
  stroke(230);
  strokeWeight(1);
  line(width / 2, 0, width / 2, height);
  pop();

  DrawCodeBlock();

  WriteCode();

  DrawInspectionBlock();

  /*Write Inspection*/
  push();
  textSize(codeSize);
  textFont("Arial");
  text(
    `Click " ▶ Play Animation " button\nto see the animation again.\nUse the slider to change the ani-\nmation speed.`,
    width / 2 + gap + width / 4 - 1,
    gap * 3 + titleSize + codeSize
  );
  pop();

  /*DrawSquares_Final*/
  DrawCanvasBlock();
  push();
  translate(
    width / 2 + 3.5 * gap + 2 * visW,
    height - 2 * gap - 10 * drawL - 9 * drawGap
  );
  for (let i = sY; i < eY; i += pY) {
    for (let j = sX; j < eX; j += pX) {
      if (selDraw.value() == "square(s)") DrawSquare(j, i);
      else if (selDraw.value() == "circle(s)") DrawCircle(j, i);
    }
  }
  pop();
}

function DrawInspectionBlock() {
  /*Inspection Block*/
  push();
  textSize(titleSize);
  textFont("Arial Black");
  text(
    "Inspection",
    width / 2 + gap + width / 4 - 0.5 * gap - 1,
    gap * 1.5 + titleSize
  );
  noStroke();
  fill(255);
  rect(
    width / 2 + gap + width / 4 - 0.5 * gap - 1,
    gap * 1.5 + titleSize + gap,
    width / 4 - 1.5 * gap - 1,
    height - 6 * gap - 10 * drawL - 9 * drawGap - 2 * titleSize,
    20
  );
  pop();
}

function DrawSquare(x, y) {
  noStroke();
  fill(200, 200, 200);
  rect(x * (drawL + drawGap), y * (drawL + drawGap), drawL, drawL);
}

function DrawCircle(x, y) {
  noStroke();
  fill(200, 200, 200);
  circle(
    x * (drawL + drawGap) + drawL / 2,
    y * (drawL + drawGap) + drawL / 2,
    drawL
  );
}

function DrawCanvasBlock() {
  push();
  textSize(titleSize);
  textFont("Arial Black");
  text("Canvas", width / 2 + gap, height - 3 * gap - 10 * drawL - 9 * drawGap);
  noStroke();
  fill(255);
  rect(
    width / 2 + gap,
    height - 2.5 * gap - 10 * drawL - 9 * drawGap,
    width / 2 - 2 * gap - 2,
    gap + 10 * drawL + 9 * drawGap,
    20
  );
  pop();

  push();
  translate(
    width / 2 + 3.5 * gap + 2 * visW,
    height - 2 * gap - 10 * drawL - 9 * drawGap
  );
  stroke(230);
  strokeWeight(1);
  noFill();
  for (let i = 0; i < 10; i++)
    for (let j = 0; j < 10; j++) {
      rect(
        i * (drawL + drawGap) - drawGap / 2,
        j * (drawL + drawGap) - drawGap / 2,
        drawL + drawGap,
        drawL + drawGap
      );
    }
  pop();
}

function DrawCodeBlock() {
  /*Code Block*/
  push();
  textSize(titleSize);
  textFont("Arial Black");
  text("Code", width / 2 + gap, gap * 1.5 + titleSize);
  noStroke();
  fill(255);
  rect(
    width / 2 + gap,
    gap * 2.5 + titleSize,
    width / 4 - 1.5 * gap - 1,
    height - 6 * gap - 10 * drawL - 9 * drawGap - 2 * titleSize,
    20
  );
  pop();
}

function WriteCode() {
  /*WriteCode*/
  push();
  textSize(codeSize);
  textFont("Arial");
  fill(0);
  textLeading(codeSize * 1.5);
  text(
    "for(let         ;           ;               ){\n    for(let         ;           ;               ){\n\n    }\n}",
    xc,
    yc
  );
  fill("SeaGreen");
  text(`y = ${sY}`, xc + textWidth("for(let "), yc);
  fill("Crimson");
  text(` y < ${eY}`, xc + textWidth("for(let         ;"), yc);
  fill("DodgerBlue");
  text(` y = y + ${pY}`, xc + textWidth("for(let         ;           ;"), yc);
  fill("SeaGreen");
  text(`x = ${sX}`, xc + textWidth("    for(let "), yc + codeSize * 1.5);
  fill("Crimson");
  text(
    ` x < ${eX}`,
    xc + textWidth("    for(let         ;"),
    yc + codeSize * 1.5
  );
  fill("DodgerBlue");
  text(
    ` x = x + ${pX}`,
    xc + textWidth("    for(let         ;           ;"),
    yc + codeSize * 1.5
  );
  fill("DarkBlue");
  if (selDraw.value() == "square(s)")
    text("DrawSquare(x, y);", xc + textWidth("        "), yc + codeSize * 3);
  else if (selDraw.value() == "circle(s)")
    text("DrawCircle(x, y);", xc + textWidth("        "), yc + codeSize * 3);
  pop();
}

function draw() {
  DrawAnime();
}
