import React, { useState, forwardRef, useContext } from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  fetchActionsEvaluation,
  updateActionsEvaluation,
} from "../../http/formsAPI/formsContentAPI/actionsEvaluationFormAPI";
import {
  fetchActionsEvaluationComment,
  updateActionsEvaluationComment,
} from "../../http/formsAPI/formsCommentAPI/actionsEvaluationFormCommentAPI";
import { FireGeneralContext } from "../../Pages/Card";
import useFetch from "../../Hooks/useFetch";
import FormWrapper from "./formWrapper/FormWrapper";
import submitFormFunction from "../../Helpers/submitFormFunction";
import FormSendButton from "./formSendButton/FormSendButton";
import OneTextRow from "./formRows/OneTextRow";

const ActionsEvaluationForm = forwardRef(({}, ref) => {
  const { userRoleIsChecker } = useContext(FireGeneralContext);
  let { cardId } = useParams();

  const [actionsEvaluation, setActionsEvaluation] = useState({
    firstFireExtinguishingCompany: null,
    secondFireExtinguishingCompany: null,
    thirdAndNextFireExtinguishingCompanies: null,
    chiefsOfTheCombatAreas: null,
    fireDepartments: null,
    hasComments: false,
  });

  const [actionsEvaluationComment, setActionsEvaluationComment] = useState({
    firstFireExtinguishingCompanyComment: null,
    secondFireExtinguishingCompanyComment: null,
    thirdAndNextFireExtinguishingCompaniesComment: null,
    chiefsOfTheCombatAreasComment: null,
    fireDepartmentsComment: null,
  });

  const handleSubmit = (e) => {
    submitFormFunction({
      e,
      cardId,
      userRoleIsChecker,
      updateContent: updateActionsEvaluation,
      updateComment: updateActionsEvaluationComment,
      content: actionsEvaluation,
      comments: actionsEvaluationComment,
    });
  };

  //фетч данных и заполнение ими полей формы (первый хук - конент данных, второй - комментариев)

  useFetch(fetchActionsEvaluation, setActionsEvaluation, cardId);
  useFetch(fetchActionsEvaluationComment, setActionsEvaluationComment, cardId);

  //работа с изменением данных в форме

  const changeContentInput = (e) => {
    setActionsEvaluation({
      ...actionsEvaluation,
      [e.target.dataset.params]: e.target.value,
    });
  };

  const changeCommentInput = (e) => {
    setActionsEvaluationComment({
      ...actionsEvaluationComment,
      [e.target.dataset.params]: e.target.value,
    });
  };

  function emptyCommentInput(e) {
    setActionsEvaluationComment({
      ...actionsEvaluationComment,
      [e.target.dataset.params]: "",
    });
  }

  return (
    <FormWrapper formLabelName={"Оценка действий"} ref={ref}>
      <Form onSubmit={handleSubmit}>
        <OneTextRow
          dataContentParam={"firstFireExtinguishingCompany"}
          contentLabelText={"РТП-1"}
          contentFieldType={"textarea"}
          contentPlaceholder={"оценка действий РТП-1"}
          contentValue={actionsEvaluation.firstFireExtinguishingCompany}
          contentChangeFun={changeContentInput}
          contentFieldstyle={{ minHeight: "140px" }}
          dataCommentParam={"firstFireExtinguishingCompanyComment"}
          commentplaceHolder={"комментарий к оценке действий РТП-1"}
          commentValue={
            actionsEvaluationComment.firstFireExtinguishingCompanyComment
          }
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTextRow
          dataContentParam={"secondFireExtinguishingCompany"}
          contentLabelText={"РТП-2"}
          contentFieldType={"textarea"}
          contentPlaceholder={"оценка действий РТП-2"}
          contentValue={actionsEvaluation.secondFireExtinguishingCompany}
          contentChangeFun={changeContentInput}
          contentFieldstyle={{ minHeight: "140px" }}
          dataCommentParam={"secondFireExtinguishingCompanyComment"}
          commentplaceHolder={"комментарий к оценке действий РТП-2"}
          commentValue={
            actionsEvaluationComment.secondFireExtinguishingCompanyComment
          }
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTextRow
          dataContentParam={"thirdAndNextFireExtinguishingCompanies"}
          contentLabelText={"РТП-3 и последующих"}
          contentFieldType={"textarea"}
          contentPlaceholder={"оценка действий РТП-3 и последующих"}
          contentValue={
            actionsEvaluation.thirdAndNextFireExtinguishingCompanies
          }
          contentChangeFun={changeContentInput}
          contentFieldstyle={{ minHeight: "140px" }}
          dataCommentParam={"thirdAndNextFireExtinguishingCompaniesComment"}
          commentplaceHolder={
            "комментарий к оценке действий РТП-3 и последующих"
          }
          commentValue={
            actionsEvaluationComment.thirdAndNextFireExtinguishingCompaniesComment
          }
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTextRow
          dataContentParam={"chiefsOfTheCombatAreas"}
          contentLabelText={
            "Начальников боевых участков тушения пожара (секторов проведения работ)"
          }
          contentFieldType={"textarea"}
          contentPlaceholder={
            "оценка действий начальников боевых участков тушения пожара (секторов проведения работ)"
          }
          contentValue={actionsEvaluation.chiefsOfTheCombatAreas}
          contentChangeFun={changeContentInput}
          contentFieldstyle={{ minHeight: "140px" }}
          dataCommentParam={"chiefsOfTheCombatAreasComment"}
          commentplaceHolder={
            "комментарий к оценке действий начальников боевых участков тушения пожара (секторов проведения работ)"
          }
          commentValue={actionsEvaluationComment.chiefsOfTheCombatAreasComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTextRow
          dataContentParam={"fireDepartments"}
          contentLabelText={"Пожарных подразделений"}
          contentFieldType={"textarea"}
          contentPlaceholder={"оценка действий пожарных подразделений"}
          contentValue={actionsEvaluation.fireDepartments}
          contentChangeFun={changeContentInput}
          contentFieldstyle={{ minHeight: "140px" }}
          dataCommentParam={"fireDepartmentsComment"}
          commentplaceHolder={
            "комментарий к оценке действий пожарных подразделений"
          }
          commentValue={actionsEvaluationComment.fireDepartmentsComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <FormSendButton />
      </Form>
    </FormWrapper>
  );
});

export default ActionsEvaluationForm;
