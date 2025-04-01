
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { useIsMobile } from '@/hooks/use-mobile';

type AnimatedBackgroundProps = {
  pattern?: 'dots' | 'grid' | 'waves';
  color?: string;
  height?: string;
  density?: number;
};

const BackgroundPattern = ({ pattern = 'dots', color = '#57C5B6', density = 20 }) => {
  const groupRef = useRef<THREE.Group>(null);
  const isMobile = useIsMobile();
  const actualDensity = isMobile ? Math.floor(density / 2) : density;
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      const time = clock.getElapsedTime();
      groupRef.current.rotation.y = time * 0.05;
      
      if (pattern === 'waves') {
        // Animate child objects for wave effect
        groupRef.current.children.forEach((child, i) => {
          if (child instanceof THREE.Mesh) {
            const offset = i * 0.2;
            child.position.y = Math.sin(time + offset) * 0.2;
          }
        });
      }
    }
  });
  
  return (
    <group ref={groupRef}>
      {pattern === 'dots' && (
        <>
          {Array.from({ length: actualDensity }).map((_, i) => {
            const theta = Math.random() * Math.PI * 2;
            const radius = 2 + Math.random() * 8;
            const x = Math.cos(theta) * radius;
            const y = (Math.random() - 0.5) * 10;
            const z = Math.sin(theta) * radius;
            const size = 0.05 + Math.random() * 0.1;
            return (
              <mesh key={i} position={[x, y, z]}>
                <sphereGeometry args={[size, 8, 8]} />
                <meshStandardMaterial color={color} />
              </mesh>
            );
          })}
        </>
      )}
      
      {pattern === 'grid' && (
        <>
          {Array.from({ length: actualDensity }).map((_, i) => 
            Array.from({ length: actualDensity }).map((_, j) => {
              const x = (i - actualDensity / 2) * 0.5;
              const z = (j - actualDensity / 2) * 0.5;
              const y = Math.sin(i * 0.5) * Math.cos(j * 0.5) * 0.5;
              return (
                <mesh key={`${i}-${j}`} position={[x, y, z]}>
                  <boxGeometry args={[0.05, 0.05, 0.05]} />
                  <meshStandardMaterial color={color} />
                </mesh>
              );
            })
          )}
        </>
      )}
      
      {pattern === 'waves' && (
        <>
          {Array.from({ length: actualDensity }).map((_, i) => 
            Array.from({ length: actualDensity }).map((_, j) => {
              const x = (i - actualDensity / 2) * 0.5;
              const z = (j - actualDensity / 2) * 0.5;
              const y = 0; // Will be animated in the useFrame
              return (
                <mesh key={`${i}-${j}`} position={[x, y, z]}>
                  <sphereGeometry args={[0.03, 8, 8]} />
                  <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
                </mesh>
              );
            })
          )}
        </>
      )}
    </group>
  );
};

const AnimatedBackground3D: React.FC<AnimatedBackgroundProps> = ({ 
  pattern = 'dots', 
  color = '#57C5B6',
  height = '300px',
  density = 20
}) => {
  const [hasError, setHasError] = useState(false);
  const isMobile = useIsMobile();
  
  const handleError = (error: any) => {
    console.error("Error in animated background:", error);
    setHasError(true);
  };
  
  if (hasError) {
    return (
      <div 
        className="w-full bg-gradient-to-r from-edwizer-blue/30 to-edwizer-teal/30"
        style={{ height }}
      />
    );
  }
  
  return (
    <div className="w-full overflow-hidden" style={{ height }}>
      <Canvas
        dpr={[1, isMobile ? 1.5 : 2]}
        camera={{ position: [0, 0, 10], fov: 60 }}
        onError={handleError}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <BackgroundPattern pattern={pattern} color={color} density={density} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
};

export default AnimatedBackground3D;
