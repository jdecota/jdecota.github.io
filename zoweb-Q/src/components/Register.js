import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { registerSubmit } from '../store/actions';

const FormItem = Form.Item;
class NormalRegisterForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.register(values);
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} style={{maxWidth: '300px'}}>
                <FormItem>
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Name is required!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="User Name" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Email is required!' }],
                    })(
                        <Input prefix={<Icon type="mail" style={{ fontSize: 13 }} />} type="email" placeholder="Email" />
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
                    <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
                        Sign Up
                    </Button>
                    or <Link to="login">Log In!</Link>
                </FormItem>
            </Form>
        );
    }
}

const RegisterForm = Form.create()(NormalRegisterForm);

function mapDispatchToProps(dispatch) {
    return {
        register: (data) => dispatch(registerSubmit(data)),
    };
}

export default connect(null, mapDispatchToProps)(RegisterForm);
