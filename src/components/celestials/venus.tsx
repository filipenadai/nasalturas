/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';

import { TextureLoader } from 'three';

export function Venus(): JSX.Element {
  const normalMap = useLoader(TextureLoader, '/venus.jpeg');

  const venusRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    venusRef.current.rotation.y = elapsedTime / 12;
  });

  return (
    <mesh ref={venusRef} position={[2, 0, -2]} name="VENUS">
      <sphereGeometry args={[0.1, 32, 32]} />
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
