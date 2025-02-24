'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Laptop() {
  const { scene } = useGLTF('/laptop.glb'); // Ajoute ton fichier .glb dans public

  return <primitive object={scene} scale={1.5} />;
}

export default function LaptopModel() {
  return (
    <div className="h-[400px] w-full">
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} intensity={1} />
        <Laptop />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
