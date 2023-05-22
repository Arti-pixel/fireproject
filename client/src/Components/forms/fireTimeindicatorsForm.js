import React, { useState, forwardRef, useContext } from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  fetchFireTimeindicators,
  updateFireTimeindicators,
} from "../../http/formsAPI/formsContentAPI/fireTimeindicatorsFormAPI";
import {
  fetchFireTimeindicatorsComment,
  updateFireTimeindicatorsComment,
} from "../../http/formsAPI/formsCommentAPI/fireTimeindicatorsFormCommentAPI";
import { FireGeneralContext } from "../../Pages/Card";
import useFetch from "../../Hooks/useFetch";
import FormWrapper from "./formWrapper/FormWrapper";
import HeadLabelFireTimeRow from "./formRows/HeadLabelFireTimeRow";
import submitFormFunction from "../../Helpers/submitFormFunction";
import OneTimeDateAndOneNumberRow from "./formRows/OneTimeDateAndOneNumberRow";
import OneTimeDateRow from "./formRows/OneTimeDateRow";
import FormSendButton from "./formSendButton/FormSendButton";

const FireTimeindicatorsForm = forwardRef(({}, ref) => {
  const { userRoleIsChecker } = useContext(FireGeneralContext);
  let { cardId } = useParams();

  const [fireTime, setFireTime] = useState({
    fireOccurrenceTime: null,
    fireOccurrenceSq: null,
    fireDetectionTime: null,
    fireDetectionSq: null,
    fireMessageTime: null,
    fireMessageSq: null,
    departureTime: null,
    fireArrivalTime: null,
    fireArrivalSq: null,
    firstBarrelTime: null,
    firstBarrelSq: null,
    additionalForcesTime: null,
    additionalForcesSq: null,
    localizationTime: null,
    localizationSq: null,
    openFireEliminationTime: null,
    openFireEliminationSq: null,
    fireConsequencesEliminationTime: null,
    firestationReturnTime: null,
    hasComments: false,
  });

  const [fireTimeComment, setFireTimeComment] = useState({
    fireOccurrenceComment: null,
    fireDetectionComment: null,
    fireMessageComment: null,
    departureTimeComment: null,
    fireArrivalComment: null,
    firstBarrelComment: null,
    additionalForcesComment: null,
    localizationComment: null,
    openFireEliminationComment: null,
    fireConsequencesEliminationComment: null,
    firestationReturnComment: null,
  });

  const handleSubmit = (e) => {
    submitFormFunction({
      e,
      cardId,
      userRoleIsChecker,
      updateContent: updateFireTimeindicators,
      updateComment: updateFireTimeindicatorsComment,
      content: fireTime,
      comments: fireTimeComment,
    });
  };

  //фетч данных и заполнение ими полей формы (первый хук - конент данных, второй - комментариев)

  useFetch(fetchFireTimeindicators, setFireTime, cardId);
  useFetch(fetchFireTimeindicatorsComment, setFireTimeComment, cardId);

  //работа с изменением данных в форме

  const changeContentInput = (e) => {
    setFireTime({
      ...fireTime,
      [e.target.dataset.params]: e.target.value,
    });
  };

  const changeCommentInput = (e) => {
    setFireTimeComment({
      ...fireTimeComment,
      [e.target.dataset.params]: e.target.value,
    });
  };

  function emptyCommentInput(e) {
    setFireTimeComment({
      ...fireTimeComment,
      [e.target.dataset.params]: "",
    });
  }

  return (
    <FormWrapper formLabelName={"Временные показатели"} ref={ref}>
      <HeadLabelFireTimeRow />
      <Form onSubmit={handleSubmit}>
        <OneTimeDateAndOneNumberRow
          formLabelText={"возникновения пожара"}
          dataTimeParam={"fireOccurrenceTime"}
          timeValue={fireTime.fireOccurrenceTime}
          dataNumberParam={"fireOccurrenceSq"}
          numberValue={fireTime.fireOccurrenceSq}
          contentChangeFun={changeContentInput}
          dataCommentParam={"fireOccurrenceComment"}
          commentplaceHolder={"комментарий к возникновению пожара"}
          commentValue={fireTimeComment.fireOccurrenceComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTimeDateAndOneNumberRow
          formLabelText={"обнаружения пожара"}
          dataTimeParam={"fireDetectionTime"}
          timeValue={fireTime.fireDetectionTime}
          dataNumberParam={"fireDetectionSq"}
          numberValue={fireTime.fireDetectionSq}
          contentChangeFun={changeContentInput}
          dataCommentParam={"fireDetectionComment"}
          commentplaceHolder={"комментарий к обнаружению пожара"}
          commentValue={fireTimeComment.fireDetectionComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTimeDateAndOneNumberRow
          formLabelText={"сообщения о пожаре"}
          dataTimeParam={"fireMessageTime"}
          timeValue={fireTime.fireMessageTime}
          dataNumberParam={"fireMessageSq"}
          numberValue={fireTime.fireMessageSq}
          contentChangeFun={changeContentInput}
          dataCommentParam={"fireMessageComment"}
          commentplaceHolder={"комментарий к сообщению о пожаре"}
          commentValue={fireTimeComment.fireMessageComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTimeDateRow
          formLabelText={"выезда дежурного караула (смены)"}
          dataTimeParam={"departureTime"}
          timeValue={fireTime.departureTime}
          contentChangeFun={changeContentInput}
          dataCommentParam={"departureTimeComment"}
          commentplaceHolder={"комментарий к времени выезда из ПЧ"}
          commentValue={fireTimeComment.departureTimeComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTimeDateAndOneNumberRow
          formLabelText={"прибытия на пожар"}
          dataTimeParam={"fireArrivalTime"}
          timeValue={fireTime.fireArrivalTime}
          dataNumberParam={"fireArrivalSq"}
          numberValue={fireTime.fireArrivalSq}
          contentChangeFun={changeContentInput}
          dataCommentParam={"fireArrivalComment"}
          commentplaceHolder={"комментарий к прибытию на пожар"}
          commentValue={fireTimeComment.fireArrivalComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTimeDateAndOneNumberRow
          formLabelText={"подачи первого ствола"}
          dataTimeParam={"firstBarrelTime"}
          timeValue={fireTime.firstBarrelTime}
          dataNumberParam={"firstBarrelSq"}
          numberValue={fireTime.firstBarrelSq}
          contentChangeFun={changeContentInput}
          dataCommentParam={"firstBarrelComment"}
          commentplaceHolder={"комментарий к подачи первого ствола"}
          commentValue={fireTimeComment.firstBarrelComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTimeDateAndOneNumberRow
          formLabelText={"вызова дополнительных сил"}
          dataTimeParam={"additionalForcesTime"}
          timeValue={fireTime.additionalForcesTime}
          dataNumberParam={"additionalForcesSq"}
          numberValue={fireTime.additionalForcesSq}
          contentChangeFun={changeContentInput}
          dataCommentParam={"additionalForcesComment"}
          commentplaceHolder={"комментарий к вызову дополнительных сил"}
          commentValue={fireTimeComment.additionalForcesComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTimeDateAndOneNumberRow
          formLabelText={"локализация"}
          dataTimeParam={"localizationTime"}
          timeValue={fireTime.localizationTime}
          dataNumberParam={"localizationSq"}
          numberValue={fireTime.localizationSq}
          contentChangeFun={changeContentInput}
          dataCommentParam={"localizationComment"}
          commentplaceHolder={"комментарий к локализации"}
          commentValue={fireTimeComment.localizationComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTimeDateAndOneNumberRow
          formLabelText={"ликвидация открытого горения"}
          dataTimeParam={"openFireEliminationTime"}
          timeValue={fireTime.openFireEliminationTime}
          dataNumberParam={"openFireEliminationSq"}
          numberValue={fireTime.openFireEliminationSq}
          contentChangeFun={changeContentInput}
          dataCommentParam={"openFireEliminationComment"}
          commentplaceHolder={"комментарий к ликвидации открытого горения"}
          commentValue={fireTimeComment.openFireEliminationComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTimeDateRow
          formLabelText={"ликвидация последствий пожара"}
          dataTimeParam={"fireConsequencesEliminationTime"}
          timeValue={fireTime.fireConsequencesEliminationTime}
          contentChangeFun={changeContentInput}
          dataCommentParam={"fireConsequencesEliminationComment"}
          commentplaceHolder={"комментарий к ликвидации последствий пожара"}
          commentValue={fireTimeComment.fireConsequencesEliminationComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTimeDateRow
          formLabelText={"возвращения в часть (место постоянной дислокации)"}
          dataTimeParam={"firestationReturnTime"}
          timeValue={fireTime.firestationReturnTime}
          contentChangeFun={changeContentInput}
          dataCommentParam={"firestationReturnComment"}
          commentplaceHolder={
            "комментарий к возвращению в часть (место постоянной дислокации)"
          }
          commentValue={fireTimeComment.firestationReturnComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />

        <FormSendButton />
      </Form>
    </FormWrapper>
  );
});

export default FireTimeindicatorsForm;
