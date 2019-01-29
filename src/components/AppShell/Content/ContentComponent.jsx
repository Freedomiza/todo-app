import React from 'react';
import PropTypes from 'prop-types';
import './ContentStyle.scss';

const ContentComponent = ({ left, right, children }) => (
  <div className="App-content">
    {left}
    {children}
    {right}
  </div>

);

ContentComponent.propTypes = {
  left: PropTypes.element,
  right: PropTypes.element,

  children: PropTypes.element.isRequired,
};

ContentComponent.defaultProps = {
  left: undefined,
  right: undefined,
};

export default ContentComponent;
