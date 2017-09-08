import React from 'react';
import { connect } from 'react-redux';
import Contact from './Contact';
import { setNumberOfContacts } from '../../Actions/Settings';
import Notification from '../Shared/Notification';

class ContactList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(props) {
    const numberOfContact = props.data.contacts
      ? props.data.contacts.length
      : 0;
    this.props.setNumberOfContacts(numberOfContact);
  }

  generateContacts() {
    if (this.props.data && this.props.data.contacts) {
      return this.props.data.contacts.map(person => {
        return (
          <Contact
            key={person.id}
            photo={person.photo}
            name={person.name}
            title={person.title}
            job={person.job}
            address={person.address}
            tel={person.tel}
          />
        );
      });
    }
    return <Notification message="No contacts available." class="error" />;
  }
  render() {
    return <div className="contact-list">{this.generateContacts()}</div>;
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    setNumberOfContacts: numberOfContacts => {
      dispatch(setNumberOfContacts(numberOfContacts));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
