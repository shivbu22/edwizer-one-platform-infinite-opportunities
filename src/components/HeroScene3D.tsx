
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useTexture, Environment, Text, Float, Stars } from '@react-three/drei';
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

      {/* Add floating text - Using Text instead of Text3D to avoid font loading issues */}
      <Float
        speed={1.5}
        rotationIntensity={0.5}
        floatIntensity={0.5}
        position={[0, 2.5, 0]}
      >
        <Text
          fontSize={isMobile ? 0.4 : 0.6}
          color="#F9F871"
          anchorX="center"
          anchorY="middle"
        >
          EDWIZER
        </Text>
      </Float>

      {/* Add animated graduation cap */}
      <Float
        speed={2}
        rotationIntensity={0.6}
        floatIntensity={0.6}
        position={[isMobile ? -2 : -3, isMobile ? 2 : 3, 0]}
      >
        <mesh>
          <coneGeometry args={[0.5, 0.5, 4]} />
          <meshStandardMaterial color="#1A5F7A" />
        </mesh>
        <mesh position={[0, 0.3, 0]}>
          <boxGeometry args={[1, 0.1, 1]} />
          <meshStandardMaterial color="#1A5F7A" />
        </mesh>
      </Float>

      {/* Add floating book */}
      <Float
        speed={1}
        rotationIntensity={0.8}
        floatIntensity={0.5}
        position={[isMobile ? 2 : 3, isMobile ? -1.5 : -2, 0]}
      >
        <group>
          <mesh>
            <boxGeometry args={[0.8, 0.1, 0.6]} />
            <meshStandardMaterial color="#E73E3E" />
          </mesh>
          <mesh position={[0, 0.1, 0]}>
            <boxGeometry args={[0.7, 0.05, 0.5]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
        </group>
      </Float>
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
  // Use state to handle errors in the 3D scene
  const [hasError, setHasError] = useState(false);

  // Error boundary alternative for the 3D scene
  const handleError = (error: any) => {
    console.error("Error in 3D scene:", error);
    setHasError(true);
  };
  
  // If there's an error, show a fallback UI
  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-edwizer-blue to-edwizer-teal rounded-lg">
        <div className="text-center p-6">
          <h3 className="text-xl font-bold text-white mb-2">Interactive 3D Experience</h3>
          <p className="text-white/80">Educational journey visualization</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="w-full h-full">
      <ErrorBoundary fallback={
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-edwizer-blue to-edwizer-teal rounded-lg">
          <div className="text-center p-6">
            <h3 className="text-xl font-bold text-white mb-2">Interactive 3D Experience</h3>
            <p className="text-white/80">Educational journey visualization</p>
          </div>
        </div>
      }>
        <Canvas 
          shadows 
          className="bg-transparent"
          camera={{ position: [0, 0, isMobile ? 6 : 5], fov: isMobile ? 50 : 45 }}
          dpr={[1, isMobile ? 1.5 : 2]} // Lower pixel ratio on mobile for better performance
          onError={handleError}
        >
          <PerspectiveCamera makeDefault position={[0, 0, isMobile ? 6 : 5]} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          
          <GlobeModel />
          <Particles />
          <Stars radius={100} depth={50} count={isMobile ? 1000 : 5000} factor={4} saturation={0} fade speed={1} />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            rotateSpeed={0.5}
            autoRotate
            autoRotateSpeed={isMobile ? 0.3 : 0.5}
          />
          <Environment preset="city" />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};

// Simple ErrorBoundary component
class ErrorBoundary extends React.Component<{children: React.ReactNode, fallback: React.ReactNode}> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("3D scene error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default HeroScene3D;
