import { gql } from 'apollo-boost';

const GET_SEARCH_RESULTS = gql`
  query ($searchQuery: String!, $pageSize: Int, $afterCursor: String) {
    search(
      query: $searchQuery
      type: REPOSITORY
      first: $pageSize
      after: $afterCursor
    ) {
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

const GET_REPO_BY_ID = gql`
  query ($repoId: ID!) {
    node(id: $repoId) {
      ... on Repository {
        id
        nameWithOwner
        description
        pullRequests {
          totalCount
        }
        issues {
          totalCount
        }
        languages(first: 100) {
          nodes {
            color
            name
          }
        }
        primaryLanguage {
          name
          color
        }
        stargazerCount
      }
    }
  }
`;

export { GET_SEARCH_RESULTS, GET_REPO_BY_ID };
