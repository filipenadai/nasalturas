/* eslint-disable react/no-unknown-property */
import React, { useContext } from 'react';
import { useLoader } from '@react-three/fiber';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { CelestialBodyContext } from '../../contexts/CelestialBodyContext';

export function Parker(): JSX.Element {
  const object = useLoader(GLTFLoader, '/PSP.glb');
  const { parkerRef } = useContext(CelestialBodyContext);

  return (
    <>
      <ambientLight intensity={1} position={[4, 4, 2]} />
      <mesh scale={0.1} position={[3, 0, 3]} name="PARKER" ref={parkerRef}>
        <primitive object={object.scene} />
      </mesh>
    </>
  );
}
