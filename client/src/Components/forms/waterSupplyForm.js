import React, { useState, forwardRef, useContext } from "react";
import { Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  fetchWaterSupply,
  updateWaterSupply,
} from "../../http/formsAPI/formsContentAPI/waterSupplyFormAPI";
import {
  fetchWaterSupplyComment,
  updateWaterSupplyComment,
} from "../../http/formsAPI/formsCommentAPI/waterSupplyFormCommentAPI";
import { FireGeneralContext } from "../../Pages/Card";
import useFetch from "../../Hooks/useFetch";
import FormWrapper from "./formWrapper/FormWrapper";
import submitFormFunction from "../../Helpers/submitFormFunction";
import FormSendButton from "./formSendButton/FormSendButton";
import OneTextRow from "./formRows/OneTextRow";

const WatterSupplyForm = forwardRef(({}, ref) => {
  const { userRoleIsChecker } = useContext(FireGeneralContext);
  let { cardId } = useParams();

  const [watterSupply, setWatterSupply] = useState({
    waterSupplyСharacteristic: null,
    waterSupplyFromTank: null,
    waterSupplyWithWaterSource: null,
    waterDelivery: null,
    waterSupplyToPumping: null,
    hasComments: false,
  });

  const [watterSupplyComment, setWatterSupplyComment] = useState({
    waterSupplyСharacteristicComment: null,
    waterSupplyFromTankComment: null,
    waterSupplyWithWaterSourceComment: null,
    waterDeliveryComment: null,
    waterSupplyToPumpingComment: null,
  });

  const handleSubmit = (e) => {
    submitFormFunction({
      e,
      cardId,
      userRoleIsChecker,
      updateContent: updateWaterSupply,
      updateComment: updateWaterSupplyComment,
      content: watterSupply,
      comments: watterSupplyComment,
    });
  };

  //фетч данных и заполнение ими полей формы (первый хук - конент данных, второй - комментариев)

  useFetch(fetchWaterSupply, setWatterSupply, cardId);
  useFetch(fetchWaterSupplyComment, setWatterSupplyComment, cardId);

  //работа с изменением данных в форме

  const changeContentInput = (e) => {
    setWatterSupply({
      ...watterSupply,
      [e.target.dataset.params]: e.target.value,
    });
  };

  const changeCommentInput = (e) => {
    setWatterSupplyComment({
      ...watterSupplyComment,
      [e.target.dataset.params]: e.target.value,
    });
  };

  function emptyCommentInput(e) {
    setWatterSupplyComment({
      ...watterSupplyComment,
      [e.target.dataset.params]: "",
    });
  }

  return (
    <FormWrapper formLabelName={"Водоснабжение"} ref={ref}>
      <Form onSubmit={handleSubmit}>
        <OneTextRow
          dataContentParam={"waterSupplyСharacteristic"}
          contentLabelText={"Водоснабжение"}
          contentFieldType={"textarea"}
          contentPlaceholder={
            "вид, характеристика водоснабжения, исправность, расстояние до места пожара"
          }
          contentValue={watterSupply.waterSupplyСharacteristic}
          contentChangeFun={changeContentInput}
          contentFieldstyle={{ minHeight: "210px" }}
          dataCommentParam={"waterSupplyСharacteristicComment"}
          commentplaceHolder={"комментарий к характеристике водоснабжения"}
          commentValue={watterSupplyComment.waterSupplyСharacteristicComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <Row className="mb-3 fw-bold">Способы подачи воды:</Row>
        <OneTextRow
          dataContentParam={"waterSupplyFromTank"}
          contentLabelText={"от ёмкостей автоцистерны"}
          contentFieldType={"textarea"}
          contentPlaceholder={"количество стволов"}
          contentValue={watterSupply.waterSupplyFromTank}
          contentChangeFun={changeContentInput}
          contentFieldstyle={{ minHeight: "210px" }}
          dataCommentParam={"waterSupplyFromTankComment"}
          commentplaceHolder={"комментарий к количеству стволов"}
          commentValue={watterSupplyComment.waterSupplyFromTankComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTextRow
          dataContentParam={"waterSupplyWithWaterSource"}
          contentLabelText={"с установкой на водоисточник"}
          contentFieldType={"textarea"}
          contentPlaceholder={
            "количество и вид водоисточников, вид используемой техники, расстояние до места пожара"
          }
          contentValue={watterSupply.waterSupplyWithWaterSource}
          contentChangeFun={changeContentInput}
          contentFieldstyle={{ minHeight: "210px" }}
          dataCommentParam={"waterSupplyWithWaterSourceComment"}
          commentplaceHolder={"комментарий к количеству стволов"}
          commentValue={watterSupplyComment.waterSupplyWithWaterSourceComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTextRow
          dataContentParam={"waterDelivery"}
          contentLabelText={"подвоз воды"}
          contentFieldType={"textarea"}
          contentPlaceholder={
            "количество, вид и расстояние до водоисточника, вид используемой техники"
          }
          contentValue={watterSupply.waterDelivery}
          contentChangeFun={changeContentInput}
          contentFieldstyle={{ minHeight: "210px" }}
          dataCommentParam={"waterDeliveryComment"}
          commentplaceHolder={"комментарий к подвозу воды"}
          commentValue={watterSupplyComment.waterDeliveryComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTextRow
          dataContentParam={"waterSupplyToPumping"}
          contentLabelText={"подача воды в перекачку"}
          contentFieldType={"textarea"}
          contentPlaceholder={
            "количество и вид водоисточников, вид используемой техники, длина магистральной линии"
          }
          contentValue={watterSupply.waterSupplyToPumping}
          contentChangeFun={changeContentInput}
          contentFieldstyle={{ minHeight: "210px" }}
          dataCommentParam={"waterSupplyToPumpingComment"}
          commentplaceHolder={"комментарий к подаче воды в перекачку"}
          commentValue={watterSupplyComment.waterSupplyToPumpingComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <FormSendButton />
      </Form>
    </FormWrapper>
  );
});

export default WatterSupplyForm;
