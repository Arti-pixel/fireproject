import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { deleteRecord } from "../../../http/cardInfoAPI";
import { RenderContext } from "../../GeneralList";
import ModalLabel from "../../modal/ModalLabel";

const DeleteModal = ({ cardId, show, onHide }) => {
  const { forceRender, setForceRender } = useContext(RenderContext);

  const deleteCard = () => {
    deleteRecord(cardId).then(() => {
      setForceRender(!forceRender);
      onHide();
    });
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <ModalLabel
        modalLabelText={"Вы уверены, что хотите удалить эту карточку?"}
      />
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Отмена
        </Button>
        <Button variant="outline-success" onClick={deleteCard}>
          Да
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
