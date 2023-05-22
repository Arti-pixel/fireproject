import React, { useContext } from "react";
import { Form, Row, Col } from "react-bootstrap";
import InputComment from "../inputComment/InputComment.js";
import { FireGeneralContext } from "../../../Pages/Card";

const TwoTextRow = ({
  firstFormLabelText,
  firstDataParam,
  firstInputType,
  firstPlaceholder,
  firstValue,
  secondFormLabelText,
  secondDataParam,
  secondInputType,
  secondPlaceholder,
  secondValue,
  contentChangeFun,
  dataCommentParam,
  commentplaceHolder,
  commentValue,
  commentChangeFun,
  commentEmptyFun,
}) => {
  const { userRoleIsChecker } = useContext(FireGeneralContext);

  return (
    <Row className="mb-3">
      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          {firstFormLabelText}
        </Form.Label>
        <Col sm={3} className="d-flex align-self-center">
          <Form.Control
            data-params={firstDataParam}
            as={firstInputType}
            placeholder={firstPlaceholder}
            value={firstValue || ""}
            onChange={contentChangeFun}
            disabled={userRoleIsChecker}
          />
        </Col>
        <Form.Label column sm={2}>
          {secondFormLabelText}
        </Form.Label>
        <Col sm={4} className="d-flex align-self-center">
          <Form.Control
            data-params={secondDataParam}
            as={secondInputType}
            placeholder={secondPlaceholder}
            value={secondValue || ""}
            onChange={contentChangeFun}
            disabled={userRoleIsChecker}
          />
        </Col>
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

export default TwoTextRow;
