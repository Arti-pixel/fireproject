import { observer } from "mobx-react-lite";
import React, { useEffect, useState, forwardRef } from "react";
import { Form, Row, Col, Button, Container, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  fetchGeneral,
  updateGeneral,
} from "../../http/formsAPI/generalFormAPI.js";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";

const GeneralForm = forwardRef(({}, ref) => {
  registerLocale("ru", ru);

  let { cardId } = useParams();
  const [settlement, setSettlement] = useState("");
  const [address, setAddress] = useState("");
  const [callNumber, setСallNumber] = useState("");
  const [shift, setShift] = useState("");
  const [callDate, setCallDate] = useState(new Date());
  const [objectName, setObjectName] = useState("");
  const [objectCharacteristic, setObjectCharacteristic] = useState("");
  const [objectDetection, setObjectDetection] = useState("");

  useEffect(() => {
    fetchGeneral(cardId).then(
      ({
        callNumber,
        shift,
        callDate,
        settlement,
        address,
        objectName = "",
        objectCharacteristic = "",
        objectDetection = "",
      }) => {
        setSettlement(settlement);
        setAddress(address);
        setСallNumber(callNumber);
        setShift(shift);
        setCallDate(new Date(callDate));
        setObjectName(objectName);
        setObjectCharacteristic(objectCharacteristic);
        setObjectDetection(objectDetection);
      }
    );
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
          Главная информация
        </Row>
      </Container>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          updateGeneral(cardId, {
            callNumber,
            shift,
            callDate,
            objectName,
            settlement,
            address,
            objectCharacteristic,
            objectDetection,
          });
        }}
      >
        <Row className="mb-3">
          <Form.Group controlId="formCallNumber" as={Row}>
            <Form.Label column sm={3}>
              Ранг пожара
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                placeholder="Введите Ранг пожара"
                value={callNumber}
                onChange={(e) => {
                  setСallNumber(e.target.value);
                }}
              />
            </Col>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group controlId="formShift" as={Row}>
            <Form.Label column sm={3}>
              Караул (смена)
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                as="textarea"
                placeholder="Введите название караула (смены)"
                value={shift}
                onChange={(e) => {
                  setShift(e.target.value);
                }}
                style={{ minHeight: "90px" }}
              />
            </Col>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group controlId="formcallDate" as={Row}>
            <Form.Label column sm={3}>
              Дата тушения пожара
            </Form.Label>
            <Col sm={9}>
              <DatePicker
                selected={callDate}
                onChange={(value) => {
                  setCallDate(value);
                }}
                locale="ru"
                dateFormat="dd.MM.yyyy"
                placeholderText="Введите дату тушения пожара"
              />
            </Col>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group controlId="formSettlement" as={Row}>
            <Form.Label column sm={3}>
              Населённый пункт
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                placeholder="Введите название населённого пункта"
                value={settlement}
                onChange={(e) => {
                  setSettlement(e.target.value);
                }}
              />
            </Col>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group controlId="formAddress" as={Row}>
            <Form.Label column sm={3}>
              Адрес
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                placeholder="Введите адрес объекта пожара"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </Col>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group controlId="formObjectName" as={Row}>
            <Form.Label column sm={3}>
              Наименование организации (объекта), ведомственная принадлежность
              (форма собственности)
            </Form.Label>
            <Col sm={9} className="d-flex flex-column">
              <Form.Control
                className="h-100"
                as="textarea"
                placeholder="Введите наименование организации"
                value={objectName}
                onChange={(e) => {
                  setObjectName(e.target.value);
                }}
                style={{ minHeight: "70px" }}
              />
            </Col>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group controlId="formObjectCharacteristic" as={Row}>
            <Form.Label column sm={3}>
              Характеристика организации (объекта)
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                as="textarea"
                placeholder="Характеристика организации (объекта)"
                value={objectCharacteristic}
                onChange={(e) => {
                  setObjectCharacteristic(e.target.value);
                }}
                style={{ overflow: "hidden", minHeight: "110px" }}
              />
            </Col>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group controlId="formObjectDetection" as={Row}>
            <Form.Label column sm={3}>
              Кем охраняется организация (объект), кто обнаружил пожар
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                as="textarea"
                placeholder="Кем охраняется организация (объект), кто обнаружил пожар"
                value={objectDetection}
                onChange={(e) => {
                  setObjectDetection(e.target.value);
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

export default GeneralForm;
