import React, { useContext } from "react";
import { Form, Row, Col } from "react-bootstrap";
import InputComment from "../inputComment/InputComment.js";
import { FireGeneralContext } from "../../../Pages/Card.js";

const OneTimeDateRow = ({
  formLabelText,
  dataTimeParam,
  timeValue,
  contentChangeFun,
  dataCommentParam,
  commentplaceHolder,
  commentValue,
  commentChangeFun,
  commentEmptyFun,
}) => {
  const { userRoleIsChecker } = useContext(FireGeneralContext);

  return (
    <Row className="mb-3 d-flex">
      <Form.Group as={Row}>
        <Form.Label column sm={3}>
          {formLabelText}
        </Form.Label>
        <Col sm={5} className="d-flex align-self-center">
          <Form.Control
            data-params={dataTimeParam}
            type="time"
            value={timeValue || ""}
            disabled={userRoleIsChecker}
            onChange={contentChangeFun}
          />
        </Col>
        <Col sm={3}></Col>
        <InputComment
          dataCommentParam={dataCommentParam}
          commentplaceHolder={commentplaceHolder}
          commentValue={commentValue}
          commentChangeFun={commentChangeFun}
          commentEmptyFun={commentEmptyFun}
        />
      </Form.Group>
    </Row>
  );
};

export default OneTimeDateRow;
