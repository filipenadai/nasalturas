/* eslint-disable react/no-unknown-property */
import React, { Fragment } from 'react';
import { Stars } from '@react-three/drei';

export function Space(): JSX.Element {
  return (
    <>
      <ambientLight intensity={1} />
      <pointLight color="#f6f3ea" position={[100, 0, 0]} intensity={0.3} />
      <pointLight color="#f6f3ea" position={[-100, 0, 0]} intensity={0.4} />
      <pointLight color="#f6f3ea" position={[-100, -100, 0]} intensity={0.4} />
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade
      />
    </>
  );
}
