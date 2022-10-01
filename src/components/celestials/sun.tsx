/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';

import { TextureLoader } from 'three';

export function Sun(): JSX.Element {
  const normalMap = useLoader(TextureLoader, '/sun.jpeg');

  const sunRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    sunRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <mesh ref={sunRef} position={[0, 0, 0]} name="SUN">
      <sphereGeometry args={[1.5, 64, 64]} />
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
