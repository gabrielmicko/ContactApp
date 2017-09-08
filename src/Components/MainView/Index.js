import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import SearchBox from './SearchBox';

class Index extends React.Component {
  render() {
    return (
      <div className="page index">
        <Header totalContacts={6} />
        <SearchBox />
        <ContanctList>
          
        </ContanctList>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
