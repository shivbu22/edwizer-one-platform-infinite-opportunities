
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useTexture, Environment } from '@react-three/drei';
import * as THREE from 'three';

const GlobeModel = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [textureError, setTextureError] = useState(false);
  
  // Earth textures with error handling
  let earthTexture;
  try {
    earthTexture = useTexture('/earth-texture.jpg');
  } catch (error) {
    if (!textureError) {
      console.log('Earth texture not found, using fallback material');
      setTextureError(true);
    }
  }
  
  // Rotation animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Earth */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.5, 64, 64]} />
        {earthTexture && !textureError ? (
          <meshStandardMaterial 
            map={earthTexture} 
            metalness={0.1}
            roughness={0.8}
          />
        ) : (
          <meshStandardMaterial 
            color="#1A5F7A"
            metalness={0.5}
            roughness={0.5}
          />
        )}
      </mesh>
      
      {/* Education Icons */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 2.5;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;
        return (
          <mesh key={i} position={[x, 0, z]}>
            <boxGeometry args={[0.3, 0.3, 0.3]} />
            <meshStandardMaterial color={i % 2 === 0 ? "#159895" : "#F9F871"} />
          </mesh>
        );
      })}
    </group>
  );
};

const Particles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0005;
    }
  });
  
  const particleCount = 300;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 10;
    positions[i3 + 1] = (Math.random() - 0.5) * 10;
    positions[i3 + 2] = (Math.random() - 0.5) * 10;
  }
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.05} 
        color="#57C5B6" 
        transparent 
        opacity={0.8} 
        sizeAttenuation 
      />
    </points>
  );
};

const HeroScene3D = () => {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas 
        shadows 
        className="bg-transparent"
        camera={{ position: [0, 0, 5], fov: 45 }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        <GlobeModel />
        <Particles />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default HeroScene3D;
