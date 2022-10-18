var heading = document.getElementById("body");
var colour = "#661122"

var red = 66;
var blue = 66;
var green = 66;
var direction = 1;
function updatecolours() {
  if (direction == 1) {
    red += 1
    if (red >= 255) {
      direction = 2
    }
  } else if (direction == 2) {
      green += 1
      if (green >= 255) {
        direction = 3
      }
    } else if (direction == 3) {
        red -= 1
        if (red <= 66) {
          direction = 4
        }
      } else if (direction == 4) {
        blue += 1
        if (blue >= 255) {
          direction = 5
        }
      } else if (direction == 5) {
        green -= 1
        if (green <= 66) {
          direction = 6
        }
      } else if (direction == 6) {
          red += 1
          if (red >= 255) {
            direction = 7
          }
      } else if (direction == 7) {
          blue -= 1
          if (blue <= 66) {
            direction = 1
          }
        }
  heading.style["background-color"] = ("rgb(" + red + "," + green + "," + blue + ")");
  setTimeout(updatecolours, 2)
}
