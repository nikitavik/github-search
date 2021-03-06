import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { IRepositoryNode } from '../RepoList/RepoList';

import LangBox from '../LangBox/LangBox';

type RepoItemProps = {
  repoInfo: IRepositoryNode;
};

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
            <LangBox
              color={repoInfo.primaryLanguage?.color}
              name={repoInfo.primaryLanguage?.name}
            />
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
