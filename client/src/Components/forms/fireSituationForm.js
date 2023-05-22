import React, { useState, forwardRef, useContext } from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  fetchFireSituation,
  updateFireSituation,
} from "../../http/formsAPI/formsContentAPI/fireSituationFormAPI";
import {
  fetchFireSituationComment,
  updateFireSituationComment,
} from "../../http/formsAPI/formsCommentAPI/fireSituationFormCommentAPI";
import { FireGeneralContext } from "../../Pages/Card";
import useFetch from "../../Hooks/useFetch";
import FormWrapper from "./formWrapper/FormWrapper";
import submitFormFunction from "../../Helpers/submitFormFunction";
import FormSendButton from "./formSendButton/FormSendButton";
import OneBigTexAreaRow from "./formRows/OneBigTextAreaRow";

const FireSituationForm = forwardRef(({}, ref) => {
  const { userRoleIsChecker } = useContext(FireGeneralContext);
  let { cardId } = useParams();

  const [fireSituation, setFireSituation] = useState({
    fireSituation: null,
    hasComments: false,
  });

  const [fireSituationComment, setFireSituationComment] = useState({
    fireSituationComment: null,
  });

  const handleSubmit = (e) => {
    submitFormFunction({
      e,
      cardId,
      userRoleIsChecker,
      updateContent: updateFireSituation,
      updateComment: updateFireSituationComment,
      content: fireSituation,
      comments: fireSituationComment,
    });
    localStorage.removeItem(cardId);
  };

  //фетч данных и заполнение ими полей формы (первый хук - конент данных, второй - комментариев)

  useFetch(fetchFireSituation, setFireSituation, cardId);
  useFetch(fetchFireSituationComment, setFireSituationComment, cardId);

  //работа с изменением данных в форме

  const changeContentInput = (e) => {
    localStorage.setItem(cardId, e.target.value);
    setFireSituation({
      ...fireSituation,
      [e.target.dataset.params]: e.target.value,
    });
  };

  const changeCommentInput = (e) => {
    setFireSituationComment({
      ...fireSituationComment,
      [e.target.dataset.params]: e.target.value,
    });
  };

  function emptyCommentInput(e) {
    setFireSituationComment({
      ...fireSituationComment,
      [e.target.dataset.params]: "",
    });
  }

  return (
    <FormWrapper formLabelName={"Обстановка на пожаре"} ref={ref}>
      <Form onSubmit={handleSubmit}>
        <OneBigTexAreaRow
          dataContentParam={"fireSituation"}
          contentFieldType={"textarea"}
          contentPlaceholder={
            "что и где горело, ход развития и тушения пожара, действия формирований ДПО и населения до прибытия пожарных подразделений, действия пожарных подразделений"
          }
          contentValue={fireSituation.fireSituation}
          contentChangeFun={changeContentInput}
          contentFieldstyle={{ minHeight: "700px" }}
          dataCommentParam={"fireSituationComment"}
          commentplaceHolder={"комментарий к характеристике водоснабжения"}
          commentValue={fireSituationComment.fireSituationComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <FormSendButton />
      </Form>
    </FormWrapper>
  );
});

export default FireSituationForm;
