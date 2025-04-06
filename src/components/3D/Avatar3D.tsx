
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera, Float } from '@react-three/drei';
import { useIsMobile } from '@/hooks/use-mobile';

const AvatarModel = ({ modelPath = "/models/avatar.glb" }) => {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef();
  
  // Simple animation
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    }
  });
  
  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <primitive 
        ref={modelRef} 
        object={scene} 
        scale={1.8} 
        position={[0, -1.5, 0]}
      />
    </Float>
  );
};

const Avatar3D = ({ modelPath, background = "transparent" }) => {
  const isMobile = useIsMobile();
  
  // Fallback if WebGL not supported or errors
  const [hasError, setHasError] = React.useState(false);
  
  const handleError = (error) => {
    console.error('Error in Avatar3D:', error);
    setHasError(true);
  };
  
  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-edwizer-blue to-edwizer-teal rounded-lg">
        <div className="text-center p-6">
          <h3 className="text-xl font-bold text-white">Interactive 3D Avatar</h3>
          <p className="text-white/80">Your educational journey companion</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="w-full h-full" style={{ background }}>
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: isMobile ? 50 : 45 }}
        dpr={[1, isMobile ? 1.5 : 2]}
        onError={handleError}
      >
        <ambientLight intensity={0.7} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={0.7} castShadow />
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        
        <AvatarModel modelPath={modelPath} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          rotateSpeed={0.5}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default Avatar3D;
