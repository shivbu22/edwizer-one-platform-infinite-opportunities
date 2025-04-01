
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { useIsMobile } from '@/hooks/use-mobile';

type FloatingShapeProps = {
  height?: string;
  shape?: 'cube' | 'sphere' | 'torus' | 'pyramid';
  color?: string;
  backgroundColor?: string;
};

const ShapeGeometry = ({ shape = 'cube', color = '#1A5F7A' }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });
  
  let geometry;
  switch (shape) {
    case 'sphere':
      geometry = <sphereGeometry args={[1, 32, 32]} />;
      break;
    case 'torus':
      geometry = <torusGeometry args={[1, 0.4, 16, 32]} />;
      break;
    case 'pyramid':
      geometry = <coneGeometry args={[1, 2, 4]} />;
      break;
    case 'cube':
    default:
      geometry = <boxGeometry args={[1.5, 1.5, 1.5]} />;
  }
  
  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <mesh ref={meshRef}>
        {geometry}
        <meshStandardMaterial 
          color={color} 
          metalness={0.5} 
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
};

const FloatingParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const isMobile = useIsMobile();
  
  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.002;
    }
  });
  
  const particleCount = isMobile ? 50 : 100;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 5;
    positions[i3 + 1] = (Math.random() - 0.5) * 5;
    positions[i3 + 2] = (Math.random() - 0.5) * 5;
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
        color="#F9F871" 
        transparent 
        opacity={0.7} 
        sizeAttenuation 
      />
    </points>
  );
};

const FloatingShape3D: React.FC<FloatingShapeProps> = ({ 
  height = "200px", 
  shape = "cube", 
  color = "#1A5F7A",
  backgroundColor = "transparent" 
}) => {
  const [hasError, setHasError] = useState(false);
  const isMobile = useIsMobile();
  
  const handleError = (error: any) => {
    console.error("Error in 3D scene:", error);
    setHasError(true);
  };
  
  if (hasError) {
    return (
      <div 
        className="rounded-lg flex items-center justify-center" 
        style={{ 
          height, 
          background: backgroundColor !== 'transparent' ? backgroundColor : 'linear-gradient(135deg, #1A5F7A 0%, #57C5B6 100%)' 
        }}
      >
        <div className="text-center p-4">
          <h3 className="text-lg font-medium text-white">Interactive 3D Element</h3>
        </div>
      </div>
    );
  }
  
  return (
    <div style={{ height, backgroundColor }}>
      <Canvas
        className="rounded-lg"
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, isMobile ? 1.5 : 2]}
        onError={handleError}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <ShapeGeometry shape={shape} color={color} />
        <FloatingParticles />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default FloatingShape3D;
