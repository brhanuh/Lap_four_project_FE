import React, { useContext, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Button from '../Button';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';
import styles from './brain.module.css';
import AppContext from '../../HelperContext/Context';

// 3d model

const ThreeDBrain = () => {
  const { brainColor } = useContext(AppContext);
  function Model(props) {
    const brain = useRef();
    useFrame(({ clock }) => {
      brain.current.rotation.y = clock.getElapsedTime();
    });
    const { nodes, materials } = useGLTF(`${brainColor}/scene.gltf`);
    return (
<<<<<<< HEAD
      <group ref={brain} {...props} dispose={null} scale={1.5}>
=======
      <group ref={brain} {...props} dispose={null} scale={1.7}>
>>>>>>> d1325f0bc8d55f33b25c7859ec16d842db794b8f
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, -8, 0]}>
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
