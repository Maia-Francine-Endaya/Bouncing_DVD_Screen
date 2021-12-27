const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


//Sphere Geometry
const sphereGeometry = new THREE.SphereGeometry(5, 32, 16);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x347deb });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

camera.position.z = 35;

function animate() {
  requestAnimationFrame(animate);

  sphere.position.x += 0.09;
  sphere.position.y += 0.09;

  renderer.render(scene, camera);
}
animate();