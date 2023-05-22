import React, { useState, forwardRef, useContext } from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { updateGeneral } from "../../http/formsAPI/formsContentAPI/generalFormAPI";
import {
  fetchGeneralComment,
  updateGeneralComment,
} from "../../http/formsAPI/formsCommentAPI/generalFormCommentAPI";
import OneTextRow from "./formRows/OneTextRow";
import useFetch from "../../Hooks/useFetch";
import FormWrapper from "./formWrapper/FormWrapper";
import FormSendButton from "./formSendButton/FormSendButton";
import submitFormFunction from "../../Helpers/submitFormFunction";
import { FireGeneralContext } from "../../Pages/Card";
import OneDateRow from "./formRows/OneDateRow";

const GeneralForm = forwardRef(({}, ref) => {
  const { fireGeneral, setFireGeneral, userRoleIsChecker, userRoleIsUser } =
    useContext(FireGeneralContext);
  const { cardId } = useParams();

  const [fireGeneralComment, setFireGeneralComment] = useState({
    callNumberComment: null,
    shiftComment: null,
    callDateComment: null,
    settlementComment: null,
    addressComment: null,
    objectNameComment: null,
    objectCharacteristicComment: null,
    objectDetectionComment: null,
  });

  const handleSubmit = (e) => {
    submitFormFunction({
      e,
      cardId,
      userRoleIsChecker,
      updateContent: updateGeneral,
      updateComment: updateGeneralComment,
      content: fireGeneral,
      comments: fireGeneralComment,
    });
  };

  //работа с изменением данных в форме

  const changeContentInput = (e) => {
    setFireGeneral({
      ...fireGeneral,
      [e.target.dataset.params]: e.target.value,
    });
  };

  const changeCommentInput = (e) => {
    setFireGeneralComment({
      ...fireGeneralComment,
      [e.target.dataset.params]: e.target.value,
    });
  };

  function emptyCommentInput(e) {
    setFireGeneralComment({
      ...fireGeneralComment,
      [e.target.dataset.params]: null,
    });
  }

  //фетч данных и заполнение ими всех полей формы при помощи добавления значения всех свойств полученного объекта соответствующим свойствам стейт объектов

  useFetch(fetchGeneralComment, setFireGeneralComment, cardId);

  return (
    <FormWrapper formLabelName={"Главная информация"} ref={ref}>
      <Form onSubmit={handleSubmit}>
        <OneTextRow
          dataContentParam={"callNumber"}
          contentLabelText={"Ранг пожара"}
          contentFieldType={"input"}
          contentPlaceholder={"введите Ранг пожара"}
          contentValue={fireGeneral.callNumber}
          contentChangeFun={changeContentInput}
          dataCommentParam={"callNumberComment"}
          commentplaceHolder={"комментарий к рангу пожара"}
          commentValue={fireGeneralComment.callNumberComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />

        <OneTextRow
          dataContentParam={"shift"}
          contentLabelText={"Караул (смена)"}
          contentFieldType={"textarea"}
          contentPlaceholder={"введите название караула (смены)"}
          contentValue={fireGeneral.shift}
          contentChangeFun={changeContentInput}
          contentFieldstyle={{ minHeight: "90px" }}
          dataCommentParam={"shiftComment"}
          commentplaceHolder={"комментарий к названию караула (смены)"}
          commentValue={fireGeneralComment.shiftComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />

        <OneDateRow
          formLabelText={"Дата тушения пожара"}
          dataDateParam={"callDate"}
          datePlaceholder={"дата тушения пожара"}
          content={fireGeneral}
          setContent={setFireGeneral}
          dateCommentParam={"callDateComment"}
          commentplaceHolder={"комментарий к дате тушения пожара"}
          commentValue={fireGeneralComment.callDateComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />

        <OneTextRow
          dataContentParam={"settlement"}
          contentLabelText={"Населённый пункт"}
          contentFieldType={"input"}
          contentPlaceholder={"введите название населённого пункта"}
          contentValue={fireGeneral.settlement}
          contentChangeFun={changeContentInput}
          dataCommentParam={"settlementComment"}
          commentplaceHolder={"комментарий к названию населённого пункта"}
          commentValue={fireGeneralComment.settlementComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />

        <OneTextRow
          dataContentParam={"address"}
          contentLabelText={"Адрес"}
          contentFieldType={"input"}
          contentPlaceholder={"введите адрес объекта пожара"}
          contentValue={fireGeneral.address}
          contentChangeFun={changeContentInput}
          dataCommentParam={"addressComment"}
          commentplaceHolder={"комментарий к адресу объекта пожара"}
          commentValue={fireGeneralComment.addressComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />

        <OneTextRow
          dataContentParam={"objectName"}
          contentLabelText={
            "Наименование организации (объекта), ведомственная принадлежность (форма собственности)"
          }
          contentFieldType={"textarea"}
          contentPlaceholder={"введите наименование организации"}
          contentValue={fireGeneral.objectName}
          contentChangeFun={changeContentInput}
          contentFieldstyle={{ minHeight: "110px" }}
          dataCommentParam={"objectNameComment"}
          commentplaceHolder={"комментарий к наименованию организации"}
          commentValue={fireGeneralComment.objectNameComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />

        <OneTextRow
          dataContentParam={"objectCharacteristic"}
          contentLabelText={"Характеристика организации (объекта)"}
          contentFieldType={"textarea"}
          contentPlaceholder={"характеристика организации (объекта)"}
          contentValue={fireGeneral.objectCharacteristic}
          contentChangeFun={changeContentInput}
          contentFieldstyle={{ overflow: "hidden", minHeight: "110px" }}
          dataCommentParam={"objectCharacteristicComment"}
          commentplaceHolder={
            "комментарий к характеристике организации (объекта)"
          }
          commentValue={fireGeneralComment.objectCharacteristicComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />

        <OneTextRow
          dataContentParam={"objectDetection"}
          contentLabelText={
            "Кем охраняется организация (объект), кто обнаружил пожар"
          }
          contentFieldType={"textarea"}
          contentPlaceholder={
            "кем охраняется организация (объект), кто обнаружил пожар"
          }
          contentValue={fireGeneral.objectDetection}
          contentChangeFun={changeContentInput}
          dataCommentParam={"objectDetectionComment"}
          commentplaceHolder={
            "комментарий к характеристике организации (объекта)"
          }
          commentValue={fireGeneralComment.objectDetectionComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />

        <FormSendButton />
      </Form>
    </FormWrapper>
  );
});

export default GeneralForm;
