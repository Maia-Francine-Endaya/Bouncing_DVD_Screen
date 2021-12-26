const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//insert code here
const sphereGeometry = new THREE.sphereGeometry(8.613, 32, 16)
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xf5e942 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

camera.position.z = 1;

function animate() {
  requestAnimationFrame(animate);

  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  //end
  renderer.render(scene, camera);
}
animate();