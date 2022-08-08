import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

// 3d model
function Model(props) {
  const { nodes, materials } = useGLTF('/smiley/scene.gltf');
  return (
    <group {...props} dispose={null} scale={2}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_4.geometry} material={materials.color} />
          <mesh
            geometry={nodes.Object_5.geometry}
            material={materials.cheeks}
          />
        </group>
      </group>
    </group>
  );
}

const ThreeDSmiley = () => {
  return (
    <>
      <Canvas style={{ width: '10rem' }}>
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
            enableZoom={true}
            enableRotate={true}
          />
        </Suspense>
      </Canvas>
    </>
  );
};

export default ThreeDSmiley;
