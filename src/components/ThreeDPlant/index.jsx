import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

// 3d model
function Model(props) {
  const { nodes, materials } = useGLTF('/lily/scene.gltf');
  return (
    <group {...props} dispose={null} scale={0.1}>
      <group rotation={[-Math.PI / 1, 1, 0]}>
        <group rotation={[Math.PI / 1, 1, 0]}>
          <group
            position={[0.75, 74.13, -0.17]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.defaultMaterial.geometry}
              material={materials.Leaf2}
            />
            <mesh
              geometry={nodes.defaultMaterial_1.geometry}
              material={materials.Leaf1}
            />
          </group>
          <group
            position={[0, 0.57, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.defaultMaterial_2.geometry}
              material={materials.material}
            />
          </group>
        </group>
      </group>
    </group>
  );
}
const ThreeDPlant = () => {
  return (
    <div>
      <Canvas style={{ height: '40rem' }}>
        {/* suspense is required */}
        <Suspense fallback={null}>
          <ambientLight />
          <spotLight
            intensity={0.9}
            angle={0.1}
            penumbra={1}
            position={[10, 15, 10]}
            castShadow
          />
          <Model />
          {/*OrbCon is optional adds zoom rotation pan */}
          <OrbitControls
            enablePan={true}
            // enableZoom={true}
            enableRotate={true}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeDPlant;
