import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const RepoPage: React.FC = () => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <Row>
        <Col xs={12}>
          <h2>Repo Name</h2>
        </Col>
      </Row>
    </>
  );
};

export default RepoPage;
