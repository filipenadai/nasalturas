import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #000;
`;

export const Logo = styled.img`
  height: 100%;
  object-fit: contain;
`;

export const ControlsContainer = styled.div`
  position: absolute;
  left: 10%;
  display: flex;
  gap: 1rem;
  align-content: center;
  justify-content: center;
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
