import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginComponent from "../components/Auth/LoginComponent";
import '../static/scss/cow_details.scss';
import { onLogin } from "../actions/user.action";
import { connect } from "react-redux";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { FaPlus } from 'react-icons/fa';
import { GrFacebook } from 'react-icons/gr';
import image from '../static/images/cow.jpg';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

const typesOfAction = {
    show: 'SHOW',
    edit: 'EDIT',
    add: 'ADD'
}

const CowDetails = ({ onSubmit, user }) => {
    // const location = useLocation();
    const [cowDetails, setCowDetails] = useState({});
    const [action, setAction] = useState(typesOfAction.show);
    const navigate = useNavigate();
    useEffect(() => {
        if (user && user.id) {

            navigate("/");
        }
    });
    const header = () => {
        switch (action) {
            case typesOfAction.add: {
                return (<h4>Add Cow</h4>);
            }
            case typesOfAction.edit:
                return (<h4>Edit Cow</h4>);
            default:
                return <h4>Cow Detail</h4>;
        }
    }
    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className="page-header">
                        {header()}
                    </div>
                    <div>

                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" value={cowDetails.name} disabled={action === typesOfAction.show} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>ID</Form.Label>
                            <Form.Control type="number" placeholder="Enter ID" value={cowDetails.id} disabled />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Gender</Form.Label>
                            <Form.Check type="radio" label="Male" id="male" name="gender"/>
                            <Form.Check type="radio" label="Female" id="female" name="gender" />
                        </Form.Group>
                    </div>
                </Col>
                <Col>
                    <div>
                        <div>
                            <Form.Group className="mb-3">
                                <Form.Label className="mb-3">Date of </Form.Label>
                                <Form.Check type="radio" label="Birth" id="date_of_birth" name="birth_bought" />
                                <Form.Check type="radio" label="Bought" id="date_of_bought" name="birth_bought" className="mb-3" />
                                <Form.Control type="date" placeholder="Enter ID" disabled={action === typesOfAction.show} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" placeholder="Enter ID" value={cowDetails.age} disabled={action === typesOfAction.show} />
                            </Form.Group>
                        </div>
                    </div>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label className="mb-3">Breed</Form.Label>
                        <Form.Control type="text" placeholder="breed" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" placeholder="Enter ID" value={cowDetails.desc} disabled={action === typesOfAction.show} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Childs</Form.Label>
                        {
                            action !== typesOfAction.show &&
                            <Button className="float-right"><FaPlus /> Add</Button>
                        }
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>Name</th>
                                    <th>ID</th>
                                    <th>Gender</th>
                                    <th>Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@mdo</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td colSpan={2}>Larry the Bird</td>
                                    <td>@mdo</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Medical</Form.Label>
                        {
                            action !== typesOfAction.show &&
                            <Button className="float-right"><FaPlus /> Add</Button>
                        }
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>Subject</th>
                                    <th>Description</th>
                                    <th>Doctor</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td colSpan={2}>Larry the Bird</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" size="lg">
                            Sign up
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (userData) => dispatch(onLogin(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(CowDetails);