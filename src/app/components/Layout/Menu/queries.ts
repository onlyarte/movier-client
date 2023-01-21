import { gql } from '@apollo/client';

export const FIND_MOVIES = gql`
  query FindMovies($input: String!) {
    search(input: $input) {
      id
      title
      poster
      year
      genres
    }
  }
`;
