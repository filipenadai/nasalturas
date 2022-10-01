import React, { createContext, useCallback, useMemo, useState } from 'react';

export type CelestialBodyOptions =
  | 'SUN'
  | 'VENUS'
  | 'EARTH'
  | 'PARKER'
  | undefined;

interface CelestialBodyPropsData {
  selectedCelestialBody?: CelestialBodyOptions;
  selectCelestialBody: (celestialB: CelestialBodyOptions) => void;
}

interface CelestialBodyProviderProps {
  children: React.ReactNode;
}

export const CelestialBodyContext = createContext<CelestialBodyPropsData>(
  {} as CelestialBodyPropsData
);

export function CelestialBodyProvider({
  children,
}: CelestialBodyProviderProps): JSX.Element {
  const [selectedCelestialBody, setSelectedCelestialBody] =
    useState<CelestialBodyOptions>();

  const selectCelestialBody = useCallback(
    async (celestialB: CelestialBodyOptions) => {
      setSelectedCelestialBody(celestialB);
    },
    []
  );

  const CelestialBodyDataValue = useMemo(() => {
    return {
      selectedCelestialBody,
      selectCelestialBody,
    };
  }, [selectCelestialBody, selectedCelestialBody]);

  return (
    <CelestialBodyContext.Provider value={CelestialBodyDataValue}>
      {children}
    </CelestialBodyContext.Provider>
  );
}
