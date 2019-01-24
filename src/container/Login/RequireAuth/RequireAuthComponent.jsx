import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';
import ROUTE_URL from '../../../consts/route-url';

export default function (ComposedComponent) {
  class RequireAuthComponent extends React.Component {
    static propTypes = {
      isAuthenticated: PropTypes.boolean,
      redirect: PropTypes.func.isRequired,
    };

    componentDidMount() {
      this._checkAndRedirect();
    }

    componentDidUpdate() {
      this._checkAndRedirect();
    }

    _checkAndRedirect() {
      const { isAuthenticated, redirect } = this.props;

      if (!isAuthenticated) {
        redirect();
      }
    }

    render() {
      const { isAuthenticated } = this.props;
      return (
        <React.Fragment>
          { isAuthenticated ? <ComposedComponent {...this.props} /> : null }
        </React.Fragment>
      );
    }
  }

  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
  });

  const mapDispatchToProps = dispatch => bindActionCreators({
    redirect: () => push(ROUTE_URL.LOGIN),
  }, dispatch);

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(RequireAuthComponent);
}
