import React, { useState, forwardRef, useContext } from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  fetchFireOthers,
  updateFireOthers,
} from "../../http/formsAPI/formsContentAPI/fireOthersFormAPI";
import {
  fetchFireOthersComment,
  updateFireOthersComment,
} from "../../http/formsAPI/formsCommentAPI/fireOthersFormCommentAPI";
import { FireGeneralContext } from "../../Pages/Card";
import useFetch from "../../Hooks/useFetch";
import FormWrapper from "./formWrapper/FormWrapper";
import submitFormFunction from "../../Helpers/submitFormFunction";
import FormSendButton from "./formSendButton/FormSendButton";
import OneTextRow from "./formRows/OneTextRow";
import OneTextWithBigLabelRow from "./formRows/OneTextWithBigLabelRow";

const FireOthersForm = forwardRef(({}, ref) => {
  const { userRoleIsChecker } = useContext(FireGeneralContext);
  let { cardId } = useParams();

  const [fireOthers, setFireOthers] = useState({
    serviceInteraction: null,
    notArrivedServices: null,
    fireEquipmentMalfunction: null,
    fireCauseAndCulprit: null,
    hasComments: false,
  });

  const [fireOthersComment, setFireOthersComment] = useState({
    serviceInteractionComment: null,
    notArrivedServicesComment: null,
    fireEquipmentMalfunctionComment: null,
    fireCauseAndCulpritComment: null,
  });

  const handleSubmit = (e) => {
    submitFormFunction({
      e,
      cardId,
      userRoleIsChecker,
      updateContent: updateFireOthers,
      updateComment: updateFireOthersComment,
      content: fireOthers,
      comments: fireOthersComment,
    });
  };

  //фетч данных и заполнение ими полей формы (первый хук - конент данных, второй - комментариев)

  useFetch(fetchFireOthers, setFireOthers, cardId);
  useFetch(fetchFireOthersComment, setFireOthersComment, cardId);

  //работа с изменением данных в форме

  const changeContentInput = (e) => {
    setFireOthers({
      ...fireOthers,
      [e.target.dataset.params]: e.target.value,
    });
  };

  const changeCommentInput = (e) => {
    setFireOthersComment({
      ...fireOthersComment,
      [e.target.dataset.params]: e.target.value,
    });
  };

  function emptyCommentInput(e) {
    setFireOthersComment({
      ...fireOthersComment,
      [e.target.dataset.params]: "",
    });
  }

  return (
    <FormWrapper formLabelName={"Другая информация о пожаре"} ref={ref}>
      <Form onSubmit={handleSubmit}>
        <OneTextRow
          dataContentParam={"serviceInteraction"}
          contentLabelText={
            "С какими службами было организовано взаимодействие"
          }
          contentFieldType={"input"}
          contentPlaceholder={
            "с какими службами было организовано взаимодействие"
          }
          contentValue={fireOthers.serviceInteraction}
          contentChangeFun={changeContentInput}
          dataCommentParam={"serviceInteractionComment"}
          commentplaceHolder={
            "комментарий к службам, с которыми было организовано взаимодействие"
          }
          commentValue={fireOthersComment.serviceInteractionComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTextWithBigLabelRow
          dataContentParam={"notArrivedServices"}
          contentLabelText={
            "Не прибыли подразделения пожарной охраны и службы жизнеобеспечения, предусмотренные Планом привлечения сил и средств подразделений пожарной охраны, гарнизонов пожарной охраны для тушения пожаров и проведения аварийно- спасательных работ, Расписанием выездов подразделений пожарной охраны, гарнизонов пожарной охраны для тушения пожаров и проведения аварийно-спасательных работ, затребованные РТП"
          }
          contentFieldType={"textarea"}
          contentPlaceholder={"какие подразделения, причина неприбытия"}
          contentValue={fireOthers.notArrivedServices}
          contentChangeFun={changeContentInput}
          dataCommentParam={"notArrivedServicesComment"}
          commentplaceHolder={"комментарий к неприбывшим подразделениям"}
          commentValue={fireOthersComment.notArrivedServicesComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTextRow
          dataContentParam={"fireEquipmentMalfunction"}
          contentLabelText={"Неисправность в работе пожарной техники"}
          contentFieldType={"textarea"}
          contentPlaceholder={
            "марка автомобиля, номер подразделения, вид неисправности"
          }
          contentValue={fireOthers.fireEquipmentMalfunction}
          contentChangeFun={changeContentInput}
          dataCommentParam={"fireEquipmentMalfunctionComment"}
          commentplaceHolder={"комментарий к неисправной пожарной технике"}
          commentValue={fireOthersComment.fireEquipmentMalfunctionComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTextRow
          dataContentParam={"fireCauseAndCulprit"}
          contentLabelText={
            "Причина и виновник пожара (установленный либо предполагаемый)"
          }
          contentFieldType={"textarea"}
          contentPlaceholder={
            "причина и виновник пожара (установленный либо предполагаемый)"
          }
          contentValue={fireOthers.fireCauseAndCulprit}
          contentChangeFun={changeContentInput}
          dataCommentParam={"fireCauseAndCulpritComment"}
          commentplaceHolder={"комментарий к причине и виновнику пожара"}
          commentValue={fireOthersComment.fireCauseAndCulpritComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <FormSendButton />
      </Form>
    </FormWrapper>
  );
});

export default FireOthersForm;
