import React, { useContext } from "react";
import { Form, Row, Col } from "react-bootstrap";
import InputComment from "../inputComment/InputComment";
import { FireGeneralContext } from "../../../Pages/Card";
import { handleInput } from "../../../Helpers/handleInput";

const OneTextWithBigLabelRow = ({
  dataContentParam,
  contentLabelText,
  contentFieldType,
  contentPlaceholder,
  contentValue,
  contentChangeFun,
  contentFieldstyle = {},
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
        <Form.Label column sm={5}>
          {contentLabelText}
        </Form.Label>
        <Col sm={6} className="d-flex justify-content-center">
          <Form.Control
            data-params={dataContentParam}
            as={contentFieldType}
            placeholder={contentPlaceholder}
            value={contentValue || ""}
            onChange={contentChangeFun}
            disabled={userRoleIsChecker}
            style={contentFieldstyle}
            onInput={handleInput}
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

export default OneTextWithBigLabelRow;
