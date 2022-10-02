import styled from 'styled-components';

export const ControlsContainer = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 1rem;
`;

export const ControlButton = styled.button`
  width: 48px;
  height: 48px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 50%;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
