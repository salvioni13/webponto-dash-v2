import { Button, Col, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap"
import { FaUserCircle } from "react-icons/fa";
const Login = () => {
    return (
        <div className="d-flex justify-content-center bg-dark w-100 align-items-center position-absolute bottom-0 top-0">
            <Col
                xs={12} sm={8} md={5} lg={4} xl={3}
                className="border border-2 border-primary rounded-3 p-4 bg-dark-blue"
            >
                <Row>
                    <FaUserCircle className="font-size-9 text-secondary" />
                    <span className="w-100 d-flex justify-content-center font-size-3 text-primary300">LOG-IN</span>
                </Row>
                <Form>
                    <FormGroup>
                        <FormLabel>
                            E-mail
                        </FormLabel>
                        <Form.Control type="email" placeholder="email" />
                    </FormGroup>
                    <FormGroup className="mt-3">
                        <FormLabel>
                            Senha
                        </FormLabel>
                        <Form.Control type="password" placeholder="senha" />
                    </FormGroup>
                    <Row className="justify-content-center mt-3">
                        <Col className="d-flex justify-content-center gap-3">                           
                            <button type="reset" className="btn btn-outline-primary">
                                Logar
                            </button>
                        </Col>
                    </Row>
                </Form>
                <Row>
                    <a href=""> 
                        Registre-se
                    </a>
                </Row>
            </Col>
        </div>
    )
}

export default Login