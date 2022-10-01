/* eslint-disable no-sequences */
/* eslint-disable react/no-unknown-property */
import { useBounds } from '@react-three/drei';
import { useContext } from 'react';
import {
  CelestialBodyContext,
  CelestialBodyOptions,
} from '../../../contexts/CelestialBodyContext';

interface SelectToZoomProps {
  children: React.ReactNode;
}

export function SelectToZoom({ children }: SelectToZoomProps): JSX.Element {
  const api = useBounds();
  const { selectCelestialBody } = useContext(CelestialBodyContext);
  return (
    <group
      onClick={e => {
        selectCelestialBody(e.object.name as CelestialBodyOptions);
        return e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).fit();
      }}
      onPointerMissed={e => {
        selectCelestialBody(undefined);
        return e.button === 0 && api.refresh().fit();
      }}
    >
      {children}
    </group>
  );
}
