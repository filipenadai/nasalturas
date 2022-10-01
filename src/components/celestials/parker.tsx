/* eslint-disable react/no-unknown-property */
import React from 'react';
import { useLoader } from '@react-three/fiber';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function Parker(): JSX.Element {
  const object = useLoader(GLTFLoader, '/PSP.glb');

  return (
    <>
      <ambientLight intensity={1} position={[2, 2, 1]} />
      <mesh scale={0.05} position={[1, 1, 1]} name="PARKER">
        <primitive object={object.scene} />
      </mesh>
    </>
  );
}
