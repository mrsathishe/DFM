import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';

const Login = ({}) => {
    return (
        <div className="login-component">
            <div className="login-outer-wrapper">
                <div className="login-wrapper">
                    <div className="login-header">
                        <h3>Login</h3>
                        <div className="right-login-header">
                            <span className="close-icon">x</span>
                        </div>
                    </div>
                    <div className="login-body">
                        <Form>
                            <Form.Group className="" controlId="">
                                <Form.Label>ID</Form.Label>
                                <Form.Control type="text" placeholder="123" />
                            </Form.Group>
                            <Form.Group className="" controlId="">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="123" />
                            </Form.Group>
                            <span className="error"></span>
                            <Button>Enter</Button>
                        </Form>
                        <p className="sign-up-text">If you don't have an account please <Link to={'/signup'}>SignUp Here</Link></p>
                    </div>
                    <div className="login-footer"></div>
                </div>
            </div>
        </div>
    )
}

export default Login;