import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';
import styles from './brain.module.css';

// 3d model
function Model(props) {
  const { nodes, materials } = useGLTF('/brain multi color/scene.gltf');
  return (
    <group {...props} dispose={null} scale={2}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 1.8, 7.8, 0]}>
          <mesh
            geometry={nodes.Brain_Part_01_Colour_Brain_Texture_0.geometry}
            material={materials.Colour_Brain_Texture}
          />
          <mesh
            geometry={nodes.Brain_Part_02_Colour_Brain_Texture_0.geometry}
            material={materials.Colour_Brain_Texture}
          />
          <mesh
            geometry={nodes.Brain_Part_03_Colour_Brain_Texture_0.geometry}
            material={materials.Colour_Brain_Texture}
          />
          <mesh
            geometry={nodes.Brain_Part_04_Colour_Brain_Texture_0.geometry}
            material={materials.Colour_Brain_Texture}
          />
          <mesh
            geometry={nodes.Brain_Part_05_Colour_Brain_Texture_0.geometry}
            material={materials.Colour_Brain_Texture}
          />
          <mesh
            geometry={nodes.Brain_Part_06_Colour_Brain_Texture_0.geometry}
            material={materials.Colour_Brain_Texture}
          />
        </group>
      </group>
    </group>
  );
}

const ThreeDBrain = () => {
  return (
    <div>
      <Canvas
        style={{
          height: '40rem',

          // width: '40rem',
          // position: 'absolute',
        }}
        // className={styles.logo}
      >
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
            enableZoom={false}
            enableRotate={true}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeDBrain;
