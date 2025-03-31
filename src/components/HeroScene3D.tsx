
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useTexture, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { useIsMobile } from '@/hooks/use-mobile';

const GlobeModel = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const isMobile = useIsMobile();
  
  // Earth textures with error handling
  let earthTexture;
  try {
    earthTexture = useTexture('/earth-texture.jpg');
  } catch (error) {
    console.log('Earth texture not found, using fallback material');
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

  // Adjust globe size for mobile
  const globeSize = isMobile ? 1.2 : 1.5;
  // Reduce particles count for mobile
  const particleCount = isMobile ? 4 : 8;

  return (
    <group ref={groupRef}>
      {/* Earth */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[globeSize, isMobile ? 32 : 64, isMobile ? 32 : 64]} />
        {earthTexture ? (
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
      
      {/* Education Icons - fewer on mobile */}
      {[...Array(particleCount)].map((_, i) => {
        const angle = (i / particleCount) * Math.PI * 2;
        const radius = isMobile ? 2.0 : 2.5;
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
  const isMobile = useIsMobile();
  
  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0005;
    }
  });
  
  // Reduce particle count on mobile for better performance
  const particleCount = isMobile ? 150 : 300;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * (isMobile ? 8 : 10);
    positions[i3 + 1] = (Math.random() - 0.5) * (isMobile ? 8 : 10);
    positions[i3 + 2] = (Math.random() - 0.5) * (isMobile ? 8 : 10);
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
        size={isMobile ? 0.04 : 0.05} 
        color="#57C5B6" 
        transparent 
        opacity={0.8} 
        sizeAttenuation 
      />
    </points>
  );
};

// Define the HeroScene3D as a function component
const HeroScene3D: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full h-full">
      <Canvas 
        shadows 
        className="bg-transparent"
        camera={{ position: [0, 0, isMobile ? 6 : 5], fov: isMobile ? 50 : 45 }}
        dpr={[1, isMobile ? 1.5 : 2]} // Lower pixel ratio on mobile for better performance
      >
        <PerspectiveCamera makeDefault position={[0, 0, isMobile ? 6 : 5]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        <GlobeModel />
        <Particles />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={isMobile ? 0.3 : 0.5}
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default HeroScene3D;
