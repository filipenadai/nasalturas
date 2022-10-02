/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import React, { createContext, useCallback, useMemo, useState } from 'react';
import { INTRODUCTION } from '../contants/introduction';

interface IntroductionModalPropsData {
  stepIndex: number;
  isModalOpen: boolean;
  nextStep: () => void;
  previousStep: () => void;
  closeIntroduction: () => void;
}

interface IntroductionModalProviderProps {
  children: React.ReactNode;
}

export const IntroductionModalContext =
  createContext<IntroductionModalPropsData>({} as IntroductionModalPropsData);

export function IntroductionModalProvider({
  children,
}: IntroductionModalProviderProps): JSX.Element {
  const [stepIndex, setStepIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextStep = useCallback(() => {
    const contentLength = INTRODUCTION.length;
    if (contentLength > 1 && stepIndex + 1 < contentLength) {
      setStepIndex(state => state + 1);
    }
  }, [stepIndex]);

  const previousStep = useCallback(() => {
    const contentLength = INTRODUCTION.length;
    if (contentLength >= 2 && stepIndex - 1 < contentLength) {
      setStepIndex(state => state - 1);
    }
  }, [stepIndex]);

  const closeIntroduction = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const IntroductionModalDataValue = useMemo(() => {
    return {
      nextStep,
      previousStep,
      stepIndex,
      closeIntroduction,
      isModalOpen,
    };
  }, [stepIndex, previousStep, nextStep, closeIntroduction, isModalOpen]);

  return (
    <IntroductionModalContext.Provider value={IntroductionModalDataValue}>
      {children}
    </IntroductionModalContext.Provider>
  );
}
