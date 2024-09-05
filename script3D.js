import * as THREE from 'three';
import {OrbitControls} from 'OrbitControls';

const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({canvas, antialias:true});
const fov = 75;
const aspect = window.innerWidth/window.innerHeight;  // a tela padrão
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( canvas.clientWidth, window.innerHeight );
renderer.shadowMap.enabled=true;

const controls = new OrbitControls(camera, renderer.domElement);

camera.position.z = 70;
camera.position.y = 50;
camera.rotation.x = -0.6;

const scene = new THREE.Scene();

scene.background = new THREE.Color(0xffffff);

// const quadrado = new THREE.BoxGeometry(2000,1,2000);
const material = new THREE.MeshPhongMaterial({color: 	0x696969});
// const cube  = new THREE.Mesh(quadrado,material);
const planeGeometry = new THREE.PlaneGeometry(500,500)
// cube.receiveShadow = true;
const plane = new THREE.Mesh(planeGeometry,material);
plane.receiveShadow = true;

plane.rotation.x = -Math.PI/2;

const cilindro = new THREE.CylinderGeometry(1,1,30,10);
const corCilindro = new THREE.MeshPhongMaterial({color: 0xDCDCDC});
const cylinder = new THREE.Mesh(cilindro,corCilindro);

cylinder.position.y=15;
cylinder.castShadow = true;
cylinder.receiveShadow = true;

const luz = new THREE.DirectionalLight(0xFFFfff,5);
const ambientLight = new THREE.AmbientLight(0xffffff,3);
// proximo da noite
// luz.position.y = 18;
// luz.position.x = 5;
// luz.position.z=-30;
// 16 horas
// luz.position.y = 20;
// luz.position.x = 5;
// luz.position.z=-30;
// 15 horas
// luz.position.y = 35;
// luz.position.x = 10;
// luz.position.z=-30;
// 13 horas
// luz.position.y = 50;
// luz.position.x = 20;
// luz.position.z=-20;
// 12 horas
// luz.position.y = 90;
// luz.position.x = 30;
// luz.position.z=35;
// 10 horas
// luz.position.y = 50;
// luz.position.x = 20;
// luz.position.z=50;
// 8 horas
// luz.position.y = 30;
// luz.position.x = 20;
// luz.position.z=50;
// nascer do sol
luz.position.y = 20;
luz.position.x = 20;
luz.position.z=50;
luz.castShadow = true;

luz.shadow.mapSize.width=2048;
luz.shadow.mapSize.height=2048;
luz.shadow.camera.near = 0.1
luz.shadow.camera.far=500
luz.shadow.camera.left = 50
luz.shadow.camera.right = -50
luz.shadow.camera.top=50
luz.shadow.camera.bottom=-50;

// const helper = new THREE.CameraHelper(luz.shadow.camera);
// scene.add(luz.shadow.camera);

scene.add(luz,plane,cylinder,ambientLight);

function animate(){
    renderer.render(scene, camera, controls);
   
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);