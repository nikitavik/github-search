import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import SearchBar from '../SearchBar/SearchBar';
import RepoList from '../RepoList/RepoList';

const MainPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <>
      <Row>
        <Col xs={12}>
          <h1>GitHub Search</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <SearchBar searchQuery={searchQuery} onChange={(value) => setSearchQuery(value)}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <RepoList searchQuery={searchQuery}/>
        </Col>
      </Row>
    </>
  );
};

export default MainPage;
