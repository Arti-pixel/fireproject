import { observer } from "mobx-react-lite";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonGroup, DropdownButton, Dropdown } from "react-bootstrap";
import { CARD_ROUTE } from "../../utils/consts";
import DeleteModal from "./actionsModals/DeleteModal";
import { Context } from "../../index";

const ButtonList = observer(({ cardId, currentState }) => {
  const { userInfo } = useContext(Context);
  const userRoleIsUser = userInfo.userRole === "user";
  const userRoleIsChecker = userInfo.userRole === "checker";

  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const navigate = useNavigate();

  function redirectToEdit(id) {
    return navigate(CARD_ROUTE + "/" + id);
  }

  const deleteRights = userRoleIsUser && currentState === "userEdit";

  const permissionOnActions =
    (userRoleIsUser && currentState === "userEdit") ||
    (userRoleIsChecker && currentState === "checkerEdit") ||
    currentState === "checked";

  const buttonLabel = (status) => {
    if (status === "checked") {
      return "Просмотр";
    } else if (status === "userEdit") {
      return "Редактирование";
    } else {
      return "Проверка";
    }
  };

  return (
    <>
      {permissionOnActions && (
        <td>
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
                {buttonLabel(currentState)}
              </Dropdown.Item>
              {deleteRights && (
                <Dropdown.Item
                  eventKey="delete"
                  onClick={() => {
                    setDeleteModalVisible(true);
                  }}
                >
                  Удаление
                </Dropdown.Item>
              )}
              {currentState === "checked" && (
                <Dropdown.Item
                  eventKey="pdf"
                  // onClick={}
                >
                  Перевести в pdf на печать
                </Dropdown.Item>
              )}
            </DropdownButton>
          </ButtonGroup>
        </td>
      )}
      {deleteRights && (
        <DeleteModal
          cardId={cardId}
          show={deleteModalVisible}
          onHide={() => {
            setDeleteModalVisible(false);
          }}
        />
      )}
    </>
  );
});

export default ButtonList;
