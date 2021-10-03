import React from 'react';
import { Container } from 'react-bootstrap';
import { Redirect, Route, Switch } from 'react-router-dom';

import MainPage from './components/MainPage/MainPage';
import RepoPage from './components/RepoPage/RepoPage';

const App: React.FC = () => {
  return (
    <Container fluid={true}>
      <Switch>
        <Route exact path="/repository/:id" component={RepoPage} />
        <Route path="/" component={MainPage} />
        <Redirect to="/" />
      </Switch>
    </Container>
  );
};

export default App;
