import React from 'react';
import { connect } from 'react-redux';
import { setSearchValue } from '../../Actions/Settings';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
  }

  setSearchValue(event) {
    this.props.setSearchValue(event.target.value);
  }

  generatePlaceholder() {
    if (this.props.search.length === 0) {
      return (
        <label className="placeholder" htmlFor="search-input">
          <i className="fa fa-search" /> Search Your Contact
        </label>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="searchbox">
        <input
          type="text"
          id="search-input"
          value={this.props.search}
          onChange={this.setSearchValue.bind(this)}
        />
        {this.generatePlaceholder()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    search: state.Settings.search,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSearchValue: value => {
      dispatch(setSearchValue(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
