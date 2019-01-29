import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './SideMenuStyle.scss';

const SideMenuComponent = ({ header, items, footer }) => (
  <div className="App-sidemenu">
    {header}
    <div className="App-sidemenu__inner">
      {items && items.map(item => (
        <NavLink
          key={item.id}
          className="App-sidemenu__item"
          activeClassName="App-sidemenu__item--active"
          to={item.url}
        >
          {item.title}
        </NavLink>
      ))}
    </div>
    {footer}
  </div>

);

SideMenuComponent.propTypes = {
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  footer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  })).isRequired,
};

SideMenuComponent.defaultProps = {
  header: '',
  footer: '',
};

export default SideMenuComponent;
