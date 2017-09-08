import { getPeople } from '../model/people';

/* 
 * Resolvers containing Queries and it's options, Mutation
 */
export default {
  Query: {
    contacts: (_, args) => getPeople(args.query),
  },
};
