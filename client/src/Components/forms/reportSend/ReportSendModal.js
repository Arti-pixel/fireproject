import React, { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { updateGeneral } from "../../../http/formsAPI/formsContentAPI/generalFormAPI";
import { Context } from "../../../index.js";
import { HOME_ROUTE } from "../../../utils/consts.js";
import ModalLabel from "../../modal/ModalLabel";

const ReportSendModal = ({
  show,
  onHide,
  commentsExist,
  contentGeneralState,
}) => {
  const { userInfo } = useContext(Context);
  const userRoleisChecker = userInfo.userRole === "checker";
  const navigate = useNavigate();
  const { cardId } = useParams();
  let textConfirm = "";
  let newState = "userEdit";

  const updateState = (newState) => {
    return updateGeneral(cardId, {
      ...contentGeneralState,
      currentState: newState,
    });
  };

  if (!userRoleisChecker) {
    textConfirm = "отправить данный отчёт на проверку";
    newState = "checkerEdit";
  } else {
    if (commentsExist) {
      textConfirm = "отправить данный отчёт на доработку";
      newState = "userEdit";
    } else {
      textConfirm = "подтвердить готовность данного отчёта";
      newState = "checked";
    }
  }

  const handleUpdateState = async () => {
    updateState(newState);
    setTimeout(() => {
      navigate(HOME_ROUTE);
    }, 400);
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <ModalLabel modalLabelText={`Вы уверены, что хотите ${textConfirm}?`} />
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Отмена
        </Button>
        <Button variant="outline-success" onClick={handleUpdateState}>
          Да
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReportSendModal;
