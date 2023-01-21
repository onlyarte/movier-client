import { apolloClient } from '@/utils/apollo';
import { gql } from '@apollo/client';

const GET_MOVIE = gql`
  query GetMovie($id: Int!) {
    movie(id: $id) {
      id
      imdbId
      title
      description
      poster
      year
      countries
      genres
      directors
      writers
      stars
      rating
      trailerUrl
    }
  }
`;

export const fetchMovie = (id: Number) =>
  apolloClient.query({
    query: GET_MOVIE,
    variables: { id },
  });
