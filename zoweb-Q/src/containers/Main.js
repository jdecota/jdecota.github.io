import { Layout } from 'antd';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import HeaderCustom from '../components/Header';
import SiderCustom from '../components/SiderCustom';
import Routes from '../routes';

import '../App.less';
const { Content, Sider, Footer } = Layout;

class Main extends Component {
    state = {
        collapsed: false,
    };
    componentWillMount() {
        this.getClientWidth();
        window.onresize = () => {
            this.getClientWidth();
        }
    }
    getClientWidth = () => {
        const clientWidth = document.body.clientWidth;
        this.setState({ collapsed: clientWidth <= 992 })
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        const { auth } = this.props;
        return (
            <Layout>
                <HeaderCustom toggle={this.toggle} collapsed={this.state.collapsed} />
                <Layout className="zo-content">
                    <SiderCustom collapsed={this.state.collapsed} />
                    <Content style={{overflow: 'initial', flex: '1 1 0', position: 'relative' }}>
                        <Routes auth={auth} />
                    </Content>
                    <Sider className="for-desktop">Ads</Sider>
                </Layout>
                <Footer>© 2019 ZO Organized</Footer>
            </Layout>
        );
    }
}

export default withRouter(Main);
