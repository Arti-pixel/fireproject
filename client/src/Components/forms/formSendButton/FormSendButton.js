import React, { useContext } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { FireGeneralContext } from "../../../Pages/Card";

const FormSendButton = () => {
  const { userRoleIsChecker, userRoleIsUser } = useContext(FireGeneralContext);
  return (
    <>
      {(userRoleIsChecker || userRoleIsUser) && (
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
      )}
    </>
  );
};

export default FormSendButton;
