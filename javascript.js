const rocket = document.getElementById("rocket");
const flame = document.getElementById("flame");
const info = document.getElementById("info-text");

let rocketVelocityY = 0;
let preAppliedTransformStyles = "translate(-50%, -50%) scale(0.6)";
let gravitySpeed = 0;
let thrustUp = false;

const gravityForce = 0.05;
const rocketSpeed = 5;

window.addEventListener("keydown", keyDown, false);
window.addEventListener("keyup", keyUp, false);
function keyDown(e) {
  if (e.keyCode == 38) {
    // if arrow up
    thrustUp = true;
    info.innerHTML = "Arrow up pressed";
  }
}

function keyUp(e) {
  if (e.keyCode == 38) {
    // if arrow up
    thrustUp = false;
    info.innerHTML = "Arrow up released";
  }
}

function showFlames(bool) {
  if (bool && flame.style.opacity == 0) {
    flame.style.opacity = 1;
  } else if (!bool && flame.style.opacity == 1) {
    flame.style.opacity = 0;
  }
}

// main game loop
function update() {
  if (thrustUp == true) {
    rocketVelocityY += rocketSpeed;
    showFlames(true);
  } else {
    showFlames(false);
  }

  if (rocketVelocityY < 0) {
    gravitySpeed = 0;
    rocketVelocity = 0;
  } else {
    if (!thrustUp) gravitySpeed += gravityForce;
  }
  rocketVelocityY = rocketVelocityY - gravitySpeed;
  let top = "calc(50% - " + rocketVelocityY + "px)";
  rocket.style.top = top;
}

// executing the loop
setInterval(update, 1000 / 60);
