import React, { useState, forwardRef, useContext } from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  fetchFireExtinguishPersonnel,
  updateFireExtinguishPersonnel,
} from "../../http/formsAPI/formsContentAPI/fireExtinguishPersonnelFormAPI";
import {
  fetchFireExtinguishPersonnelComment,
  updateFireExtinguishPersonnelComment,
} from "../../http/formsAPI/formsCommentAPI/fireExtinguishPersonnelFormCommentAPI";
import { FireGeneralContext } from "../../Pages/Card";
import useFetch from "../../Hooks/useFetch";
import FormWrapper from "./formWrapper/FormWrapper";
import submitFormFunction from "../../Helpers/submitFormFunction";
import FormSendButton from "./formSendButton/FormSendButton";
import OneTextRow from "./formRows/OneTextRow";

const FireExtinguishPersonnelForm = forwardRef(({}, ref) => {
  const { userRoleIsChecker } = useContext(FireGeneralContext);
  let { cardId } = useParams();

  const [fireExtinguishPersonnel, setFireExtinguishPersonnel] = useState({
    fireExtinguishPersonnel: null,
    fireExtinguishTech: null,
    fireExtinguishWithGasAndSmokeProtectionService: null,
    OnesquadOfFirefighters: null,
    TwosquadOfFirefighters: null,
    hasComments: false,
  });

  const [fireExtinguishPersonnelComment, setFireExtinguishPersonnelComment] =
    useState({
      fireExtinguishPersonnelComment: null,
      fireExtinguishTechComment: null,
      fireExtinguishWithGasAndSmokeProtectionServiceComment: null,
      OnesquadOfFirefightersComment: null,
      TwosquadOfFirefightersComment: null,
    });

  const handleSubmit = (e) => {
    submitFormFunction({
      e,
      cardId,
      userRoleIsChecker,
      updateContent: updateFireExtinguishPersonnel,
      updateComment: updateFireExtinguishPersonnelComment,
      content: fireExtinguishPersonnel,
      comments: fireExtinguishPersonnelComment,
    });
  };

  //фетч данных и заполнение ими полей формы (первый хук - конент данных, второй - комментариев)

  useFetch(fetchFireExtinguishPersonnel, setFireExtinguishPersonnel, cardId);
  useFetch(
    fetchFireExtinguishPersonnelComment,
    setFireExtinguishPersonnelComment,
    cardId
  );

  //работа с изменением данных в форме

  const changeContentInput = (e) => {
    setFireExtinguishPersonnel({
      ...fireExtinguishPersonnel,
      [e.target.dataset.params]: e.target.value,
    });
  };

  const changeCommentInput = (e) => {
    setFireExtinguishPersonnelComment({
      ...fireExtinguishPersonnelComment,
      [e.target.dataset.params]: e.target.value,
    });
  };

  function emptyCommentInput(e) {
    setFireExtinguishPersonnelComment({
      ...fireExtinguishPersonnelComment,
      [e.target.dataset.params]: "",
    });
  }

  return (
    <FormWrapper formLabelName={"Тушение пожара"} ref={ref}>
      <Form onSubmit={handleSubmit}>
        <OneTextRow
          dataContentParam={"fireExtinguishPersonnel"}
          contentLabelText={"Кем (чем) потушен пожар"}
          contentFieldType={"input"}
          contentPlaceholder={
            "формированием ДПО, подразделением пожарной охраны, населением, совместно, первичными средствами, автоматикой"
          }
          contentValue={fireExtinguishPersonnel.fireExtinguishPersonnel}
          contentChangeFun={changeContentInput}
          dataCommentParam={"fireExtinguishPersonnelComment"}
          commentplaceHolder={"комментарий"}
          commentValue={
            fireExtinguishPersonnelComment.fireExtinguishPersonnelComment
          }
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTextRow
          dataContentParam={"fireExtinguishTech"}
          contentLabelText={"С использованием техники организаций (объектов)"}
          contentFieldType={"input"}
          contentPlaceholder={"указать вид техники"}
          contentValue={fireExtinguishPersonnel.fireExtinguishTech}
          contentChangeFun={changeContentInput}
          dataCommentParam={"fireExtinguishTechComment"}
          commentplaceHolder={"комментарий к указанной технике"}
          commentValue={
            fireExtinguishPersonnelComment.fireExtinguishTechComment
          }
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTextRow
          dataContentParam={"fireExtinguishWithGasAndSmokeProtectionService"}
          contentLabelText={
            "С использованием сил и средств опорных пунктов тушения крупных пожаров"
          }
          contentFieldType={"input"}
          contentPlaceholder={
            "силы и средствa опорных пунктов тушения крупных пожаров"
          }
          contentValue={
            fireExtinguishPersonnel.fireExtinguishWithGasAndSmokeProtectionService
          }
          contentChangeFun={changeContentInput}
          dataCommentParam={
            "fireExtinguishWithGasAndSmokeProtectionServiceComment"
          }
          commentplaceHolder={
            "комментарий к силам и средствaм опорных пунктов тушения крупных пожаров"
          }
          commentValue={
            fireExtinguishPersonnelComment.fireExtinguishWithGasAndSmokeProtectionServiceComment
          }
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTextRow
          dataContentParam={"OnesquadOfFirefighters"}
          contentLabelText={"одно звено"}
          contentFieldType={"input"}
          contentPlaceholder={"время работы"}
          contentValue={fireExtinguishPersonnel.OnesquadOfFirefighters}
          contentChangeFun={changeContentInput}
          dataCommentParam={"OnesquadOfFirefightersComment"}
          commentplaceHolder={"комментарий к времени работы одного звена"}
          commentValue={
            fireExtinguishPersonnelComment.OnesquadOfFirefightersComment
          }
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTextRow
          dataContentParam={"TwosquadOfFirefighters"}
          contentLabelText={"два звена"}
          contentFieldType={"input"}
          contentPlaceholder={"время работы"}
          contentValue={fireExtinguishPersonnel.TwosquadOfFirefighters}
          contentChangeFun={changeContentInput}
          dataCommentParam={"TwosquadOfFirefightersComment"}
          commentplaceHolder={"комментарий к времени работы двух звен"}
          commentValue={
            fireExtinguishPersonnelComment.TwosquadOfFirefightersComment
          }
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <FormSendButton />
      </Form>
    </FormWrapper>
  );
});

export default FireExtinguishPersonnelForm;
