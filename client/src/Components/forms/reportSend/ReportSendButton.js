import React, { useContext, useState } from "react";
import { Button, Col } from "react-bootstrap";
import ReportSendModal from "./ReportSendModal.js";
import { checkCommentsExistence } from "../../../http/formsAPI/checkFormCommentsExistence/checkFormCommentsExistence.js";
import { useParams } from "react-router-dom";
import { FireGeneralContext } from "../../../Pages/Card.js";

const ReportSendButton = () => {
  const [sendingModalVisible, setSendingModalVisible] = useState(false);
  const [commentsExist, setCommentsExist] = useState(true);
  const { cardId } = useParams();
  const { fireGeneral, userRoleIsChecker, userRoleIsUser } =
    useContext(FireGeneralContext);

  const handleOpenClick = async () => {
    setCommentsExist(
      await checkCommentsExistence(cardId).then((data) => {
        return data;
      })
    );

    return setSendingModalVisible(true);
  };

  const handleCloseClick = () => {
    return setSendingModalVisible(false);
  };

  return (
    <>
      {(userRoleIsChecker || userRoleIsUser) && (
        <Col className="d-flex justify-content-end m-3">
          <Button
            type="submit"
            variant="success"
            className="ml-auto col-3"
            size="lg"
            onClick={handleOpenClick}
          >
            Отправить отчёт
          </Button>
          <ReportSendModal
            show={sendingModalVisible}
            onHide={handleCloseClick}
            commentsExist={commentsExist}
            contentGeneralState={fireGeneral}
          />
        </Col>
      )}
    </>
  );
};

export default ReportSendButton;
