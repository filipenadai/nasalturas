/* eslint-disable react/no-unknown-property */
import React, { useContext } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';

import { TextureLoader } from 'three';
import { CelestialBodyContext } from '../../contexts/CelestialBodyContext';

export function Venus(): JSX.Element {
  const normalMap = useLoader(TextureLoader, '/venus.jpeg');

  const { venusRef } = useContext(CelestialBodyContext);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    venusRef.current.rotation.y = elapsedTime / 12;
  });

  return (
    <mesh ref={venusRef} position={[6, 0, -6]} name="VENUS">
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        map={normalMap}
        normalMap={normalMap}
        lightMap={normalMap}
        metalness={0.4}
        roughness={0.7}
        lightMapIntensity={1}
      />
    </mesh>
  );
}
