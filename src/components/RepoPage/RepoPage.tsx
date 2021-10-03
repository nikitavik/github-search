import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-apollo';

import { GET_REPO_BY_ID } from '../../queries/queries';
import { ILanguageInfo, IRepositoryNode } from '../RepoList/RepoList';

import Loader from '../Loader/Loader';
import LangBox from '../LangBox/LangBox';

type QueryParams = {
  id: string;
};

interface IRepoInfoExtended extends IRepositoryNode {
  issues: { totalCount: number };
  pullRequests: { totalCount: number };
  languages: { nodes: ILanguageInfo[]; __typename: 'LanguageConnection' };
}

const RepoPage: React.FC = () => {
  const params = useParams<QueryParams>();
  const { loading, error, data } = useQuery(GET_REPO_BY_ID, {
    variables: {
      repoId: params.id,
    },
  });
  const repoInfo: IRepoInfoExtended = data?.node;

  if (loading) return <Loader />;
  if (error) return <p>Something went wrong</p>;
  return (
    <>
      <Row bsPrefix="row border border-1 m-1">
        <Col xs={12} >
          <h2 className="m-3">{repoInfo.nameWithOwner}</h2>
        </Col>
        <Col xs={12}>
          <h5 className="mx-3">{repoInfo.description || 'No description'}</h5>
        </Col>
        <Col xs={12}>
          <div className="d-flex flex-wrap m-3">
            <LangBox name={repoInfo.primaryLanguage?.name} color={repoInfo.primaryLanguage?.color} primary={true}/>
            {
              repoInfo.languages.nodes.map((lang,idx) => {
                if (idx === 0) return
                return <LangBox key={lang.name + idx} name={lang.name} color={lang.color}/>;
              })
            }
          </div>
        </Col>
      </Row>
      <Row bsPrefix="row border border-1 m-1">
        <Col xs={4}>
          <div className="m-3 d-flex flex-nowrap align-items-baseline ">
            <span className="me-1">Pull Requests: {repoInfo.pullRequests.totalCount}</span>
            <i className='fas fa-code-branch'/>
          </div>
        </Col>
        <Col xs={4}>
          <div className="m-3 d-flex flex-nowrap align-items-baseline ">
            <span className="me-1">Issues: {repoInfo.issues.totalCount}</span>
            <i className='far fa-dot-circle'/>
          </div>
        </Col>
        <Col xs={4}>
          <div className="m-3 d-flex flex-nowrap align-items-baseline ">
            <span className="me-1">Stars: {repoInfo.stargazerCount}</span>
            <i className="far fa-star fa-lg" />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default RepoPage;
