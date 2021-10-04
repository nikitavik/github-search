import React, { useEffect, useState } from 'react';
import { useRouterQuery } from '../../hooks/RouterQuery';
import { useHistory } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

import SearchBar from '../SearchBar/SearchBar';
import RepoList from '../RepoList/RepoList';

const MainPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();
  const routerQuery = useRouterQuery();

  useEffect(() => {
    const routerSearchQuery = routerQuery.get('search');
    if (routerSearchQuery) {
      setSearchQuery(routerSearchQuery);
    }
  }, []);

  return (
    <>
      <Row>
        <Col xs={12}>
          <h1>GitHub Search</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <SearchBar
            searchQuery={searchQuery}
            onChange={(value) => {
              history.replace(`/?search=${value}`);
              setSearchQuery(value);
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <RepoList searchQuery={searchQuery} />
        </Col>
      </Row>
    </>
  );
};

export default MainPage;
