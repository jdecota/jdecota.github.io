import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Main from './containers/Main';
import Other from './containers/Other';
import { Homepage } from './components/Homepage';

import { getProfile } from './store/actions';
import './App.less';
import 'tachyons';

class App extends Component {
    componentDidMount() {
      this.props.getProfile()
    }

    render() {
      console.log(this.props)
        return (
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/z" component={Other} />
            <Route path="/app" component={Main} />
          </Switch>
        );
    }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
      getProfile: () => dispatch(getProfile()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
