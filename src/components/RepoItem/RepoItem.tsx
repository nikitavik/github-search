import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';


type RepositoryNode = {
  description: string;
  id: string;
  nameWithOwner: string;
  stargazerCount: number;
  primaryLanguage: { name: string; color: string };
};

interface IRepoItemProps {
  repoInfo: RepositoryNode;
}

const RepoItem: React.FC<IRepoItemProps> = ({ repoInfo }) => {
  return (
    <ListGroup.Item>
      <Card bsPrefix="list-group-item list-group-item-action">
        <Card.Body>
          <Card.Title>{repoInfo.nameWithOwner}</Card.Title>
          <Card.Text>{repoInfo.description}</Card.Text>
        </Card.Body>
        <Card.Footer bsPrefix="d-flex justify-content-between px-3">
          <Card.Text bsPrefix="d-flex">
            <div
              style={{
                display: 'inline-block',
                width: '20px',
                height: '20px',
                marginRight: '0.5rem',
                background: repoInfo.primaryLanguage.color,
                borderRadius: '50%',
              }}
            />
            <span>{repoInfo.primaryLanguage.name}</span>
          </Card.Text>
          <Card.Text>
            <span className="me-1">{repoInfo.stargazerCount}</span>
            <i className="far fa-star fa-lg" />
          </Card.Text>
        </Card.Footer>
      </Card>
    </ListGroup.Item>
  );
};

export default RepoItem;
