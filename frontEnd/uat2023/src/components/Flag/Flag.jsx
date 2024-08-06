import React, {Suspense , useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, useTexture, Preload } from '@react-three/drei';
import * as THREE from 'three';

const Flag = ({ isMobile }) => {
  const { scene } =useGLTF('./animated_flag/scene.gltf');
  const logoTexture = useTexture('https://static.wixstatic.com/media/5de23b_9cd4c59ce17e46168e09b4e401b756aa~mv2.png/v1/fill/w_95,h_93,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/UAT%20icon.png');

  const flagRef = useRef();

  // Apply the texture to the flag material
  useEffect(() => {
    scene.traverse((node) => {
      if (node.isMesh) {
        node.material = new THREE.MeshBasicMaterial({ map: logoTexture });
        node.material.needsUpdate = true;
      }
    });
  }, [scene, logoTexture]);

  // Floating animation
  useFrame(() => {
    if (flagRef.current) {
      flagRef.current.position.y = Math.sin(Date.now() / 1000) * 0.5; // Adjust the multiplier for the float height
    }
  });

  return (
    <primitive
      ref={flagRef}
      object={scene}
      scale={isMobile ? 0.7 : 0.75}
      position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
    />
  );
};

const FlagCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <hemisphereLight intensity={0.15} groundColor="black" />
        <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
        <pointLight intensity={1} />
        <Flag isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default FlagCanvas;
