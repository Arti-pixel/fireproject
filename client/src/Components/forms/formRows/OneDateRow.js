import React, { useContext } from "react";
import { Form, Row, Col } from "react-bootstrap";
import InputComment from "../inputComment/InputComment.js";
import { FireGeneralContext } from "../../../Pages/Card.js";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";

const OneDateRow = ({
  formLabelText,
  dataDateParam,
  datePlaceholder,
  content,
  setContent,
  dateCommentParam,
  commentplaceHolder,
  commentValue,
  commentChangeFun,
  commentEmptyFun,
}) => {
  const { userRoleIsChecker } = useContext(FireGeneralContext);
  registerLocale("ru", ru);

  const changeDateInput = (e) => {
    setContent({
      ...content,
      [dataDateParam]: e,
    });
  };

  return (
    <Row className="mb-3">
      <Form.Group as={Row}>
        <Form.Label column sm={3}>
          {formLabelText}
        </Form.Label>
        <Col
          sm={8}
          className="d-flex justify-content-center align-items-center"
        >
          <DatePicker
            data-params={dataDateParam}
            selected={
              content[dataDateParam]
                ? new Date(content[dataDateParam])
                : new Date()
            }
            onChange={changeDateInput}
            minDate={new Date("01.01.1970")}
            maxDate={new Date()}
            locale="ru"
            dateFormat="dd.MM.yyyy"
            placeholderText={datePlaceholder}
            disabled={userRoleIsChecker}
          />
        </Col>

        <InputComment
          dataCommentParam={dateCommentParam}
          commentplaceHolder={commentplaceHolder}
          commentValue={commentValue}
          commentChangeFun={commentChangeFun}
          commentEmptyFun={commentEmptyFun}
        />
      </Form.Group>
    </Row>
  );
};

export default OneDateRow;
