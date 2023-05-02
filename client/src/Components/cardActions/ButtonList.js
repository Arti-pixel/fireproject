import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonGroup, DropdownButton, Dropdown } from "react-bootstrap";
import { CARD_ROUTE } from "../../utils/consts";
import DeleteModal from "./modals/DeleteModal";

const ButtonList = observer(({ cardId }) => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const navigate = useNavigate();

  function redirectToEdit(id) {
    return navigate(CARD_ROUTE + "/" + id);
  }

  return (
    <>
      <ButtonGroup>
        <DropdownButton
          as={ButtonGroup}
          title="Действие"
          id="bg-nested-dropdown"
        >
          <Dropdown.Item
            onClick={() => {
              redirectToEdit(cardId);
            }}
            eventKey="edit"
          >
            Редактирование
          </Dropdown.Item>
          <Dropdown.Item
            eventKey="delete"
            onClick={() => {
              setDeleteModalVisible(true);
            }}
          >
            Удаление
          </Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>

      <DeleteModal
        cardId={cardId}
        show={deleteModalVisible}
        onHide={() => {
          setDeleteModalVisible(false);
        }}
      />
    </>
  );
});

export default ButtonList;
