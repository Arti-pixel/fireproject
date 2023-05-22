import React, { useEffect, useState, useContext } from "react";
import { Form, Col } from "react-bootstrap";
import { Context } from "../../../index";
import { FireGeneralContext } from "../../../Pages/Card";
import { handleInput } from "../../../Helpers/handleInput";

const InputComment = ({
  dataCommentParam,
  commentplaceHolder,
  commentValue,
  commentChangeFun,
  commentEmptyFun,
}) => {
  const [checked, setChecked] = useState(false);
  const { userRoleIsChecker, userRoleIsUser } = useContext(FireGeneralContext);

  const { userInfo } = useContext(Context);

  const disableNecessity = userInfo.userRole === "user";

  useEffect(() => {
    setChecked(!!commentValue);
  }, [commentValue]);

  const handleCheck = (e) => {
    if (!!checked) {
      commentEmptyFun(e);
    }
    setChecked(e.target.checked);
  };

  return (
    <>
      {((commentValue && userRoleIsUser) || userRoleIsChecker) && (
        <>
          <Col
            sm={1}
            className="d-flex justify-content-center align-items-center fs-3"
          >
            <Form.Check
              data-params={dataCommentParam}
              type="checkbox"
              checked={checked}
              onChange={handleCheck}
              disabled={disableNecessity}
            />
          </Col>
          <Form.Control
            className="mt-3"
            as="textarea"
            data-params={dataCommentParam}
            placeholder={commentplaceHolder}
            value={commentValue || ""}
            onChange={commentChangeFun}
            style={{ display: checked ? "block" : "none" }}
            disabled={disableNecessity}
            onInput={handleInput}
          />
        </>
      )}
    </>
  );
};

export default InputComment;
