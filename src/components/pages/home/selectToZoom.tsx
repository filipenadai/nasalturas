/* eslint-disable no-sequences */
/* eslint-disable react/no-unknown-property */
import { useBounds } from '@react-three/drei';
import { ThreeEvent } from '@react-three/fiber';
import { useCallback, useContext, useEffect } from 'react';
import {
  CelestialBodyContext,
  CelestialBodyOptions,
} from '../../../contexts/CelestialBodyContext';

interface SelectToZoomProps {
  children: React.ReactNode;
}

export function SelectToZoom({ children }: SelectToZoomProps): JSX.Element {
  const api = useBounds();
  const { selectCelestialBody, parkerRef, focus, earthRef, venusRef, sunRef } =
    useContext(CelestialBodyContext);

  const handleClickCelestial = useCallback(
    (e: ThreeEvent<MouseEvent>) => {
      selectCelestialBody(e.object.name as CelestialBodyOptions);
      return e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).fit();
    },
    [api, selectCelestialBody]
  );

  const handleClickMissed = useCallback(
    (e: MouseEvent) => {
      selectCelestialBody(undefined);
      return e.button === 0 && api.refresh().fit();
    },
    [api, selectCelestialBody]
  );

  useEffect(() => {
    if (focus) {
      switch (focus) {
        case 'EARTH':
          selectCelestialBody(earthRef.current.name as CelestialBodyOptions);
          api.refresh(earthRef.current).fit();
          break;
        case 'PARKER':
          api.refresh(parkerRef.current).fit();
          break;
        case 'SUN':
          api.refresh(sunRef.current).fit();
          break;
        case 'VENUS':
          api.refresh(venusRef.current).fit();
          break;
        default:
          api.refresh().fit();
          break;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focus]);

  return (
    <group onClick={handleClickCelestial} onPointerMissed={handleClickMissed}>
      {children}
    </group>
  );
}
