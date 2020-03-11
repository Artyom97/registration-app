import React from 'react';
import axios from 'axios';
import { Form, Input, Button } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const validateMessages = {
    required: 'This field is required!',
    types: {
        email: 'Not a validate email!',
        number: 'Not a validate number!',
    },
    number: {
        range: 'Must be between ${min} and ${max}',
    },
};

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            firstName: '',
            lastName: '',
            hash: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.onFinish = this.onFinish.bind(this)
    }

    handleChange(event) {
        let key = event.target.name;
        this.setState({[key]: event.target.value});
    }

    onFinish() {
        const Props = this.props.history;
        axios.post(`http://localhost:4000/users/register`, this.state)
            .then(result => {
                Props.push('/login');
            });
    }
    render() {

        return (
            <div className='container'>
                <Form {...layout} name="nest-messages" onFinish={this.onFinish} validateMessages={validateMessages}>
                    <Form.Item name={['username']} label="UserName" rules={[{ required: true }]}>
                        <Input name="username" defaultValue={this.state.username} onChange={this.handleChange} />
                    </Form.Item>
                    <Form.Item name={['firstName']} label="FirstName" rules={[{ required: true }]}>
                        <Input name="firstName"  defaultValue={this.state.firstName} onChange={this.handleChange}/>
                    </Form.Item>
                    <Form.Item name={['lastName']} label="LastName" rules={[{ required: true }]}>
                        <Input name="lastName"  defaultValue={this.state.lastName} onChange={this.handleChange}/>
                    </Form.Item>
                    <Form.Item name={['hash']} label="Password" rules={[{ required: true }]}>
                        <Input.Password name="hash"  defaultValue={this.state.hash} onChange={this.handleChange}/>
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
export default Demo;