import { Button, Col, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap"
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { login, user } from "../../redux/users/userSlicer";
import { useForm } from "react-hook-form";
import { useCallback, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useAppDispatch();
  const loggedUser = useAppSelector(user);
  const navigate = useNavigate();


  const onSubmit = useCallback(
    (data: any) => {
      dispatch(login({ email: data?.email, password: data?.password }, ))
    }, [dispatch]
  );

  useLayoutEffect(()=>{
    if(loggedUser && loggedUser?.id){
      console.log(loggedUser);
      navigate('/dashboard');
    }
  },[loggedUser])
  return (
    <div className="d-flex justify-content-center bg-dark w-100 align-items-center position-absolute bottom-0 top-0">
      <Col
        xs={12} sm={8} md={5} lg={4} xl={3}
        className="border border-2 border-primary rounded-3 p-4 bg-dark-blue text-secondary"
      >
        <Row>
          <FaUserCircle className="font-size-9 text-secondary" />
          <span className="w-100 d-flex justify-content-center font-size-3 text-primary300">LOG-IN</span>
        </Row>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <FormLabel>
              E-mail
            </FormLabel>

              <input className="form-control"  type="email" placeholder="email" {...register("email")} />
            
          </FormGroup>
          <FormGroup className="mt-3">
            <FormLabel>
              Senha
            </FormLabel>
            
              <input className="form-control" type="password" placeholder="senha" {...register("password")} />
            
          </FormGroup>
          <Row className="justify-content-center mt-3">
            <Col className="d-flex justify-content-center gap-3">
              <button type="submit" className="btn btn-outline-primary"
              >
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