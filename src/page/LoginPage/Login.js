// import { Button, Checkbox, Form, Input, notification } from 'antd';
// import { DownOutlined, CloseOutlined } from '@ant-design/icons';
// import { useNavigate } from "react-router-dom"
// import { useEffect } from 'react';

// import { connect } from "react-redux";
// import { compose } from 'recompose';

// import { asyncCheckUserAction } from './loginstore/action';
// import './Login.css'

// const Login = (props) => {
//     const { checkUserDispatch } = props
//     // const navigate = useNavigate()
//     // useEffect(() => {
//     //     const token = localStorage.getItem("token")
//     //     if (token) {
//     //         navigate("/")
//     //     }
//     // }, [])
//     const onFinish = async (values) => {
//         const response = await checkUserDispatch(values)
//         if (response?.status === 200) {
//             notification.open({
//                 message: 'Đăng nhập',
//                 description:
//                     'Đăng nhập thành công',
//                 icon: <DownOutlined style={{ color: 'green' }} />,
//             });
//             navigate('/')
//             localStorage.setItem("token", response.data.result.token)
//         } else {
//             notification.open({
//                 message: 'Đăng nhập',
//                 description:
//                     'Đăng nhập Thất bại',
//                 icon: <CloseOutlined style={{ color: 'blue' }} />,
//             });
//         }
//     };

//     return (
//         <>
//             <h1 className='loginTitle'>Login</h1>
//             <Form
//                 name="basic"
//                 labelCol={{ span: 8 }}
//                 wrapperCol={{ span: 8 }}
//                 initialValues={{ remember: false }}
//                 onFinish={onFinish}
//                 autoComplete="off"
//             >
//                 <Form.Item
//                     label="Username"
//                     name="username"
//                     rules={[{ required: true, message: 'Please input your username!' }]}
//                 >
//                     <Input />
//                 </Form.Item>

//                 <Form.Item
//                     label="Password"
//                     name="password"
//                     rules={[{ required: true, message: 'Please input your password!' }]}
//                 >
//                     <Input.Password />
//                 </Form.Item>
//                 <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
//                     <Checkbox>Remember me</Checkbox>
//                 </Form.Item>
//                 <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//                     <Button type="primary" htmlType="submit">
//                         Submit
//                     </Button>
//                 </Form.Item>
//             </Form>
//         </>

//     )
// }

// const mapDispatchToProps = (dispatch) => ({
//     checkUserDispatch: (payload) => asyncCheckUserAction(dispatch)(payload),
// })
// const withConnect = connect(null, mapDispatchToProps)

// export default compose(withConnect)(Login);
