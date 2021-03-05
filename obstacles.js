let scene_obstancle = {
  scene1: [3, 25, 30, 28, 45, 19, 52, 20, 2, 3, 54, 5, 44.6, 38, 53, 50, 37, 44.6, 44, 45, 3, 56, 14, 77, 15, 66, 30, 77, 54, 1, 56, 55, 54, 75, 56, 80, 31, 78, 54, 80, 93, 18, 95, 48, 96, 21, 99, 23, 96, 24, 102, 29, 96, 30, 99, 33, 95, 34, 96, 35, 96, 37, 99, 40, 96, 41, 100, 44, 96, 45, 100, 48, 119, 18, 120, 19, 119, 24, 120, 25, 116, 26, 120, 30, 114, 31, 120, 37, 112, 34, 113, 35, 116, 38, 120, 40, 119, 41, 120, 42, 117, 49, 120, 51, 115, 52, 120, 55, 112, 56, 120, 59, 93, 1, 120, 7.6, 65, 18, 80, 41],
  scene2: [71, 1, 71, 14, 87, 1, 87, 21, 67, 1, 70, 5, 45, 1, 66, 1, 69, 6, 70, 7, 39, 1, 44, 4, 39, 5, 41, 8, 39, 9, 39, 12, 39, 13, 5, 35, 13, 55, 39, 68, 55, 55, 58, 68, 55.2, 26, 58, 35, 55, 18, 55, 25, 59, 28, 59, 35, 60, 29, 60, 35, 61, 30, 61, 35, 62, 31, 64, 35, 65, 32, 66, 35, 67, 33, 75, 35, 76, 32, 89, 35, 80, 30, 92, 31, 83, 28, 92.4, 29, 85, 24, 92.6, 27, 87, 21, 92, 23, 87, 18, 89, 21, 98, 1, 98, 2, 120, 2, 115, 1, 118, 3, 120, 4, 120, 5, 120, 6, 106.4, 15.4, 106.8, 15.6, 108, 18, 108, 21, 109, 22, 109, 53, 59, 54.4, 86, 54.4, 87, 54, 109, 54, 93, 52, 109, 54, 97, 50, 109, 54, 99, 48, 109, 54, 102, 45, 109, 54, 104, 43, 109, 54, 105, 41, 109, 54, 107, 38, 109, 54, 108, 35, 109, 54, 109, 22, 109, 54, 108, 18, 108, 21, 72, 65, 120, 65, 57, 72, 109, 72, 39, 72, 39, 80, 55, 72, 55, 80],
  scene3: [1, 48, 62, 48.3, 105, 14, 120, 48.3, 91, 48.2, 120, 48.2, 63, 48.2, 76, 48.2, 61, 16, 62, 47, 1, 76.4, 82, 80, 4, 16.4, 27, 30, 35, 16.4, 43, 16.4, 44, 16.4, 58, 30, 35, 31, 58, 46, 4, 33, 27, 46, 1, 1, 6, 3, 22, 1, 42, 3, 58, 1, 60, 3, 7, 3, 21, 4, 43, 3, 57, 4, 60.8, 2, 61, 2, 62, 1, 74, 1, 76, 1, 91, 10, 92, 1, 120, 1, 115, 67, 120, 80, 118, 64, 120, 80],
  scene4:[3, 25, 30, 28, 45, 19, 52, 20, 2, 3, 54, 5, 44.6, 38, 53, 50, 37, 44.6, 44, 45, 3, 56, 14, 77, 15, 66, 30, 77, 54, 1, 56, 55, 54, 75, 56, 80, 31, 78, 54, 80, 93, 18, 95, 48, 96, 21, 99, 23, 96, 24, 102, 29, 96, 30, 99, 33, 95, 34, 96, 35, 96, 37, 99, 40, 96, 41, 100, 44, 96, 45, 100, 48, 119, 18, 120, 19, 119, 24, 120, 25, 116, 26, 120, 30, 114, 31, 120, 37, 112, 34, 113, 35, 116, 38, 120, 40, 119, 41, 120, 42, 117, 49, 120, 51, 115, 52, 120, 55, 112, 56, 120, 59, 93, 1, 120, 7.6, 65, 18, 80, 41]
};

function no_obstacle(c) {
  let x1, y1, x2, y2;
  let x = c.xpos;
  let y = c.ypos;
  switch (c.face) {
    case 1:
      y -= c.speed;
      break;
    case 2:
      y += c.speed;
      break;
    case 3:
      x -= c.speed;
      break;
    case 4:
      x += c.speed;
  }
  if (scene_num == 2) {
    x1 = x;
    y1 = y;
    x2 = x1 + 26;
    y2 = y1 + 26;
  } else {
    x1 = x;
    y1 = y;
    x2 = x1 + 25;
    y2 = y1 + 50;
  }

  if (x1 <= 0 || x2 >= width || y1 <= 0 || y2 >= height)
    return false;
  else if (obstacle(x1, y1, x2, y2)) return false;
  else return true;
}

function obstacle(x1, y1, x2, y2) {
  let points = [x1, y1, x2, y2];
  let ob = scene_obstancle["scene" + scene_num];
  for (let i = 0; i < ob.length; i += 4) {
    let points2 = [ob[i] * 5, ob[i + 1] * 5, ob[i + 2] * 5, ob[i + 3] * 5];
    if (in_rectangle(points, points2)) {
      // console.log(points2);
      return true;
    }
  }
}