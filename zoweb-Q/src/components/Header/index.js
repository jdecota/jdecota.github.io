import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Icon, Layout, Menu, Input, Button, Drawer, Affix } from 'antd';
import logo from '../../assets/images/logo-horizontal-color.png';
import './styles.less';

const { Header } = Layout;
const { Search } = Input;

const TopMenu = ({mode}) => (
    <Menu mode={mode}>
        <Menu.Item key="about">
            ABOUT
        </Menu.Item>
        <Menu.Item key="products">
            PRODUCTS
        </Menu.Item>
        <Menu.Item key="blog">
            <Link to="/app">BLOG</Link>
        </Menu.Item>
        <Menu.Item key="signup">
            <Link to="/z/register">SIGN UP</Link>
        </Menu.Item>
    </Menu>
)

class HeaderCustom extends Component {
    state = {
        visibleMobileMenu: false,
        scrolling: false
    };

    renderTabBar() {
        if (this.props.menuOnly) return <></>

        return (
            <Row type="flex" justify="space-between" align="middle" className="for-desktop">
                <Icon
                    className="trigger toggle-trigger"
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.toggle}
                />
                <Menu mode="horizontal" selectedKeys={['blog feed']}>
                    <Menu.Item key="blog feed">
                        Blog Feed
                    </Menu.Item>
                    <Menu.Item key="zo life">
                        ZO Life
                    </Menu.Item>
                    <Menu.Item key="zo home">
                        ZO Home
                    </Menu.Item>
                </Menu>
                <Search
                    placeholder="Search ..."
                    style={{ width: 300 }}
                    onSearch={value => console.log(value)}
                    enterButton
                />
            </Row>
        )
    }
    render() {
        return (
        <Header className="zo-header">
            <Affix offsetTop={0} onChange={scrolling => this.setState({ scrolling })}>

                <Row type="flex" justify="space-between" align="middle">
                    <Link to="/">
                        <img src={logo} alt="logo" width={this.state.scrolling ? "190px" : "290px"}/>
                    </Link>
                    <Col>
                        <div className="for-desktop">
                            <TopMenu mode="horizontal" />
                        </div>
                        <div className="for-mobile">
                            <Button type="primary" size="small" onClick={() => this.setState({ visibleMobileMenu: true })}>
                                <Icon type="bars" />
                            </Button>
                            <Drawer
                                placement="right"
                                closable={false}
                                onClose={() => this.setState({ visibleMobileMenu: false })}
                                visible={this.state.visibleMobileMenu}
                            >
                                <TopMenu mode="inline" />
                            </Drawer>
                        </div>
                    </Col>
                </Row>
                {this.renderTabBar()}

            </Affix>
        </Header>
        )
    }
}

export default HeaderCustom;
