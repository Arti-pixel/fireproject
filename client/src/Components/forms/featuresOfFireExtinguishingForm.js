import React, { useState, forwardRef, useContext } from "react";
import { Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  fetchFeaturesOfFireExtinguishing,
  updateFeaturesOfFireExtinguishing,
} from "../../http/formsAPI/formsContentAPI/featuresOfFireExtinguishingFormAPI";
import {
  fetchFeaturesOfFireExtinguishingComment,
  updateFeaturesOfFireExtinguishingComment,
} from "../../http/formsAPI/formsCommentAPI/featuresOfFireExtinguishingFormCommentAPI";
import { FireGeneralContext } from "../../Pages/Card";
import useFetch from "../../Hooks/useFetch";
import FormWrapper from "./formWrapper/FormWrapper";
import submitFormFunction from "../../Helpers/submitFormFunction";
import FormSendButton from "./formSendButton/FormSendButton";
import OneTextRow from "./formRows/OneTextRow";

const FeaturesOfFireExtinguishingForm = forwardRef(({}, ref) => {
  const { userRoleIsChecker } = useContext(FireGeneralContext);
  let { cardId } = useParams();

  const [featuresOfFireExtinguishing, setFeaturesOfFireExtinguishing] =
    useState({
      featuresOfFireExtinguishing: null,
      creationOfOperationalHeadquarters: null,
      creationOfFireFightingAreas: null,
      circumstancesContributingToFireDevelopment: null,
      circumstancesComplicatingTheSituation: null,
      hasComments: false,
    });

  const [
    featuresOfFireExtinguishingComment,
    setFeaturesOfFireExtinguishingComment,
  ] = useState({
    featuresOfFireExtinguishingComment: null,
    creationOfOperationalHeadquartersComment: null,
    creationOfFireFightingAreasComment: null,
    circumstancesContributingToFireDevelopmentComment: null,
    circumstancesComplicatingTheSituationComment: null,
  });

  const handleSubmit = (e) => {
    submitFormFunction({
      e,
      cardId,
      userRoleIsChecker,
      updateContent: updateFeaturesOfFireExtinguishing,
      updateComment: updateFeaturesOfFireExtinguishingComment,
      content: featuresOfFireExtinguishing,
      comments: featuresOfFireExtinguishingComment,
    });
  };

  //фетч данных и заполнение ими полей формы (первый хук - конент данных, второй - комментариев)

  useFetch(
    fetchFeaturesOfFireExtinguishing,
    setFeaturesOfFireExtinguishing,
    cardId
  );
  useFetch(
    fetchFeaturesOfFireExtinguishingComment,
    setFeaturesOfFireExtinguishingComment,
    cardId
  );

  //работа с изменением данных в форме

  const changeContentInput = (e) => {
    setFeaturesOfFireExtinguishing({
      ...featuresOfFireExtinguishing,
      [e.target.dataset.params]: e.target.value,
    });
  };

  const changeCommentInput = (e) => {
    setFeaturesOfFireExtinguishingComment({
      ...featuresOfFireExtinguishingComment,
      [e.target.dataset.params]: e.target.value,
    });
  };

  function emptyCommentInput(e) {
    setFeaturesOfFireExtinguishingComment({
      ...featuresOfFireExtinguishingComment,
      [e.target.dataset.params]: "",
    });
  }

  return (
    <FormWrapper formLabelName={"Особенности тушения пожара"} ref={ref}>
      <Form onSubmit={handleSubmit}>
        <OneTextRow
          dataContentParam={"featuresOfFireExtinguishing"}
          contentLabelText={"особенности тушения пожара"}
          contentFieldType={"textarea"}
          contentPlaceholder={"особенности тушения пожара"}
          contentValue={featuresOfFireExtinguishing.featuresOfFireExtinguishing}
          contentChangeFun={changeContentInput}
          contentFieldstyle={{ minHeight: "140px" }}
          dataCommentParam={"featuresOfFireExtinguishingComment"}
          commentplaceHolder={"комментарий к особенностям тушения пожара"}
          commentValue={
            featuresOfFireExtinguishingComment.featuresOfFireExtinguishingComment
          }
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTextRow
          dataContentParam={"creationOfOperationalHeadquarters"}
          contentLabelText={"создание оперативного штаба на пожаре"}
          contentFieldType={"textarea"}
          contentPlaceholder={"время, состав штаба"}
          contentValue={
            featuresOfFireExtinguishing.creationOfOperationalHeadquarters
          }
          contentChangeFun={changeContentInput}
          contentFieldstyle={{ minHeight: "140px" }}
          dataCommentParam={"creationOfOperationalHeadquartersComment"}
          commentplaceHolder={
            "комментарий к созданию оперативного штаба на пожаре"
          }
          commentValue={
            featuresOfFireExtinguishingComment.creationOfOperationalHeadquartersComment
          }
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTextRow
          dataContentParam={"creationOfFireFightingAreas"}
          contentLabelText={
            "создание боевых участков тушения пожара (секторов проведения работ)"
          }
          contentFieldType={"textarea"}
          contentPlaceholder={
            "время, задачи боевых участков тушения пожара (секторов проведения работ)"
          }
          contentValue={featuresOfFireExtinguishing.creationOfFireFightingAreas}
          contentChangeFun={changeContentInput}
          contentFieldstyle={{ minHeight: "140px" }}
          dataCommentParam={"creationOfFireFightingAreasComment"}
          commentplaceHolder={
            "комментарий к созданию боевых участков тушения пожара (секторов проведения работ)"
          }
          commentValue={
            featuresOfFireExtinguishingComment.creationOfFireFightingAreasComment
          }
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <Row className="mb-3 fw-bold">Обстоятельства</Row>
        <OneTextRow
          dataContentParam={"circumstancesContributingToFireDevelopment"}
          contentLabelText={"способствующие развитию пожара"}
          contentFieldType={"textarea"}
          contentPlaceholder={"обстоятельства, способствующие развитию пожара"}
          contentValue={
            featuresOfFireExtinguishing.circumstancesContributingToFireDevelopment
          }
          contentChangeFun={changeContentInput}
          contentFieldstyle={{ minHeight: "140px" }}
          dataCommentParam={"circumstancesContributingToFireDevelopmentComment"}
          commentplaceHolder={
            "комментарий к обстоятельствам, способствующим развитию пожара"
          }
          commentValue={
            featuresOfFireExtinguishingComment.circumstancesContributingToFireDevelopmentComment
          }
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTextRow
          dataContentParam={"circumstancesComplicatingTheSituation"}
          contentLabelText={"усложняющие обстановку"}
          contentFieldType={"textarea"}
          contentPlaceholder={
            "наличие АХОВ, взрывчатых, радиоактивных веществ и т.д."
          }
          contentValue={
            featuresOfFireExtinguishing.circumstancesComplicatingTheSituation
          }
          contentChangeFun={changeContentInput}
          contentFieldstyle={{ minHeight: "140px" }}
          dataCommentParam={"circumstancesComplicatingTheSituationComment"}
          commentplaceHolder={
            "комментарий к обстоятельствам, усложняющим обстановку"
          }
          commentValue={
            featuresOfFireExtinguishingComment.circumstancesComplicatingTheSituationComment
          }
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <FormSendButton />
      </Form>
    </FormWrapper>
  );
});

export default FeaturesOfFireExtinguishingForm;
