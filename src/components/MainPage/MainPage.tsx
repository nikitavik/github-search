import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SearchBar from '../SearchBar/SearchBar';
import RepoList from '../RepoList/RepoList';

const MainPage: React.FC = () => {

  return (
    <>
      <Row>
        <Col xs={12}>
          <h1>GitHub Search</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <SearchBar />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <RepoList />
        </Col>
      </Row>
    </>
  );
};

export default MainPage;
