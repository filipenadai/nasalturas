/* eslint-disable react/no-unknown-property */
/* eslint-disable no-sequences */
import { Bounds, ContactShadows, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Earth } from '../../celestials/earth';
import { Parker } from '../../celestials/parker';
import { Space } from '../../celestials/space';
import { Sun } from '../../celestials/sun';
import { Venus } from '../../celestials/venus';
import { SelectToZoom } from './selectToZoom';

export function Home(): JSX.Element {
  return (
    <div
      style={{
        width: '100vw',
        height: 'calc(100vh - 10rem)',
        background: '#000',
      }}
    >
      <Canvas camera={{ position: [2, 2, 2], fov: 50 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1.2}>
            <SelectToZoom>
              <Sun />
              <Venus />
              <Parker />
              <Earth />
            </SelectToZoom>
          </Bounds>
          <Space />

          <OrbitControls
            makeDefault
            target={[0, 0, 0]}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 1.75}
          />
          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -35, 0]}
            opacity={0.2}
            width={200}
            height={200}
            blur={1}
            far={50}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
