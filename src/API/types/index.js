import Person from './person';
/**
 * Query type which holds the queryies which could be called.
 */
const Query = /* GraphQL */ `
  type Query {
    contacts(query: String): [Person!]
  }
`;

/**
 * A schema containing Query and Mutation types
 */
const Schema = /* GraphQL */ `
  schema {
    query: Query
  }
`;

export default [Schema, Query, Person];
