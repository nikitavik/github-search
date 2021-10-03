import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import RepoItem from '../RepoItem/RepoItem';
import { useQuery } from 'react-apollo';
import { GET_SEARCH_RESULTS } from '../../queries/queries';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import Loader from '../Loader/Loader';

interface IRepoListProps {
  searchQuery: string;
}

type SearchResult = {
  search: {
    edges: SearchResultItem[];
    repositoryCount: number;
    pageInfo: PageInfo;
    __typename: 'SearchResultItemConnection';
  };
};

type SearchResultItem = {
  node: RepositoryNode;
  __typename: 'SearchResultItem';
};

type PageInfo = {
  endCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  __typename: 'PageInfo';
};

type RepositoryNode = {
  description: string;
  id: string;
  nameWithOwner: string;
  stargazerCount: number;
  primaryLanguage: { name: string; color: string };
};

const PAGE_SIZE = 5;

const RepoList: React.FC<IRepoListProps> = ({ searchQuery }) => {
  const [repos, setRepos] = useState<Array<SearchResultItem>>([]);
  const [moreLoading, setMoreLoading] = useState(false);

  const { loading, error, data, fetchMore } = useQuery(GET_SEARCH_RESULTS, {
    variables: {
      searchQuery: searchQuery,
      pageSize: PAGE_SIZE,
      afterCursor: null,
    },
  });
  const fetchMoreHandler = () => {
    setMoreLoading(true);
    fetchMore({
      variables: {
        afterCursor: data?.search?.pageInfo?.endCursor,
        pageSize: PAGE_SIZE,
        searchQuery: searchQuery,
      },
      updateQuery: (previousResult: SearchResult, { fetchMoreResult }) => {
        return fetchMoreResult
          ? {
              search: {
                __typename: previousResult.search.__typename,
                repositoryCount: previousResult.search.repositoryCount,
                edges: [
                  ...previousResult.search.edges,
                  ...fetchMoreResult.search.edges,
                ],
                pageInfo: fetchMoreResult.search.pageInfo,
              },
            }
          : '';
      },
    })
      .then(() => {
        setMoreLoading(false);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  useEffect(() => {
    if (!loading && data) {
      setRepos(data?.search.edges);
    }
  }, [loading, data]);

  if (loading) return <Loader />;
  if (repos.length === 0)
    return <p className="text-center p-4 h4">No Results</p>;
  if (error) return <p className="text-center p-4 h-4">Something went wrong</p>;
  return (
    <ListGroup bsPrefix="mt-3">
      {repos.map((repo: SearchResultItem) => {
        const repoNode: RepositoryNode = repo.node;
        return <RepoItem key={repoNode.id} repoInfo={repoNode} />;
      })}
      {data.search.pageInfo.hasNextPage ? (
        <div className="d-flex justify-content-center p-3">
          <PrimaryButton
            onClick={fetchMoreHandler}
            text="Fetch more"
            color="primary"
            size="lg"
            disabled={moreLoading}
          />
        </div>
      ) : (
        ''
      )}
    </ListGroup>
  );
};

export default RepoList;
