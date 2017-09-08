import React from 'react';
import { connect } from 'react-redux';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <div className="profile-pic">
          <img src={this.props.photo} />
        </div>
        <div className="details">
          <div className="name">{this.props.name}</div>
          <div className="tel">
            <i className="fa fa-mobile" /> {this.props.tel}
          </div>
          <div className="about">
            {this.props.title}, {this.props.job}, {this.props.address}
          </div>
        </div>
        <div className="call-btn">
          <i className="fa fa-phone" />
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
