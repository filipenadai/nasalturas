/* eslint-disable react/no-unknown-property */
import React, { useContext } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

import { TextureLoader } from 'three';
import { CelestialBodyContext } from '../../contexts/CelestialBodyContext';

export function Earth(): JSX.Element {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [
      '/earth/8k_earth_daymap.jpg',
      '/earth/8k_earth_normal_map.jpg',
      '/earth/8k_earth_specular_map.jpg',
      '/earth/8k_earth_clouds.jpg',
    ]
  );

  const { earthRef, cloudsRef } = useContext(CelestialBodyContext);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      <mesh ref={cloudsRef} position={[-4, 0, -4]} name="EARTH">
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[-4, 0, -4]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
      </mesh>
    </>
  );
}
