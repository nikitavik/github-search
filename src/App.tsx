import React from 'react';
import { Container } from 'react-bootstrap';
import MainPage from './components/MainPage/MainPage';

const App: React.FC = () => {
  return (
    <Container fluid={true}>
      <MainPage />
    </Container>
  );
};

export default App;
