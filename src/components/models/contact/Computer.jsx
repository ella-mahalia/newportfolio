import { useGLTF } from "@react-three/drei";

export function Computer(props) {
  const { nodes, materials } = useGLTF(
    "/models/computer-optimized-transformed.glb"
  );

  return (
    <group {...props} dispose={null}>
      <group position={[-4.005, 67.549, 58.539]}>
        {/* White override for the chair (assumed part of desk) */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube000_ComputerDesk_0001_1.geometry}
        >
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        {/* Original floppy disk material */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube000_ComputerDesk_0001_2.geometry}
          material={materials["FloppyDisk.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/computer-optimized-transformed.glb");

export default Computer;
