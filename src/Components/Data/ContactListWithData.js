import ContactList from '../MainView/ContactList';
import { gql, graphql } from 'react-apollo';
const ContactListWithData = graphql(
  gql`
    query contacts($query: String) {
      contacts(query: $query) {
        id
        name
        title
        job
        photo
        address
        tel
      }
    }
  `,
  {
    options: ({ query }) => ({
      notifyOnNetworkStatusChange: true,
      variables: { query: query },
    }),
  }
)(ContactList);

export default ContactListWithData;
