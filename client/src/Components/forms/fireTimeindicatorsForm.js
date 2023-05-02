import { observer } from "mobx-react-lite";
import React, { useEffect, useState, forwardRef } from "react";
import { Form, Row, Col, Button, Container, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  fetchFireTimeindicators,
  updateFireTimeindicators,
} from "../../http/formsAPI/fireTimeindicatorsFormAPI";

const FireTimeindicatorsForm = forwardRef(({}, ref) => {
  let { cardId } = useParams();
  const [fireTime, setFireTime] = useState({
    fireOccurrenceTime: null,
    fireOccurrenceSq: null,
    fireDetectionTime: null,
    fireDetectionSq: null,
    fireMessageTime: null,
    fireMessageSq: null,
    departureTime: null,
    fireArrivalTime: null,
    fireArrivalSq: null,
    firstBarrelTime: null,
    firstBarrelSq: null,
    additionalForcesTime: null,
    additionalForcesSq: null,
    localizationTime: null,
    localizationSq: null,
    openFireEliminationTime: null,
    openFireEliminationSq: null,
    fireConsequencesEliminationTime: null,
    firestationReturnTime: null,
  });

  useEffect(() => {
    fetchFireTimeindicators(cardId).then((data) => {
      for (const element in data) {
        setFireTime((prevState) => ({
          ...prevState,
          [element]: data[element],
        }));
      }
    });
  }, [cardId]);

  return (
    <Card className="m-3 p-5 border border-2 border-primary" ref={ref}>
      <Container className="d-flex align-items-center justify-content-center mb-5">
        <Row
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Временные показатели
        </Row>
      </Container>
      <Row
        className="mx-5"
        style={{ fontSize: "18px", fontWeight: "bold", textAlign: "center" }}
      >
        <div className="d-flex justify-content-between mb-3">
          <span className="d-inline">Время</span>
          <span className="d-inline">Площадь возгорания</span>
        </div>
      </Row>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          updateFireTimeindicators(cardId, {
            ...fireTime,
          });
        }}
      >
        <Row className="mb-3">
          <Form.Group controlId="formFireOccurrence" as={Row}>
            <Form.Label column sm={3}>
              возникновения пожара
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="time"
                placeholder="время возникновения пожара"
                value={fireTime.fireOccurrenceTime || ""}
                onChange={(e) => {
                  setFireTime({
                    ...fireTime,
                    fireOccurrenceTime: e.target.value,
                  });
                }}
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="площадь"
                value={fireTime.fireOccurrenceSq || ""}
                onChange={(e) => {
                  setFireTime({
                    ...fireTime,
                    fireOccurrenceSq: e.target.value,
                  });
                }}
              />
            </Col>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group controlId="formFireDetection" as={Row}>
            <Form.Label column sm={3}>
              обнаружения пожара
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="time"
                placeholder="время обнаружения пожара"
                value={fireTime.fireDetectionTime || ""}
                onChange={(e) => {
                  setFireTime({
                    ...fireTime,
                    fireDetectionTime: e.target.value,
                  });
                }}
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="площадь"
                value={fireTime.fireDetectionSq || ""}
                onChange={(e) => {
                  setFireTime({
                    ...fireTime,
                    fireDetectionSq: e.target.value,
                  });
                }}
              />
            </Col>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group controlId="formFireMessage" as={Row}>
            <Form.Label column sm={3}>
              обнаружения пожара
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="time"
                placeholder="время сообщения о пожаре"
                value={fireTime.fireMessageTime || ""}
                onChange={(e) => {
                  setFireTime({
                    ...fireTime,
                    fireMessageTime: e.target.value,
                  });
                }}
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="площадь"
                value={fireTime.fireMessageSq || ""}
                onChange={(e) => {
                  setFireTime({
                    ...fireTime,
                    fireMessageSq: e.target.value,
                  });
                }}
              />
            </Col>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group controlId="formDeparture" as={Row}>
            <Form.Label column sm={3}>
              выезда дежурного караула (смены)
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="time"
                placeholder="время выезда из ПЧ"
                value={fireTime.departureTime || ""}
                onChange={(e) => {
                  setFireTime({
                    ...fireTime,
                    departureTime: e.target.value,
                  });
                }}
              />
            </Col>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group controlId="formFireArrival" as={Row}>
            <Form.Label column sm={3}>
              прибытия на пожар
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="time"
                placeholder="время прибытия на пожар"
                value={fireTime.fireArrivalTime || ""}
                onChange={(e) => {
                  setFireTime({
                    ...fireTime,
                    fireArrivalTime: e.target.value,
                  });
                }}
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="площадь"
                value={fireTime.fireArrivalSq || ""}
                onChange={(e) => {
                  setFireTime({
                    ...fireTime,
                    fireArrivalSq: e.target.value,
                  });
                }}
              />
            </Col>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group controlId="formFirstBarrel" as={Row}>
            <Form.Label column sm={3}>
              подачи первого ствола
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="time"
                placeholder="время подачи первого ствола"
                value={fireTime.firstBarrelTime || ""}
                onChange={(e) => {
                  setFireTime({
                    ...fireTime,
                    firstBarrelTime: e.target.value,
                  });
                }}
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="площадь"
                value={fireTime.firstBarrelSq || ""}
                onChange={(e) => {
                  setFireTime({
                    ...fireTime,
                    firstBarrelSq: e.target.value,
                  });
                }}
              />
            </Col>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group controlId="formAdditionalForces" as={Row}>
            <Form.Label column sm={3}>
              вызова дополнительных сил
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="time"
                placeholder="время вызова дополнительных сил"
                value={fireTime.additionalForcesTime || ""}
                onChange={(e) => {
                  setFireTime({
                    ...fireTime,
                    additionalForcesTime: e.target.value,
                  });
                }}
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="площадь"
                value={fireTime.additionalForcesSq || ""}
                onChange={(e) => {
                  setFireTime({
                    ...fireTime,
                    additionalForcesSq: e.target.value,
                  });
                }}
              />
            </Col>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group controlId="formLocalization" as={Row}>
            <Form.Label column sm={3}>
              локализация
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="time"
                placeholder="время локализации"
                value={fireTime.localizationTime || ""}
                onChange={(e) => {
                  setFireTime({
                    ...fireTime,
                    localizationTime: e.target.value,
                  });
                }}
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="площадь"
                value={fireTime.localizationSq || ""}
                onChange={(e) => {
                  setFireTime({
                    ...fireTime,
                    localizationSq: e.target.value,
                  });
                }}
              />
            </Col>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group controlId="formOpenFireElimination" as={Row}>
            <Form.Label column sm={3}>
              ликвидация открытого горения
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="time"
                placeholder="время ликвидации открытого горения"
                value={fireTime.openFireEliminationTime || ""}
                onChange={(e) => {
                  setFireTime({
                    ...fireTime,
                    openFireEliminationTime: e.target.value,
                  });
                }}
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="площадь"
                value={fireTime.openFireEliminationSq || ""}
                onChange={(e) => {
                  setFireTime({
                    ...fireTime,
                    openFireEliminationSq: e.target.value,
                  });
                }}
              />
            </Col>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group controlId="formFireConsequencesElimination" as={Row}>
            <Form.Label column sm={3}>
              ликвидация последствий пожара
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="time"
                placeholder="время ликвидации последствий пожара"
                value={fireTime.fireConsequencesEliminationTime || ""}
                onChange={(e) => {
                  setFireTime({
                    ...fireTime,
                    fireConsequencesEliminationTime: e.target.value,
                  });
                }}
              />
            </Col>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group controlId="formFirestationReturnTime" as={Row}>
            <Form.Label column sm={3}>
              возвращения в часть (место постоянной дислокации)
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="time"
                placeholder="время возвращения в часть (место постоянной дислокации)"
                value={fireTime.firestationReturnTime || ""}
                onChange={(e) => {
                  setFireTime({
                    ...fireTime,
                    firestationReturnTime: e.target.value,
                  });
                }}
              />
            </Col>
          </Form.Group>
        </Row>

        <Row>
          <Col>{}</Col>
          <Col className="d-flex justify-content-end">
            <Button
              type="submit"
              variant="primary"
              className="ml-auto"
              style={{ marginRight: "24px" }}
              size="lg"
            >
              Отправить
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
});

export default FireTimeindicatorsForm;
