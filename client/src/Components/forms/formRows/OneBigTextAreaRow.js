import React, { useContext } from "react";
import { Form, Row, Col } from "react-bootstrap";
import InputComment from "../inputComment/InputComment";
import { FireGeneralContext } from "../../../Pages/Card";

const OneBigTexAreaRow = ({
  dataContentParam,
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
  const { fireGeneral, userRoleIsChecker } = useContext(FireGeneralContext);

  return (
    <Row className="mb-3">
      <Form.Group as={Row}>
        <Form.Label column sm={1}></Form.Label>
        <Col sm={10}>
          <Form.Control
            data-params={dataContentParam}
            as={contentFieldType}
            placeholder={contentPlaceholder}
            value={
              contentValue || localStorage.getItem(fireGeneral.cardId) || ""
            }
            onChange={contentChangeFun}
            disabled={userRoleIsChecker}
            style={contentFieldstyle}
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

export default OneBigTexAreaRow;
