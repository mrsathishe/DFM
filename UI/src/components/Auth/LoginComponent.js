import React, { useState } from "react";
import { Form, Button, InputGroup } from 'react-bootstrap';

const LoginComponent = ({onSubmit}) => {

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const onValidate = (e) => {
        if(id === ""){
            setError("Id Should not be empty");
        } else if(password === "") {
            setError("Password Should not be empty");
        } else {
            onSubmit({id, password});
        }
    }
    return (
        <Form className="d-grid gap-2">
            <InputGroup className="mb-3 ">
                <InputGroup.Text id="id">ID</InputGroup.Text>
                <Form.Control type="text" placeholder="123" value={id} 
                    onChange={(eve) => setId(eve.target.value)}/>
            </InputGroup>
            <Form.Control type="password" placeholder="Password" className="mb-3" 
                value={password} onChange={(e) => setPassword(e.target.value)} />
            {
                error &&
                <span className="error"></span>
            }
            <Button variant="primary" size="" className="mb-3" onClick={onValidate}>Enter</Button>
        </Form>
    )
}

export default LoginComponent;