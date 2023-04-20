
// // import { Scene } from 'three';
// //Variables
// let container;
// let camera;
// let renderer;
// let scene;
// let house;

// function init() {
//   container = document.querySelector(".scene");

//   //Create scene
//   scene = new THREE.Scene();

//   const fov = 50;
//   const aspect = container.clientWidth / container.clientHeight;
//   const near = 0.5;
//   const far = 500;

//   //Camera setup
//   camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
//   camera.position.set(0, 5, 30);

//   const ambient = new THREE.AmbientLight(0x404040, 0);
//   scene.add(ambient);

//   const light = new THREE.DirectionalLight(0xffffff, 2);
//   light.position.set(50, 50, 100);
//   scene.add(light);
//   //Renderer
//   renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//   renderer.setSize(container.clientWidth, container.clientHeight);
//   renderer.setPixelRatio(window.devicePixelRatio);

//   container.appendChild(renderer.domElement);

//   //Load Model
//   let loader = new THREE.GLTFLoader();
//   loader.load("./3d/scene.gltf", function(gltf) {
//     scene.add(gltf.scene);
//     house = gltf.scene.children[0];
//     animate();
//   });
// }

// function animate() {
//   requestAnimationFrame(animate);
//   house.rotation.y += 0.005;
//   renderer.render(scene, camera);
// }

// init();

// function onWindowResize() {
//   camera.aspect = container.clientWidth / container.clientHeight;
//   camera.updateProjectionMatrix();

//   renderer.setSize(container.clientWidth, container.clientHeight);
// }

// window.addEventListener("resize", onWindowResize);
