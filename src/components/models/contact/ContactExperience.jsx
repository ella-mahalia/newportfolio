import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Computer from "./Computer";

const ContactExperience = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 3, 7], fov: 45 }}
      style={{ background: "#ffc0cb" }} // 🌸 PINK BACKGROUND
    >
      {/* 🌸 Soft pink ambient light */}
      <ambientLight intensity={0.5} color="#ffb6c1" />

      {/* 🌸 Warm directional lights */}
      <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffb6c1" />
      <directionalLight
        position={[5, 9, 1]}
        castShadow
        intensity={2.5}
        color="#ffb6c1"
      />

      {/* 👇 Controls */}
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {/* 🌸 Floor mesh with pink material */}
      <group scale={[1, 1, 1]}>
        <mesh
          receiveShadow
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color="#ffc0cb" />
        </mesh>
      </group>

      {/* 🌸 Computer model */}
      <group scale={0.03} position={[0, -1.49, -2]} castShadow>
        <Computer />
      </group>
    </Canvas>
  );
};

export default ContactExperience;
