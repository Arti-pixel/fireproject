import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Card, Button, Row, Col } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { registration, login } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(data);
      user.setIsAuth(true);
      navigate(HOME_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш пароль..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Row className="d-flex justify-content-between mt-3 pr-3 pl-3">
            <Col xs={12} md={8}>
              {isLogin ? (
                <div>
                  Нет аккаунта?
                  <NavLink to={REGISTRATION_ROUTE}>Зарегестрируйтесь!</NavLink>
                </div>
              ) : (
                <div>
                  Есть аккаунт?
                  <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                </div>
              )}
            </Col>
            <Col className="d-flex justify-content-end" xs={6} md={4}>
              <Button variant={"outline-success"} onClick={click}>
                {isLogin ? "Войти" : "Регистрация"}
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
