import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form, Row, Col } from "react-bootstrap";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";
import { createRecord } from "../../../http/cardInfoAPI";
import { Context } from "../../../index";
import { useNavigate } from "react-router-dom";
import { CARD_ROUTE } from "../../../utils/consts";
import { observer } from "mobx-react-lite";

const CreatingModal = observer(({ show, onHide }) => {
  const { user } = useContext(Context);

  const navigate = useNavigate();

  registerLocale("ru", ru);

  const [shift, setShift] = useState("");
  const [callDate, setCallDate] = useState("");
  const [settlement, setSettlement] = useState("");
  const [address, setAddress] = useState("");
  const [objectName, setObjectName] = useState("");

  return (
    <Modal show={show} onHide={onHide} centered>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          createRecord({
            userId: user.userId,
            shift,
            callDate,
            objectName,
            settlement,
            address,
          }).then((data) => {
            navigate(CARD_ROUTE + "/" + data.cardId);
          });
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Создание карточки
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mb-3">
            <Form.Group controlId="formShift" as={Row}>
              <Form.Label column sm={3}>
                Смена
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  as="textarea"
                  placeholder="Введите название караула (смены)"
                  value={shift}
                  onChange={(e) => {
                    setShift(e.target.value);
                  }}
                />
              </Col>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group controlId="formCallDate" as={Row}>
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
                  style={{ minHeight: "65px" }}
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={onHide}>
            Отмена
          </Button>
          <Button variant="outline-success" type="submit">
            Создать
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
});

export default CreatingModal;
