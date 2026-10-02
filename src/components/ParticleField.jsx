// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// export default function ParticleField({ className = '', count = 1400, showRings = true, ringOffsetX = 3.2 }) {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
//     let width = container.clientWidth || 1;
//     let height = container.clientHeight || 1;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
//     camera.position.z = 9;

//     const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     renderer.setSize(width, height);
//     container.appendChild(renderer.domElement);

//     // Particles
//     const positions = new Float32Array(count * 3);
//     const colors = new Float32Array(count * 3);
//     const pink = new THREE.Color('#d13cf2');
//     const blue = new THREE.Color('#2aa8f5');
//     const tmp = new THREE.Color();
//     for (let i = 0; i < count; i++) {
//       const r = 4 + Math.random() * 10;
//       const theta = Math.random() * Math.PI * 2;
//       const phi = Math.acos(2 * Math.random() - 1);
//       positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
//       positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
//       positions[i * 3 + 2] = r * Math.cos(phi) - 4;
//       tmp.copy(pink).lerp(blue, Math.random());
//       colors[i * 3] = tmp.r;
//       colors[i * 3 + 1] = tmp.g;
//       colors[i * 3 + 2] = tmp.b;
//     }
//     const particleGeo = new THREE.BufferGeometry();
//     particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
//     particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
//     const particleMat = new THREE.PointsMaterial({
//       size: 0.045,
//       vertexColors: true,
//       transparent: true,
//       opacity: 0.85,
//       blending: THREE.AdditiveBlending,
//       depthWrite: false,
//     });
//     const points = new THREE.Points(particleGeo, particleMat);
//     scene.add(points);

//     // Wireframe orbit rings
//     const ringGroup = new THREE.Group();
//     const ringGeos = [];
//     const ringMats = [];
//     if (showRings) {
//       const ringDefs = [
//         { r: 2.6, color: '#2aa8f5', rx: 1.2, ry: 0.2 },
//         { r: 3.2, color: '#d13cf2', rx: 1.4, ry: -0.4 },
//         { r: 3.9, color: '#8b5cf6', rx: 1.05, ry: 0.5 },
//       ];
//       ringDefs.forEach((d) => {
//         const g = new THREE.TorusGeometry(d.r, 0.01, 8, 200);
//         const m = new THREE.MeshBasicMaterial({ color: d.color, transparent: true, opacity: 0.45 });
//         const mesh = new THREE.Mesh(g, m);
//         mesh.rotation.x = d.rx;
//         mesh.rotation.y = d.ry;
//         ringGroup.add(mesh);
//         ringGeos.push(g);
//         ringMats.push(m);
//       });
//       ringGroup.position.x = ringOffsetX;
//       scene.add(ringGroup);
//     }

//     let mouseX = 0;
//     let mouseY = 0;
//     const onMove = (e) => {
//       mouseX = e.clientX / window.innerWidth - 0.5;
//       mouseY = e.clientY / window.innerHeight - 0.5;
//     };
//     window.addEventListener('pointermove', onMove);

//     const resizeObserver = new ResizeObserver(() => {
//       width = container.clientWidth || 1;
//       height = container.clientHeight || 1;
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//       renderer.setSize(width, height);
//       ringGroup.position.x = width < 900 ? 0 : ringOffsetX;
//     });
//     resizeObserver.observe(container);

//     let frame = 0;
//     const render = () => {
//       if (!reduceMotion) {
//         points.rotation.y += 0.0006;
//         points.rotation.x += 0.0002;
//         ringGroup.children.forEach((ring, i) => {
//           ring.rotation.z += 0.002 * (i % 2 === 0 ? 1 : -1) * (1 + i * 0.3);
//         });
//       }
//       camera.position.x += (mouseX * 1.6 - camera.position.x) * 0.04;
//       camera.position.y += (-mouseY * 1.2 - camera.position.y) * 0.04;
//       camera.lookAt(0, 0, 0);
//       renderer.render(scene, camera);
//       frame = requestAnimationFrame(render);
//     };
//     render();

//     return () => {
//       cancelAnimationFrame(frame);
//       window.removeEventListener('pointermove', onMove);
//       resizeObserver.disconnect();
//       particleGeo.dispose();
//       particleMat.dispose();
//       ringGeos.forEach((g) => g.dispose());
//       ringMats.forEach((m) => m.dispose());
//       renderer.dispose();
//       if (renderer.domElement.parentNode === container) container.removeChild(renderer.domElement);
//     };
//   }, [count, showRings, ringOffsetX]);

//   return <div ref={containerRef} className={`pointer-events-none ${className}`} aria-hidden="true" />;
// }
