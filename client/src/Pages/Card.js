import { observer } from "mobx-react-lite";
import React, { useRef } from "react";
import GeneralForm from "../Components/forms/generalForm";
import FireTimeindicatorsForm from "../Components/forms/fireTimeindicatorsForm";
import { Navbar, Container } from "react-bootstrap";

const Card = observer(() => {
  const mainInfoRef = useRef(null);
  const fireTimeindicatorsRef = useRef(null);

  return (
    <div className="d-flex flex-row">
      <div
        style={{ minWidth: "calc(15%)", maxWidth: "calc(15%)" }}
        className="d-flex flex-column position-fixed mt-5"
      >
        <Navbar bg="primary" className="ms-1 my-3">
          <Container>
            <div
              style={{ color: "white", cursor: "pointer" }}
              onClick={() => {
                mainInfoRef.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Главная информация
            </div>
          </Container>
        </Navbar>
        <Navbar bg="primary" className="ms-1 my-1">
          <Container>
            <div
              style={{ color: "white", cursor: "pointer" }}
              onClick={() => {
                fireTimeindicatorsRef.current.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Временные показатели
            </div>
          </Container>
        </Navbar>
      </div>
      <div
        className="mt-5"
        style={{ minWidth: "calc(85% - 2px)", marginLeft: "calc(15%)" }}
      >
        <GeneralForm ref={mainInfoRef} />
        <FireTimeindicatorsForm ref={fireTimeindicatorsRef} />
      </div>
    </div>
  );
});

export default Card;
