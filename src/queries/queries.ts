import { gql } from 'apollo-boost';

const GET_SEARCH_RESULTS = gql`
  query ($searchQuery: String!, $pageSize: Int, $afterCursor: String) {
    search(query: $searchQuery, type: REPOSITORY, first: $pageSize, after: $afterCursor) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            id
            nameWithOwner
            description
            primaryLanguage {
              name
              color
            }
            stargazerCount
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

export { GET_SEARCH_RESULTS };
