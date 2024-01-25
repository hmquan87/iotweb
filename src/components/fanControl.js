
let rotationDegree = 0;
let rotationInterval;
let isRotating = false;

function rotateImage() {
  const rotatingImage = document.getElementById('imgFan');
  rotatingImage.style.transform = `rotate(${rotationDegree += 10}deg)`;
}

function toggleRotation() {
  const rotateButton = document.getElementById('fan');

  if (isRotating) {
    clearInterval(rotationInterval);
    rotateButton.textContent = "Start Rotation";
  } else {
    rotationInterval = setInterval(rotateImage, 16);
    rotateButton.textContent = "Stop Rotation";
  }

  isRotating = !isRotating;
}

export { toggleRotation };
