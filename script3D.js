import * as THREE from "three";
import { OrbitControls } from "OrbitControls";

let vez = 1;
const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
const fov = 75;
const aspect = window.innerWidth / window.innerHeight; // a tela padrão
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(canvas.clientWidth, window.innerHeight);
renderer.shadowMap.enabled = true;

const controls = new OrbitControls(camera, renderer.domElement);

camera.position.z = 70;
camera.position.y = 50;
camera.rotation.x = -0.6;

const scene = new THREE.Scene();

scene.background = new THREE.Color(0xffffff);

// const quadrado = new THREE.BoxGeometry(2000,1,2000);
const material = new THREE.MeshPhongMaterial({ color: 0x696969 });
// const cube  = new THREE.Mesh(quadrado,material);
const planeGeometry = new THREE.PlaneGeometry(500, 500);
// cube.receiveShadow = true;
const plane = new THREE.Mesh(planeGeometry, material);
plane.receiveShadow = true;

plane.rotation.x = -Math.PI / 2;

const cilindro = new THREE.CylinderGeometry(1, 1, 30, 10);
const corCilindro = new THREE.MeshPhongMaterial({ color: 0xdcdcdc });
const cylinder = new THREE.Mesh(cilindro, corCilindro);

cylinder.position.y = 15;
cylinder.castShadow = true;
cylinder.receiveShadow = true;

const horas = [...document.querySelectorAll("#horas button")];
const luz = new THREE.DirectionalLight('white', 5);
const ambientLight = new THREE.AmbientLight('white', 3);

if(vez == 1 ){
      luz.position.y = 30;
      luz.position.x = 20;
      luz.position.z = 50;
      vez++;
}
horas.map((el) => {
  el.addEventListener("click", () => {
    if (el.textContent == "06:00") {
      luz.position.y = 20;
      luz.position.x = 20;
      luz.position.z = 50;
    } else if (el.textContent == "08:00") {
      luz.position.y = 30;
      luz.position.x = 20;
      luz.position.z = 50;
    } else if (el.textContent == "10:00") {
      luz.position.y = 50;
      luz.position.x = 20;
      luz.position.z = 50;
    } else if (el.textContent == "12:00") {
      luz.position.y = 90;
      luz.position.x = 30;
      luz.position.z = 35;
    } else if (el.textContent == "14:00") {
      luz.position.y = 50;
      luz.position.x = 20;
      luz.position.z = -20;
    } else if (el.textContent == "16:00") {
      luz.position.y = 35;
      luz.position.x = 10;
      luz.position.z = -30;
    } else if (el.textContent == "18:00") {
      luz.position.y = 20;
      luz.position.x = 5;
      luz.position.z = -30;
    } else {
      luz.position.y = 15;
      luz.position.x = 0;
      luz.position.z = -30;
    }
  });
});
// proximo da noite

// 16 horas

// 15 horas

// 13 horas

// 12 horas

// 10 horas

// 8 horas

// nascer do sol

luz.castShadow = true;

luz.shadow.mapSize.width = 2048;
luz.shadow.mapSize.height = 2048;
luz.shadow.camera.near = 0.1;
luz.shadow.camera.far = 500;
luz.shadow.camera.left = 50;
luz.shadow.camera.right = -50;
luz.shadow.camera.top = 50;
luz.shadow.camera.bottom = -50;

// const helper = new THREE.CameraHelper(luz.shadow.camera);
// scene.add(luz.shadow.camera);

scene.add(luz, plane, cylinder, ambientLight);

function animate() {
  renderer.render(scene, camera, controls);

  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
