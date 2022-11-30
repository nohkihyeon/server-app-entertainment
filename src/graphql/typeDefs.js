import { gql } from 'apollo-server';

const typeDefs = gql`
  type Movie {
    id: Int!
    title: String!
    release: Int!
    director: String!
    budget: String
    rating: Int!
  }

  type Query {
    movies: [Movie!]!
    movie(id: Int!): Movie
  }

  type Mutation {
    addMovie(title: String!, release: Int!, director: String!, budget: String, rating: Int!): Movie!
  }

  type Subscription {
    roomUpdates: Message
  }
`;

export default typeDefs;