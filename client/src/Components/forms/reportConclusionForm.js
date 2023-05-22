import React, { useState, forwardRef, useContext } from "react";
import { Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  fetchReportConclusion,
  updateReportConclusion,
} from "../../http/formsAPI/formsContentAPI/reportConclusionFormAPI";
import {
  fetchReportConclusionComment,
  updateReportConclusionComment,
} from "../../http/formsAPI/formsCommentAPI/reportConclusionFormCommentAPI";
import { FireGeneralContext } from "../../Pages/Card";
import useFetch from "../../Hooks/useFetch";
import FormWrapper from "./formWrapper/FormWrapper";
import submitFormFunction from "../../Helpers/submitFormFunction";
import FormSendButton from "./formSendButton/FormSendButton";
import OneTextRow from "./formRows/OneTextRow";
import OneDateRow from "./formRows/OneDateRow";

const ReportConclusionForm = forwardRef(({}, ref) => {
  const { userRoleIsChecker } = useContext(FireGeneralContext);
  let { cardId } = useParams();

  const [reportConclusion, setReportConclusion] = useState({
    violationsOfSafetyRegulations: null,
    diedByViolation: null,
    traumatizedByViolation: null,
    conclusionAndProposals: null,
    fullName: null,
    reportDate: null,
    hasComments: false,
  });

  const [reportConclusionComment, setReportConclusionComment] = useState({
    violationsOfSafetyRegulationsComment: null,
    diedByViolationComment: null,
    traumatizedByViolationComment: null,
    conclusionAndProposalsComment: null,
    fullNameComment: null,
    reportDateComment: null,
  });

  const handleSubmit = (e) => {
    submitFormFunction({
      e,
      cardId,
      userRoleIsChecker,
      updateContent: updateReportConclusion,
      updateComment: updateReportConclusionComment,
      content: reportConclusion,
      comments: reportConclusionComment,
    });
  };

  //фетч данных и заполнение ими полей формы (первый хук - конент данных, второй - комментариев)

  useFetch(fetchReportConclusion, setReportConclusion, cardId);
  useFetch(fetchReportConclusionComment, setReportConclusionComment, cardId);

  //работа с изменением данных в форме

  const changeContentInput = (e) => {
    setReportConclusion({
      ...reportConclusion,
      [e.target.dataset.params]: e.target.value,
    });
  };

  const changeCommentInput = (e) => {
    setReportConclusionComment({
      ...reportConclusionComment,
      [e.target.dataset.params]: e.target.value,
    });
  };

  function emptyCommentInput(e) {
    setReportConclusionComment({
      ...reportConclusionComment,
      [e.target.dataset.params]: "",
    });
  }

  return (
    <FormWrapper formLabelName={"Заключение отчёта"} ref={ref}>
      <Form onSubmit={handleSubmit}>
        <OneTextRow
          dataContentParam={"violationsOfSafetyRegulations"}
          contentLabelText={
            "Случаи нарушения правил охраны труда и техники безопасности работниками пожарной охраны"
          }
          contentFieldType={"textarea"}
          contentPlaceholder={"вид нарушения, либо не отмечено"}
          contentValue={reportConclusion.violationsOfSafetyRegulations}
          contentChangeFun={changeContentInput}
          contentFieldstyle={{ minHeight: "140px" }}
          dataCommentParam={"violationsOfSafetyRegulationsComment"}
          commentplaceHolder={
            "комментарий к случаям нарушения правил охраны труда и техники безопасности работниками пожарной охраны"
          }
          commentValue={
            reportConclusionComment.violationsOfSafetyRegulationsComment
          }
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <Row className="mb-3 fw-bold">при этом:</Row>
        <OneTextRow
          dataContentParam={"diedByViolation"}
          contentLabelText={"человек погибло"}
          contentFieldType={"input"}
          contentPlaceholder={"количество погибших"}
          contentValue={reportConclusion.diedByViolation}
          contentChangeFun={changeContentInput}
          dataCommentParam={"diedByViolationComment"}
          commentplaceHolder={"комментарий к количеству погибших сотрудников"}
          commentValue={reportConclusionComment.diedByViolationComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTextRow
          dataContentParam={"traumatizedByViolation"}
          contentLabelText={"человек травмировано"}
          contentFieldType={"input"}
          contentPlaceholder={"количество травмированных"}
          contentValue={reportConclusion.traumatizedByViolation}
          contentChangeFun={changeContentInput}
          dataCommentParam={"traumatizedByViolationComment"}
          commentplaceHolder={
            "комментарий к количеству травмированных сотрудников"
          }
          commentValue={reportConclusionComment.traumatizedByViolationComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTextRow
          dataContentParam={"conclusionAndProposals"}
          contentLabelText={"Выводы, предложения и принятые меры"}
          contentFieldType={"textarea"}
          contentPlaceholder={"выводы, предложения и принятые меры"}
          contentValue={reportConclusion.conclusionAndProposals}
          contentChangeFun={changeContentInput}
          contentFieldstyle={{ minHeight: "100px" }}
          dataCommentParam={"conclusionAndProposalsComment"}
          commentplaceHolder={
            "комментарий к выводам, предложениям и принятым мерам"
          }
          commentValue={reportConclusionComment.conclusionAndProposalsComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTextRow
          dataContentParam={"fullNameComment"}
          contentLabelText={"Руководитель подразделения пожарной охраны"}
          contentFieldType={"input"}
          contentPlaceholder={"И.О. Фамилия"}
          contentValue={reportConclusion.fullNameComment}
          contentChangeFun={changeContentInput}
          dataCommentParam={"fullNameCommentComment"}
          commentplaceHolder={
            "комментарий к ФИО руководителя подразделения пожарной охраны"
          }
          commentValue={reportConclusionComment.fullNameCommentComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneDateRow
          formLabelText={"Дата отчёта"}
          dataDateParam={"reportDate"}
          datePlaceholder={"дата отчёта"}
          content={reportConclusion}
          setContent={setReportConclusion}
          dateCommentParam={"reportDateComment"}
          commentplaceHolder={"комментарий к дате отчёта"}
          commentValue={reportConclusionComment.reportDateComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <FormSendButton />
      </Form>
    </FormWrapper>
  );
});

export default ReportConclusionForm;
