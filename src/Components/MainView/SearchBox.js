import React from 'react';
import { connect } from 'react-redux';

class SearchBox extends React.Component {
  render() {
    return (
      <div className="searchbox">
	      <input type="text" id="search-input" />
	      <label className="placeholder" htmlFor="search-input"><i className="fa fa-search" /> Search Your Contact</label>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
