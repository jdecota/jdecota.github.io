import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';
import Login from '../components/Login';
import Register from '../components/Register';
import ForgotPassword from '../components/ForgotPassword';

import logo from '../assets/images/logo-horizontal-color.png';

const { Header } = Layout;


class Other extends Component {
    render() {
        return (
            <Layout>
                <Header className="zo-header">
                    <Row type="flex" justify="space-between" align="middle">
                        <Link to="/">
                            <img src={logo} alt="logo" width="290px"/>
                        </Link>
                    </Row>
                </Header>
                <Row type="flex" justify="center" align="top" style={{ height: 'calc(100vh - 64px)' }}>
                    <Col style={{minWidth: 320, marginTop: 100}}>
                        <Switch>
                            <Redirect exact from="/z" to="/z/login" />
                            <Route exact path="/z/login" render={() => <Login />} />
                            <Route exact path="/z/Register" render={() => <Register />} />
                            <Route exact path="/z/forgot-password" render={() => <ForgotPassword />} />
                        </Switch>
                    </Col>
                </Row>
            </Layout>
        );
    }
}

export default Other;
