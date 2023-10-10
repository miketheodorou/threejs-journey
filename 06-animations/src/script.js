import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


// Naive approach
// let time = Date.now()

// // Animation
// const tick = () => {
//     // Time
//     const currentTime = Date.now()
//     const deltaTime = currentTime - time;
//     time = currentTime

//     // update objects
//     mesh.rotation.y += 0.001 * deltaTime;
//     mesh.rotation.x += 0.001 * deltaTime;
//     mesh.rotation.z += 0.001 * deltaTime;

//     // Render
//     renderer.render(scene, camera)

//     // call tick on the next frame

//     window.requestAnimationFrame(tick);
// }


// Using Three.js Clock
// const clock = new THREE.Clock();
// // Animation
// const tick = () => {
//     // Clock
//     const elapsedTime = clock.getElapsedTime()
//     // const oneRevPerSecond = elapsedTime * Math.PI * 2;

//     // update objects
//     // mesh.rotation.y = Math.sin(elapsedTime);
//     // mesh.rotation.x = Math.cos(elapsedTime);
//     // mesh.position.y = Math.sin(elapsedTime);
//     // mesh.position.x = Math.cos(elapsedTime);

//     camera.position.y = Math.sin(elapsedTime * 1.5);
//     camera.position.x = Math.cos(elapsedTime * 1.5);
//     camera.lookAt(mesh.position)


//     // Render
//     renderer.render(scene, camera)

//     // call tick on the next frame

//     window.requestAnimationFrame(tick);
// }

// With GSAP
gsap.to(mesh.position, { x: 2, duration: 1, delay: 1 });
gsap.to(mesh.position, { x: -2, duration: 1, delay: 2 });
gsap.to(mesh.position, { x: 0, duration: 1, delay: 3 });

const tick = () => {
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick)
}

// tick()