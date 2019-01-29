import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
// import classNames from 'classnames';
import selector from './AppContentSelector';
import * as actions from './AppContentThunk';
import './AppContentStyle.scss';

import ROUTE_URL from '../../consts/route-url';
import { AppShell } from '../../components';
import { TodoContainer } from '../Todo';
import { AboutContainer } from '../About';
import menu from '../../assets/json/menu';

const { Header, Content, SideMenu } = AppShell;

export class HomeComponent extends Component {
  static propTypes = {
    // isFetching: PropTypes.bool.isRequired,
    // getData: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
  }

  state = {

  }

  componentDidMount() {
    // const { getData } = this.props;
    // getData && getData();
  }


  render() {
    const { match } = this.props;
    return (
      <div className="App-container">
        <Header title="Home" />
        <div className="App-container__inner">
          <div className="App-container__inner-left">
            <SideMenu items={menu} />
          </div>
          <Content>
            <Switch>
              <Route path={`${ROUTE_URL.TODO}`} component={TodoContainer} />
              <Route path={`${ROUTE_URL.ABOUT}`} component={AboutContainer} />

              <Redirect from={match.url} to={ROUTE_URL.TODO} />
            </Switch>
          </Content>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: selector.isFetching(state),
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(actions.getDataThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
