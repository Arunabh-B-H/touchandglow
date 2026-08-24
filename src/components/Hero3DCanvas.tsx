import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Sparkles, MeshDistortMaterial, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// Interactive 3D Gold Luxury Gem & Cosmetic Vessel
function Luxury3DObject({ themeColor = '#D4AF37' }: { themeColor?: string }) {
  const meshRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(t * 0.4) * 0.4;
      meshRef.current.rotation.x = Math.cos(t * 0.3) * 0.15;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.5;
      ringRef.current.rotation.x = Math.sin(t * 0.6) * 0.3;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y = -t * 0.6;
    }
  });

  return (
    <group ref={meshRef} position={[0, 0.2, 0]}>
      {/* Outer Floating Ring (Crown/Halo effect) */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1.7, 0.03, 32, 100]} />
        <meshStandardMaterial
          color="#F3E5AB"
          metalness={0.9}
          roughness={0.1}
          emissive="#AA820A"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Inner Floating Secondary Ring */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.1, 0.02, 32, 100]} />
        <meshStandardMaterial
          color="#D4AF37"
          metalness={0.95}
          roughness={0.05}
          wireframe
        />
      </mesh>

      {/* Core Glowing Sculptural Gem Container */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[1.1, 2]} />
          <MeshDistortMaterial
            color={themeColor}
            envMapIntensity={1.5}
            clearcoat={1}
            clearcoatRoughness={0.1}
            metalness={0.85}
            roughness={0.15}
            distort={0.25}
            speed={2}
          />
        </mesh>
      </Float>

      {/* Inner Core Light Orb */}
      <pointLight color="#FFF5EE" intensity={3} distance={5} />
    </group>
  );
}

export const Hero3DCanvas: React.FC<{ themeColor?: string }> = ({ themeColor = '#D4AF37' }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-full h-[450px] sm:h-[550px] lg:h-[650px] relative flex items-center justify-center cursor-grab active:cursor-grabbing"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow Backdrop halo */}
      <div className="absolute inset-0 bg-radial from-[#D4AF37]/15 via-purple-900/5 to-transparent blur-3xl rounded-full pointer-events-none" />

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#FFF5EE" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#AA820A" />
        <pointLight position={[0, 5, 2]} intensity={2.5} color="#D4AF37" />

        {/* Ambient Gold Particles */}
        <Sparkles
          count={120}
          scale={[8, 8, 8]}
          size={hovered ? 4.5 : 3}
          speed={0.6}
          opacity={0.8}
          color="#F3E5AB"
        />

        <Sparkles
          count={50}
          scale={[5, 5, 5]}
          size={5}
          speed={0.8}
          opacity={0.9}
          color="#FFF5EE"
        />

        <Luxury3DObject themeColor={themeColor} />

        <ContactShadows
          position={[0, -2.2, 0]}
          opacity={0.6}
          scale={7}
          blur={2.5}
          far={4}
          color="#000000"
        />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 3}
        />

        <Environment preset="studio" />
      </Canvas>

      {/* 3D Interaction Hint Badge */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#14141A]/80 border border-[#D4AF37]/30 backdrop-blur-md text-[11px] text-zinc-300 font-medium tracking-wider uppercase flex items-center space-x-2 pointer-events-none shadow-lg">
        <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
        <span>Drag & Rotate 3D Model</span>
      </div>
    </div>
  );
};
