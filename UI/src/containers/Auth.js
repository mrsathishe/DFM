import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginComponent from "../components/Auth/LoginComponent";
import '../static/scss/login.scss';
import { onLogin } from "../actions/user.action";
import { connect } from "react-redux";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FcGoogle } from 'react-icons/fc';
import { GrFacebook } from 'react-icons/gr';
import image from '../static/images/cow.jpg';

const Auth = ({ onSubmit, user }) => {
    // const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (user && user.id) {

            navigate("/");
        }
    });
    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className="full_height">
                        <div className="content-wrapper">
                            <h3>Welcome Back...</h3>
                            <img src={image} />
                        </div>
                    </div>
                </Col>
                <Col className="no_right_padding">
                    <div className="wrapper full_height">
                        <div className="login-wrapper">
                            <div className="login-header">
                                <h4>Log in</h4>
                            </div>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email or phone number</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <div className="d-grid gap-2">
                                        <Button variant="primary" size="lg">
                                            Submit
                                        </Button>
                                    </div>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Row>
                                        <Col><Form.Check className="d-" type="checkbox" label="Keep me logged in" /></Col>
                                        <Col><a href="#">Forget username or password</a></Col>
                                    </Row>
                                </Form.Group>
                            </Form>
                            <div className="seperator">
                                <hr />
                                <span>or log in with</span>
                            </div>
                            <div className="mb-5">
                                <Row>
                                    <Col>
                                        <span className="social-icon-login-button">
                                            <FcGoogle />  Log in with Google
                                        </span>
                                    </Col>
                                    <Col>
                                        <span className="social-icon-login-button">
                                            <GrFacebook />  Log in with Facebook
                                        </span>
                                    </Col>
                                </Row>
                            </div>
                            <div className="seperator">
                                <hr />
                                <span>don't have account</span>
                            </div>
                            <div className="d-grid gap-2">
                                <Button variant="primary" size="lg">
                                    Sign up
                                </Button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
             {/* <div className="container-fluid full_height">
            <div className="row">
                <div className="col full_height">

                </div>
                <div className="col no_right_padding">
                    <div className="wrapper full_height">
                        <div className="inner-wrapper">
                            <div className="login-wrapper">
                                <div className="login-header">
                                    <h4>Log in</h4>
                                </div>
                                <div>
                                    <formset>
                                        <label>Email or phone number</label>
                                        <input type="text" />
                                    </formset>
                                    <formset>
                                        <label>Password</label>
                                        <input type="password" />
                                    </formset>
                                    <button>Log in</button>
                                    <div>
                                        <span>
                                            <input type="checkbox" />
                                            <label>Keep me logged in</label>
                                        </span>
                                        <span><a>Forget login or password ?</a></span>
                                    </div>
                                </div>
                                <div className="seperator">
                                    <span>or login in with</span>
                                </div>
                                <div>
                                    <button><img src="gicon" /><label>Log in with Google</label></button>
                                    <button><img src="gicon" /><label>Log in with Facebook</label></button>
                                </div>
                                <div className="seperator">
                                    <span>don't have an account?</span>
                                    <button>Sign up</button>
                                </div>
                                {/* <div className="login-body">
                        <LoginComponent onSubmit={onSubmit}/>
                        <p className="sign-up-text">If you don't have an account please <Link to={'/signup'}>SignUp Here</Link></p>
                    </div>
                    <div className="login-footer"></div> * /}
                            </div>
                        </div>
                    </div>
                    <div className="grid">
                        <div className="g-col-6">

                        </div>
                        <div className="login-outer-wrapper">

                        </div>
                    </div>
                </div>
            </div>
        </div> */}

        </Container>
       
    )
}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (userData) => dispatch(onLogin(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);