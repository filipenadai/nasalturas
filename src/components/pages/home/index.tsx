/* eslint-disable react/no-unknown-property */
/* eslint-disable no-sequences */
import { Bounds, ContactShadows, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { CaretLeft, CaretRight, Repeat } from 'phosphor-react';
import { Suspense, useContext } from 'react';
import { CELESTIALS } from '../../../contants/celestial';
import { CelestialBodyContext } from '../../../contexts/CelestialBodyContext';
import { CelestialContent } from '../../celestials/content';
import { Earth } from '../../celestials/earth';
import { Parker } from '../../celestials/parker';
import { Space } from '../../celestials/space';
import { Sun } from '../../celestials/sun';
import { Venus } from '../../celestials/venus';
import { SelectToZoom } from './selectToZoom';
import { ControlButton, ControlsContainer } from './styles';

export function Home(): JSX.Element {
  const {
    nextStep,
    previousStep,
    stepIndex,
    selectedCelestialBody,
    resetSteps,
  } = useContext(CelestialBodyContext);

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
          <Bounds fit clip margin={1.2}>
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
      <ControlsContainer>
        {CELESTIALS.length > 1 &&
          stepIndex !== 0 &&
          CELESTIALS.length !== stepIndex + 1 && (
            <ControlButton onClick={previousStep}>
              <CaretLeft size={24} />
            </ControlButton>
          )}
        {CELESTIALS.length > 1 &&
          CELESTIALS.length !== stepIndex + 1 &&
          stepIndex !== CELESTIALS.length - 1 && (
            <ControlButton onClick={nextStep}>
              <CaretRight size={24} />
            </ControlButton>
          )}
        {CELESTIALS.length === stepIndex + 1 && (
          <ControlButton onClick={resetSteps}>
            <Repeat size={24} />
          </ControlButton>
        )}
      </ControlsContainer>
      {selectedCelestialBody && <CelestialContent />}
    </div>
  );
}
