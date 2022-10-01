/* eslint-disable react/no-unknown-property */
import React from 'react';
import { useLoader } from '@react-three/fiber';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function Parker(): JSX.Element {
  const object = useLoader(GLTFLoader, '/PSP.glb');

  return (
    <>
      <ambientLight intensity={1} position={[4, 4, 2]} />
      <mesh scale={0.1} position={[3, 0, 3]} name="PARKER">
        <primitive object={object.scene} />
      </mesh>
    </>
  );
}
