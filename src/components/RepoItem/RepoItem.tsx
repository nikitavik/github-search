import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { IRepositoryNode } from '../RepoList/RepoList';

type RepoItemProps = {
  repoInfo: IRepositoryNode;
}

const RepoItem: React.FC<RepoItemProps> = ({ repoInfo }) => {
  const history = useHistory();
  const openRepoHandler = () => {
    history.push(`/repository/${repoInfo.id}`);
  };
  return (
    <ListGroup.Item bsPrefix="border-none p-1">
      <Card
        bsPrefix="list-group-item list-group-item-action"
        style={{ cursor: 'pointer' }}
        onClick={openRepoHandler}
      >
        <Card.Body>
          <Card.Title>{repoInfo.nameWithOwner}</Card.Title>
          <Card.Text>{repoInfo.description || 'No description'}</Card.Text>
        </Card.Body>
        <Card.Footer bsPrefix="d-flex justify-content-between px-3">
          <Card.Text as="div" bsPrefix="d-flex">
            <div
              style={{
                display: 'inline-block',
                width: '20px',
                height: '20px',
                marginRight: '0.5rem',
                background: repoInfo.primaryLanguage?.color || '#111',
                borderRadius: '50%',
              }}
            />
            <span>{repoInfo.primaryLanguage?.name || 'Unknown'}</span>
          </Card.Text>
          <Card.Text as="div">
            <span className="me-1">{repoInfo.stargazerCount}</span>
            <i className="far fa-star fa-lg" />
          </Card.Text>
        </Card.Footer>
      </Card>
    </ListGroup.Item>
  );
};

export default RepoItem;
