import React, { useState } from "react";

import { Form, Alert, Button, Col, Row, Image, Container } from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";

import styles from '../../assets/styles/SignUpForm.module.css';
import btnStyles from '../../assets/styles/Button.module.css';
import appStyles from '../../App.module.css';
import axios from "axios";
import { useSetCurrentUser } from '../../contexts/CurrentUserContext';

function SignInForm() {
    const setCurrentUser = useSetCurrentUser();
    const [signInData, setSignInData] = useState({
        username: '',
        password: '',
    });
    const { username, password } = signInData;
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const handleChange = (event) => {
        setSignInData({
            ...signInData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const {data} = await axios.post('/dj-rest-auth/login/', signInData);
            setCurrentUser(data.user);
            history.push('/');
        }
        catch (err) {
            setErrors(err.response?.data);
        }
    };
  return (
    <Row className={styles.Row}>
        <Col className="my-auto p-0 p-md-2" md={6}>
            <Container className={`${appStyles.Content} p-4`}>
                <h1 className={styles.Header}>Sign In</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="username">
                        <Form.Label className="d-none">Username</Form.Label>
                        <Form.Control 
                            onChange={handleChange}
                            value={username}
                            className={styles.Input}
                            type="text" 
                            placeholder="Username"
                            name="username" />
                    </Form.Group>
                    {errors.username?.map((message, idx) => (
                        <Alert key={idx} variant="warning">
                            {message}
                        </Alert>
                    ))}
                    <Form.Group controlId="password">
                        <Form.Label className="d-none">Password</Form.Label>
                        <Form.Control 
                            onChange={handleChange}
                            value={password}
                            className={styles.Input}
                            type="password" 
                            placeholder="Password"
                            name="password" />
                    </Form.Group>
                    {errors.password?.map((message, idx) => (
                        <Alert key={idx} variant="warning">
                            {message}
                        </Alert>
                    ))}
                    <Button
                        className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
                        type="submit"
                    >
                        Sign In
                    </Button>
                    {errors.non_field_errors?.map((message, idx) => (
                        <Alert key={idx} variant="warning" className="mt-3">
                        {message}
                        </Alert>
                    ))}
                    </Form>
            </Container>
            <Container className={`mt-3 ${appStyles.Content}`}>
                <Link className={styles.Link} to="/signup">
                    Don't have an Account? <span>Sign up Now!</span>
                </Link>
            </Container>
        </Col>
        <Col className={`my-auto d-done d-md-block p-2 ${styles.SignInCol}`} md={6}>
            <Image 
            className={`${appStyles.FillerImage}`} 
            src={"https://wallup.net/wp-content/uploads/2014/08/baby-duck-in-grass.jpg"}    
        />
        </Col>
    </Row>
  );
};

export default SignInForm
