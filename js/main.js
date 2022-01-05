const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(65, 800 / 800, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(800, 800);
document.body.appendChild(renderer.domElement);

const planeGeometry = new THREE.PlaneGeometry(7, 7);
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);

camera.position.z = 35;

function animate() {
  requestAnimationFrame(animate);

  plane.position.x += 0.08;
  plane.position.y += 0.08;

  renderer.render(scene, camera);
}
animate();