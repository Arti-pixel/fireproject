import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";
import { createAllTables } from "../../../http/cardInfoAPI";
import { useNavigate } from "react-router-dom";
import { CARD_ROUTE } from "../../../utils/consts";
import ModalTextRow from "../../modal/ModalTextRow";
import ModalLabel from "../../modal/ModalLabel";
import ModalDateRow from "../../modal/ModalDateRow";

const CreatingModal = ({ show, onHide, createState, setCreateState }) => {
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setCreateState({
      ...createState,
      [e.target.dataset.params]: e.target.value,
    });
  };

  const handleChangeDateInput = (e) => {
    setCreateState({
      ...createState,
      callDate: e,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createAllTables({
      ...createState,
    }).then((data) => {
      navigate(CARD_ROUTE + "/" + data);
    });
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Form onSubmit={handleSubmit}>
        <ModalLabel modalLabelText={"Создание карточки"} />
        <Modal.Body>
          <ModalTextRow
            dataInputParam={"shift"}
            handleChangeInput={handleChangeInput}
            rowTextLabel={"Смена"}
            inputType={"textarea"}
            inputPlaceholder={"Введите название караула (смены)"}
            inputValue={createState.shift}
          />

          <ModalDateRow
            dataInputParam={"callDate"}
            handleChangeDateInput={handleChangeDateInput}
            rowTextLabel={"Дата тушения пожара"}
            inputPlaceholder={"Введите дату тушения"}
            inputValue={createState.callDate}
          />

          <ModalTextRow
            dataInputParam={"objectName"}
            handleChangeInput={handleChangeInput}
            rowTextLabel={
              "Наименование организации (объекта), ведомственная принадлежность (форма собственности)"
            }
            inputType={"textarea"}
            inputPlaceholder={"Введите наименование организации"}
            inputValue={createState.objectName}
          />

          <ModalTextRow
            dataInputParam={"settlement"}
            handleChangeInput={handleChangeInput}
            rowTextLabel={"Населённый пункт"}
            inputType={"input"}
            inputPlaceholder={"Введите название населённого пункта"}
            inputValue={createState.settlement}
          />

          <ModalTextRow
            dataInputParam={"address"}
            handleChangeInput={handleChangeInput}
            rowTextLabel={"Адрес"}
            inputType={"input"}
            inputPlaceholder={"Введите адрес объекта пожара"}
            inputValue={createState.address}
          />
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
};

export default CreatingModal;
