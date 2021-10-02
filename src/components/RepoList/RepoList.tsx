import React, { useEffect, useState } from 'react';
import {ListGroup} from "react-bootstrap";
import RepoItem from "../RepoItem/RepoItem";
import { useQuery } from 'react-apollo';
import { GET_SEARCH_RESULTS } from '../../queries/queries';

type SearchResultItem = {
  node: RepositoryNode,
  __typename: "SearchResultItem"
}
type RepositoryNode = {
  description: string
  id: string
  nameWithOwner: string,
  stargazerCount: number
  primaryLanguage: {name: string, color: string}
}

const RepoList: React.FC = () => {
    const [repos, setRepos] = useState([])
    const { loading, error, data, fetchMore } = useQuery(GET_SEARCH_RESULTS, {variables: {searchQuery: "react", pageSize: 5}});

    useEffect(() =>{
        if(!loading && data){
          setRepos(data?.search.edges);
        }
      }, [loading, data]
    )

    if (loading) return <div>Loading...</div>
    if (error) return <div>Something went wrong</div>
    return(
        <ListGroup bsPrefix="mt-3">
          {
            repos.map((repo: SearchResultItem) => {
                const repoNode: RepositoryNode = repo.node
                return <RepoItem key={repoNode.id} repoInfo={repoNode}/>
            })
          }
        </ListGroup>
    )
}

export default RepoList