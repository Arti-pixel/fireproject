import React, { useContext } from "react";
import { Context } from "../index";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { HOME_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";

//TODO в константах нужно имя "token" сделать для потенциального расширения localStorage пользовательскими данными (ФИО, должность итд) + если будет необходимость изменить систему регистрации/авторизации в пользу refresh-токенов

const NavBar = observer(() => {
  const { userInfo } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    userInfo.setUser({});
    userInfo.setIsAuth(false);
    localStorage.removeItem("token");
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="position-fixed"
      style={{ width: "100%", zIndex: "100" }}
    >
      <Container fluid>
        <NavLink
          style={{ color: "white", textDecoration: "none" }}
          to={HOME_ROUTE}
        >
          Городские пожары
        </NavLink>
        {userInfo.isAuth ? (
          <Nav className="ms-auto" style={{ color: "white" }}>
            {window.location.pathname !== "/" ? (
              <Button variant={"outline-light"} href={HOME_ROUTE}>
                Список карточек
              </Button>
            ) : null}
            <Button
              variant={"outline-light"}
              className="ms-2"
              onClick={() => {
                logOut();
                navigate(LOGIN_ROUTE);
              }}
            >
              Выйти
            </Button>
          </Nav>
        ) : null}
      </Container>
    </Navbar>
  );
});

export default NavBar;
