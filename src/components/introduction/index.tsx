import { useContext } from 'react';
import { CaretLeft, CaretRight, SkipForward } from 'phosphor-react';
import Modal from 'react-modal';
import { INTRODUCTION } from '../../contants/introduction';
import { IntroductionModalContext } from '../../contexts/IntroductionModalContext';
import {
  Container,
  Content,
  ControlButton,
  ControlsContainer,
  Title,
} from './styles';

const customStyles: Modal.Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'transparent',
    border: 'none',
  },
  overlay: {
    background: 'rgba(0,0,0, 0.5)',
  },
};

export function Introduction(): JSX.Element {
  const { stepIndex, nextStep, previousStep, closeIntroduction, isModalOpen } =
    useContext(IntroductionModalContext);
  return (
    <Modal
      isOpen={isModalOpen}
      // onAfterOpen={afterOpenModal}
      // onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Container>
        {INTRODUCTION[stepIndex]?.title && (
          <Title>{INTRODUCTION[stepIndex].title}</Title>
        )}
        <Content>{INTRODUCTION[stepIndex].content}</Content>
        <ControlsContainer>
          {INTRODUCTION.length > 1 && stepIndex !== 0 && (
            <ControlButton onClick={previousStep}>
              <CaretLeft size={24} />
            </ControlButton>
          )}
          {INTRODUCTION.length > 1 && stepIndex !== INTRODUCTION.length - 1 && (
            <ControlButton onClick={nextStep}>
              <CaretRight size={24} />
            </ControlButton>
          )}
          <ControlButton onClick={closeIntroduction}>
            <SkipForward size={24} />
          </ControlButton>
        </ControlsContainer>
      </Container>
    </Modal>
  );
}
