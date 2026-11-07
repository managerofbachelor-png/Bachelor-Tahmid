import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x08080c, 0.045);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for floating shapes
    const floatingGroup = new THREE.Group();
    scene.add(floatingGroup);

    // Floating Wireframe Shapes (Minimal architectural wireframes)
    const limeMat = new THREE.MeshBasicMaterial({
      color: 0xd4ff3f,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });

    const amberMat = new THREE.MeshBasicMaterial({
      color: 0xff6b00,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });

    const accentMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });

    // Mesh 1: Lime Icosahedron (Top right)
    const geo1 = new THREE.IcosahedronGeometry(4.2, 1);
    const mesh1 = new THREE.Mesh(geo1, limeMat);
    mesh1.position.set(7, 2, -4);
    floatingGroup.add(mesh1);

    // Mesh 2: Amber Torus (Mid left)
    const geo2 = new THREE.TorusGeometry(3.0, 0.7, 14, 40);
    const mesh2 = new THREE.Mesh(geo2, amberMat);
    mesh2.position.set(-8, -2, -3);
    mesh2.rotation.x = Math.PI / 4;
    floatingGroup.add(mesh2);

    // Mesh 3: Octahedron (Top left)
    const geo3 = new THREE.OctahedronGeometry(2.2, 0);
    const mesh3 = new THREE.Mesh(geo3, accentMat);
    mesh3.position.set(-6, 5, -5);
    floatingGroup.add(mesh3);

    // Mesh 4: Lime Ring (Bottom right)
    const geo4 = new THREE.TorusGeometry(1.6, 0.12, 12, 32);
    const mesh4 = new THREE.Mesh(geo4, limeMat);
    mesh4.position.set(5, -5, -2);
    floatingGroup.add(mesh4);

    // Clean particles
    const particleCount = 140;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const limeColor = new THREE.Color(0xd4ff3f);
    const amberColor = new THREE.Color(0xff6b00);
    const whiteColor = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 35;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 2;

      const choice = Math.random();
      const c = choice > 0.65 ? limeColor : choice > 0.35 ? amberColor : whiteColor;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.5,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Interaction
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetMouseX = (e.clientX / innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop using performance.now()
    let animationFrameId: number;
    let startTime = performance.now();

    const animate = (now: number) => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = (now - startTime) * 0.001;

      // Smooth mouse lerp
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      // Rotate meshes gently
      mesh1.rotation.x = elapsedTime * 0.12;
      mesh1.rotation.y = elapsedTime * 0.16;
      mesh2.rotation.x = elapsedTime * 0.1 + Math.PI / 4;
      mesh2.rotation.y = elapsedTime * 0.14;
      mesh3.rotation.x = elapsedTime * 0.18;
      mesh3.rotation.z = elapsedTime * 0.12;
      mesh4.rotation.x = elapsedTime * 0.25;

      // Group reaction to cursor
      floatingGroup.rotation.y = currentMouseX * 0.25;
      floatingGroup.rotation.x = -currentMouseY * 0.2;

      // Slow particle drift
      particles.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geo1.dispose();
      geo2.dispose();
      geo3.dispose();
      geo4.dispose();
      particleGeo.dispose();
      limeMat.dispose();
      amberMat.dispose();
      accentMat.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
