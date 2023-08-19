/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "fragment ListData on List {\n  id\n  title\n  description\n  owner {\n    id\n    name\n  }\n  movies {\n    id\n    title\n    poster\n    year\n  }\n}\n\nquery List($id: String!) {\n  list(id: $id) {\n    ...ListData\n  }\n}": types.ListDataFragmentDoc,
    "mutation CreateList($input: CreateListInput!) {\n  createList(input: $input) {\n    id\n  }\n}": types.CreateListDocument,
    "mutation DeleteList($id: String!) {\n  deleteList(id: $id)\n}": types.DeleteListDocument,
    "mutation UpdateList($id: String!, $input: UpdateListInput!) {\n  updateList(id: $id, input: $input) {\n    id\n    title\n    description\n  }\n}": types.UpdateListDocument,
    "mutation PushMovie($listId: String!, $movieId: Int!) {\n  pushMovie(listId: $listId, movieId: $movieId)\n}\n\nmutation PullMovie($listId: String!, $movieId: Int!) {\n  pullMovie(listId: $listId, movieId: $movieId)\n}": types.PushMovieDocument,
    "fragment ProviderData on Provider {\n  id\n  providerName\n  providerLogoUrl\n}\n\nfragment ProvidersData on Providers {\n  id\n  flatrate {\n    ...ProviderData\n  }\n  rent {\n    ...ProviderData\n  }\n  buy {\n    ...ProviderData\n  }\n}\n\nquery MovieProviders($id: Int!, $region: String!) {\n  movie(id: $id) {\n    id\n    providers(region: $region) {\n      ...ProvidersData\n    }\n  }\n}": types.ProviderDataFragmentDoc,
    "query Movie($id: Int!) {\n  movie(id: $id) {\n    id\n    imdbId\n    title\n    description\n    poster\n    year\n    countries\n    genres\n    directors\n    writers\n    stars\n    rating\n    trailerUrl\n  }\n}": types.MovieDocument,
    "query Search($input: String!) {\n  search(input: $input) {\n    id\n    title\n    poster\n    year\n    genres\n  }\n}": types.SearchDocument,
    "fragment UserListData on List {\n  id\n  title\n  cover\n  updatedAt\n  movies {\n    id\n    title\n    poster\n  }\n}\n\nfragment UserData on User {\n  id\n  email\n  name\n  photoUrl\n  following {\n    id\n    name\n  }\n  followers {\n    id\n    name\n  }\n  lists {\n    ...UserListData\n  }\n  savedLists {\n    ...UserListData\n  }\n}\n\nquery User($id: String!) {\n  user(id: $id) {\n    ...UserData\n  }\n}": types.UserListDataFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ListData on List {\n  id\n  title\n  description\n  owner {\n    id\n    name\n  }\n  movies {\n    id\n    title\n    poster\n    year\n  }\n}\n\nquery List($id: String!) {\n  list(id: $id) {\n    ...ListData\n  }\n}"): (typeof documents)["fragment ListData on List {\n  id\n  title\n  description\n  owner {\n    id\n    name\n  }\n  movies {\n    id\n    title\n    poster\n    year\n  }\n}\n\nquery List($id: String!) {\n  list(id: $id) {\n    ...ListData\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateList($input: CreateListInput!) {\n  createList(input: $input) {\n    id\n  }\n}"): (typeof documents)["mutation CreateList($input: CreateListInput!) {\n  createList(input: $input) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeleteList($id: String!) {\n  deleteList(id: $id)\n}"): (typeof documents)["mutation DeleteList($id: String!) {\n  deleteList(id: $id)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateList($id: String!, $input: UpdateListInput!) {\n  updateList(id: $id, input: $input) {\n    id\n    title\n    description\n  }\n}"): (typeof documents)["mutation UpdateList($id: String!, $input: UpdateListInput!) {\n  updateList(id: $id, input: $input) {\n    id\n    title\n    description\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation PushMovie($listId: String!, $movieId: Int!) {\n  pushMovie(listId: $listId, movieId: $movieId)\n}\n\nmutation PullMovie($listId: String!, $movieId: Int!) {\n  pullMovie(listId: $listId, movieId: $movieId)\n}"): (typeof documents)["mutation PushMovie($listId: String!, $movieId: Int!) {\n  pushMovie(listId: $listId, movieId: $movieId)\n}\n\nmutation PullMovie($listId: String!, $movieId: Int!) {\n  pullMovie(listId: $listId, movieId: $movieId)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProviderData on Provider {\n  id\n  providerName\n  providerLogoUrl\n}\n\nfragment ProvidersData on Providers {\n  id\n  flatrate {\n    ...ProviderData\n  }\n  rent {\n    ...ProviderData\n  }\n  buy {\n    ...ProviderData\n  }\n}\n\nquery MovieProviders($id: Int!, $region: String!) {\n  movie(id: $id) {\n    id\n    providers(region: $region) {\n      ...ProvidersData\n    }\n  }\n}"): (typeof documents)["fragment ProviderData on Provider {\n  id\n  providerName\n  providerLogoUrl\n}\n\nfragment ProvidersData on Providers {\n  id\n  flatrate {\n    ...ProviderData\n  }\n  rent {\n    ...ProviderData\n  }\n  buy {\n    ...ProviderData\n  }\n}\n\nquery MovieProviders($id: Int!, $region: String!) {\n  movie(id: $id) {\n    id\n    providers(region: $region) {\n      ...ProvidersData\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Movie($id: Int!) {\n  movie(id: $id) {\n    id\n    imdbId\n    title\n    description\n    poster\n    year\n    countries\n    genres\n    directors\n    writers\n    stars\n    rating\n    trailerUrl\n  }\n}"): (typeof documents)["query Movie($id: Int!) {\n  movie(id: $id) {\n    id\n    imdbId\n    title\n    description\n    poster\n    year\n    countries\n    genres\n    directors\n    writers\n    stars\n    rating\n    trailerUrl\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Search($input: String!) {\n  search(input: $input) {\n    id\n    title\n    poster\n    year\n    genres\n  }\n}"): (typeof documents)["query Search($input: String!) {\n  search(input: $input) {\n    id\n    title\n    poster\n    year\n    genres\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment UserListData on List {\n  id\n  title\n  cover\n  updatedAt\n  movies {\n    id\n    title\n    poster\n  }\n}\n\nfragment UserData on User {\n  id\n  email\n  name\n  photoUrl\n  following {\n    id\n    name\n  }\n  followers {\n    id\n    name\n  }\n  lists {\n    ...UserListData\n  }\n  savedLists {\n    ...UserListData\n  }\n}\n\nquery User($id: String!) {\n  user(id: $id) {\n    ...UserData\n  }\n}"): (typeof documents)["fragment UserListData on List {\n  id\n  title\n  cover\n  updatedAt\n  movies {\n    id\n    title\n    poster\n  }\n}\n\nfragment UserData on User {\n  id\n  email\n  name\n  photoUrl\n  following {\n    id\n    name\n  }\n  followers {\n    id\n    name\n  }\n  lists {\n    ...UserListData\n  }\n  savedLists {\n    ...UserListData\n  }\n}\n\nquery User($id: String!) {\n  user(id: $id) {\n    ...UserData\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;