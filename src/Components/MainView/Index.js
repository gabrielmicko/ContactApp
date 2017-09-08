import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import SearchBox from './SearchBox';
import {
  ApolloClient,
  createNetworkInterface,
  ApolloProvider,
} from 'react-apollo';
import ContactListWithData from '../Data/ContactListWithData';
import ContactList from './ContactList';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:4000/graphql',
});
const client = new ApolloClient({
  networkInterface: networkInterface,
});

class Index extends React.Component {
  render() {
    return (
      <div className="page index">
        <Header totalContacts={this.props.numberOfContacts} />
        <SearchBox />
        <ApolloProvider client={client}>
          <ContactListWithData query={this.props.search}>
            <ContactList />
          </ContactListWithData>
        </ApolloProvider>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    search: state.Settings.search,
    numberOfContacts: state.Settings.numberOfContacts,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
