import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.23);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.6px);
  -webkit-backdrop-filter: blur(4.6px);
  border: 1px solid rgba(255, 255, 255, 0.51);
`;

export const Title = styled.h1`
  max-width: 600px;
  font-size: 1.75rem;
  color: #fff;
  font-family: ${({ theme }) => theme.font.primary};
  margin-bottom: 1rem;
`;

export const Content = styled.p`
  max-width: 600px;
  font-size: 1.5rem;
  color: #fff;
  font-family: ${({ theme }) => theme.font.primary};
`;

export const ControlsContainer = styled.div`
  padding-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: flex-end;
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
