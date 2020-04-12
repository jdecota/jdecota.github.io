import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { loginSubmit } from '../store/actions'

const FormItem = Form.Item;

class NormalLoginForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.login(values)
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} style={{maxWidth: '300px'}}>
                <FormItem>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Email is required!' }],
                    })(
                        <Input prefix={<Icon type="mail" style={{ fontSize: 13 }} />} placeholder="Email" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Password is required!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <Link to="/forgot-password" className="login-form-forgot" style={{float: 'right'}}>Forgot password?</Link>
                    <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
                      Log In
                    </Button>
                    or <Link to="register">Sign up!</Link>
                </FormItem>
            </Form>
        );
    }
}

const LoginForm = Form.create()(NormalLoginForm);
function mapDispatchToProps(dispatch) {
    return {
        login: (data) => dispatch(loginSubmit(data)),
    };
}

export default withRouter(connect(null, mapDispatchToProps)(LoginForm));