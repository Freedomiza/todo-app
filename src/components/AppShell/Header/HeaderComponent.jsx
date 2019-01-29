import React from 'react';
import PropTypes from 'prop-types';
import './HeaderStyle.scss';

const HeaderComponent = ({ title, left, right }) => (
  <div className="App-header">
    {left}
    <div className="App-header__title">
      {title}
    </div>
    {right}
  </div>

);

HeaderComponent.propTypes = {
  left: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  right: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  title: PropTypes.string.isRequired,
};

HeaderComponent.defaultProps = {
  left: '',
  right: '',
};

export default HeaderComponent;
