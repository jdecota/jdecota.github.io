import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

class NormalForgotPasswordForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
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
                        <Input prefix={<Icon type="mail" style={{ fontSize: 13 }} />} type="email" placeholder="Email" />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
                        Send Code
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const ForgotPasswordForm = Form.create()(NormalForgotPasswordForm);

export default ForgotPasswordForm;