import React from 'react';
import PropType from 'prop-types';


const Header = props => {
  return <header>Contacts ({props.totalContacts}) <i className="fa fa-plus add" /> </header>;
};

Header.propTypes = {
	totalContacts: PropType.number.isRequired
};

export default Header;
