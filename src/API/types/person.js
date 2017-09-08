/**
 * Person type defining the parameters
 */

const Person = /* GraphQL */ `
  type Person {
    id: ID
    name: String!
    title: String!
    job: String!
    photo: String!
    address: String!
    tel: String!
  }
`;

export default Person;
