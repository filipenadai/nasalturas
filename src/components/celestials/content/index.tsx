import { useContext } from 'react';
import { CELESTIALS } from '../../../contants/celestial';
import { CelestialBodyContext } from '../../../contexts/CelestialBodyContext';
import { Container, Title, Content } from './styles';

export function CelestialContent(): JSX.Element {
  const { stepIndex } = useContext(CelestialBodyContext);

  return (
    <Container>
      {CELESTIALS[stepIndex]?.title && (
        <Title>{CELESTIALS[stepIndex].title}</Title>
      )}
      {CELESTIALS[stepIndex]?.content && (
        <Content>{CELESTIALS[stepIndex].content}</Content>
      )}
    </Container>
  );
}
