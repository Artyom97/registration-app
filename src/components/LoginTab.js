import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import axios from "axios";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

class LoginTab extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.onFinish = this.onFinish.bind(this)
    }

    handleChange(event) {
        let key = event.target.name;
        this.setState({[key]: event.target.value});
    }

    onFinish() {
        axios.post(`http://localhost:4000/users/authenticate`, this.state)
            .then(result => {
                localStorage.setItem('currentUser', result.data.token);
                this.props.setUser(result.data);
                this.props.history.push('/profile');
            });
    };

    render () {
        return(
            <div className='container'>
                <Form {...layout} name="basic" initialValues={{ remember: true }} onFinish={this.onFinish} >
                    <Form.Item label="UserName" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                        <Input name="username" defaultValue={this.state.username} onChange={this.handleChange}/>
                    </Form.Item>
                    <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]} >
                        <Input.Password name="password" defaultValue={this.state.password} onChange={this.handleChange}/>
                    </Form.Item>
                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
export default LoginTab;