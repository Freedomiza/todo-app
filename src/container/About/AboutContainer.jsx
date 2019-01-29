import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './AboutStyle.scss';

export class AboutContainer extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  render() {
    return (
      <div>
        About work!
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);
