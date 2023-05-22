import React, { useState, forwardRef, useContext } from "react";
import { Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  fetchApplicationName,
  updateApplicationName,
} from "../../http/formsAPI/formsContentAPI/applicationNameFormAPI";
import {
  fetchApplicationNameComment,
  updateApplicationNameComment,
} from "../../http/formsAPI/formsCommentAPI/applicationNameFormCommentAPI";
import { FireGeneralContext } from "../../Pages/Card";
import useFetch from "../../Hooks/useFetch";
import FormWrapper from "./formWrapper/FormWrapper";
import submitFormFunction from "../../Helpers/submitFormFunction";
import FormSendButton from "./formSendButton/FormSendButton";
import OneTextRow from "./formRows/OneTextRow";
import ApplicationImageForm from "./applicationImageForm";

const ApplicationNameForm = forwardRef(({}, ref) => {
  const { userRoleIsChecker } = useContext(FireGeneralContext);
  let { cardId } = useParams();

  const [applicationName, setApplicationName] = useState({
    applicationName: null,
    hasComments: false,
  });

  const [applicationNameComment, setApplicationNameComment] = useState({
    applicationNameComment: null,
  });

  const handleSubmit = (e) => {
    submitFormFunction({
      e,
      cardId,
      userRoleIsChecker,
      updateContent: updateApplicationName,
      updateComment: updateApplicationNameComment,
      content: applicationName,
      comments: applicationNameComment,
    });
  };

  //фетч данных и заполнение ими полей формы (первый хук - конент данных, второй - комментариев)

  useFetch(fetchApplicationName, setApplicationName, cardId);
  useFetch(fetchApplicationNameComment, setApplicationNameComment, cardId);

  //работа с изменением данных в форме

  const changeContentInput = (e) => {
    setApplicationName({
      ...applicationName,
      [e.target.dataset.params]: e.target.value,
    });
  };

  const changeCommentInput = (e) => {
    setApplicationNameComment({
      ...applicationNameComment,
      [e.target.dataset.params]: e.target.value,
    });
  };

  function emptyCommentInput(e) {
    setApplicationNameComment({
      ...applicationNameComment,
      [e.target.dataset.params]: "",
    });
  }

  return (
    <FormWrapper formLabelName={"Приложения"} ref={ref}>
      <Form onSubmit={handleSubmit}>
        <OneTextRow
          dataContentParam={"applicationName"}
          contentLabelText={"Приложения:"}
          contentFieldType={"input"}
          contentPlaceholder={"название приложения"}
          contentValue={applicationName.applicationName}
          contentChangeFun={changeContentInput}
          dataCommentParam={"applicationNameComment"}
          commentplaceHolder={"комментарий ко всему приложению"}
          commentValue={applicationNameComment.applicationNameComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <FormSendButton />
      </Form>

      <Row className="mb-3 fw-bold">Изображения с подписями:</Row>
      <ApplicationImageForm />
    </FormWrapper>
  );
});

export default ApplicationNameForm;
