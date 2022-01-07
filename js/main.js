const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(65, 800 / 800, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(800, 800);
document.body.appendChild(renderer.domElement);

//Plane Geometry
const planeGeometry = new THREE.PlaneGeometry(10, 7);
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);

camera.position.z = 35;

function animate() {
  requestAnimationFrame(animate);

  var planeMovementSpeedX = 0.08; //movement speed along the x axis
  var planeMovementSpeedY = 0.07; //movement speed along the y axis

  plane.position.x += planeMovementSpeedX;
  plane.position.y += planeMovementSpeedY;

  if (plane.position.x > 18) {
    planeMovementSpeedX = -0.08;
    plane.position.x += planeMovementSpeedX;
    plane.material.color.setRGB(Math.random(256), Math.random(256), Math.random(256));
  }

  if (plane.position.x < -18) {
    planeMovementSpeedX = 0.08;
    plane.position.x += planeMovementSpeedX;
    plane.material.color.setRGB(Math.random(256), Math.random(256), Math.random(256));
  }

  if (plane.position.y > 20) {
    planeMovementSpeedY = -0.08;
    plane.position.y += planeMovementSpeedY;
    plane.material.color.setRGB(Math.random(256), Math.random(256), Math.random(256));
  }

  else if (plane.position.y < -20) {
    planeMovementSpeedY = 0.08;
    plane.position.y += planeMovementSpeedY;
    plane.material.color.setRGB(Math.random(256), Math.random(256), Math.random(256));
  }

  renderer.render(scene, camera);
}
animate();