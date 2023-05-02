import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { deleteRecord } from "../../../http/cardInfoAPI";
import { RenderContext } from "../../GeneralList";

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
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Вы уверены, что хотите удалить эту карточку?
        </Modal.Title>
      </Modal.Header>
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
