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
  const {
    selectCelestialBody,
    parkerRef,
    focus,
    earthRef,
    venusRef,
    sunRef,
    selectFocus,
  } = useContext(CelestialBodyContext);

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
      selectFocus(undefined);
      return e.button === 0 && api.refresh().fit();
    },
    [api, selectCelestialBody, selectFocus]
  );

  useEffect(() => {
    if (focus) {
      switch (focus) {
        case 'EARTH':
          console.log(earthRef.current);
          selectCelestialBody(earthRef.current.name as CelestialBodyOptions);
          api.refresh(earthRef.current).fit();
          break;
        case 'PARKER':
          selectCelestialBody(parkerRef.current.name as CelestialBodyOptions);
          api.refresh(parkerRef.current).fit();
          break;
        case 'SUN':
          selectCelestialBody(sunRef.current.name as CelestialBodyOptions);
          api.refresh(sunRef.current).fit();
          break;
        case 'VENUS':
          selectCelestialBody(venusRef.current.name as CelestialBodyOptions);
          api.refresh(venusRef.current).fit();
          break;
        default:
          selectCelestialBody(undefined);
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
