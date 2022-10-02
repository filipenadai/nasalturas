/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  createContext,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { CELESTIALS } from '../contants/celestial';

export type CelestialBodyOptions =
  | 'SUN'
  | 'VENUS'
  | 'EARTH'
  | 'PARKER'
  | undefined;

interface CelestialBodyPropsData {
  selectedCelestialBody?: CelestialBodyOptions;
  selectCelestialBody: (celestialB: CelestialBodyOptions) => void;
  selectFocus: (selectFocus: CelestialBodyOptions) => void;
  focus: CelestialBodyOptions;
  parkerRef: any;
  sunRef: any;
  earthRef: any;
  cloudsRef: any;
  venusRef: any;
  nextStep: () => void;
  previousStep: () => void;
  resetSteps: () => void;
  stepIndex: number;
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
  const [stepIndex, setStepIndex] = useState(0);
  const [focus, setFocus] = useState<CelestialBodyOptions>('SUN');

  const parkerRef = useRef();
  const sunRef = useRef();
  const earthRef = useRef();
  const cloudsRef = useRef();
  const venusRef = useRef();

  const selectCelestialBody = useCallback(
    async (celestialB: CelestialBodyOptions) => {
      setSelectedCelestialBody(celestialB);
    },
    []
  );

  const selectFocus = useCallback((selectedFocus: CelestialBodyOptions) => {
    setFocus(selectedFocus);
  }, []);

  const nextStep = useCallback(() => {
    const contentLength = CELESTIALS.length;
    if (contentLength > 1 && stepIndex + 1 < contentLength) {
      setStepIndex(state => state + 1);
      setFocus(undefined);
      setFocus(CELESTIALS[stepIndex + 1].focus as CelestialBodyOptions);
    }
  }, [stepIndex]);

  const resetSteps = useCallback(() => {
    const contentLength = CELESTIALS.length;
    if (contentLength === stepIndex + 1) {
      setStepIndex(0);
      setFocus('SUN');
    }
  }, [stepIndex]);

  const previousStep = useCallback(() => {
    const contentLength = CELESTIALS.length;
    if (contentLength >= 2 && stepIndex - 1 < contentLength) {
      setStepIndex(state => state - 1);
      setFocus(undefined);
      setFocus(CELESTIALS[stepIndex - 1].focus as CelestialBodyOptions);
    }
  }, [stepIndex]);

  const CelestialBodyDataValue = useMemo(() => {
    return {
      selectedCelestialBody,
      selectCelestialBody,
      focus,
      selectFocus,
      parkerRef,
      sunRef,
      earthRef,
      venusRef,
      cloudsRef,
      nextStep,
      previousStep,
      resetSteps,
      stepIndex,
    };
  }, [
    selectCelestialBody,
    selectedCelestialBody,
    focus,
    stepIndex,
    resetSteps,
    selectFocus,
    nextStep,
    previousStep,
  ]);

  return (
    <CelestialBodyContext.Provider value={CelestialBodyDataValue}>
      {children}
    </CelestialBodyContext.Provider>
  );
}
