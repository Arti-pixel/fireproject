import React, { useState, forwardRef, useContext } from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  fetchFireResults,
  updateFireResults,
} from "../../http/formsAPI/formsContentAPI/fireResultsFormAPI";
import {
  fetchFireResultsComment,
  updateFireResultsComment,
} from "../../http/formsAPI/formsCommentAPI/fireResultsFormCommentAPI";
import { FireGeneralContext } from "../../Pages/Card";
import useFetch from "../../Hooks/useFetch";
import FormWrapper from "./formWrapper/FormWrapper";
import submitFormFunction from "../../Helpers/submitFormFunction";
import FormSendButton from "./formSendButton/FormSendButton";
import OneTextRow from "./formRows/OneTextRow";
import TwoTextRow from "./formRows/TwoTextRow";

const FireResultsForm = forwardRef(({}, ref) => {
  const { userRoleIsChecker } = useContext(FireGeneralContext);
  let { cardId } = useParams();

  const [fireResults, setFireResults] = useState({
    savedPeople: null,
    savedChildren: null,
    savedByFirefighter: null,
    savedByVolunteers: null,
    savedByPeople: null,
    savedByServicePersonnel: null,
    savedByRescuers: null,
    diedInAFire: null,
    traumatizedPeople: null,
    destroyedBuildings: null,
    animalsDied: null,
    amountOfDamageByFire: null,
    totalValueOfSalvagedProperty: null,
    fireExtinguishingAgentsConsumed: null,
    hasComments: false,
  });

  const [fireResultsComment, setFireResultsComment] = useState({
    savedPeopleComment: null,
    savedByFirefighterComment: null,
    savedByVolunteersComment: null,
    savedByPeopleComment: null,
    savedByServicePersonnelComment: null,
    savedByRescuersComment: null,
    diedInAFireComment: null,
    traumatizedPeopleComment: null,
    destroyedBuildingsComment: null,
    animalsDiedComment: null,
    amountOfDamageByFireComment: null,
    totalValueOfSalvagedPropertyComment: null,
    fireExtinguishingAgentsConsumedComment: null,
  });

  const handleSubmit = (e) => {
    submitFormFunction({
      e,
      cardId,
      userRoleIsChecker,
      updateContent: updateFireResults,
      updateComment: updateFireResultsComment,
      content: fireResults,
      comments: fireResultsComment,
    });
  };

  //фетч данных и заполнение ими полей формы (первый хук - конент данных, второй - комментариев)

  useFetch(fetchFireResults, setFireResults, cardId);
  useFetch(fetchFireResultsComment, setFireResultsComment, cardId);

  //работа с изменением данных в форме

  const changeContentInput = (e) => {
    setFireResults({
      ...fireResults,
      [e.target.dataset.params]: e.target.value,
    });
  };

  const changeCommentInput = (e) => {
    setFireResultsComment({
      ...fireResultsComment,
      [e.target.dataset.params]: e.target.value,
    });
  };

  function emptyCommentInput(e) {
    setFireResultsComment({
      ...fireResultsComment,
      [e.target.dataset.params]: "",
    });
  }

  return (
    <FormWrapper formLabelName={"Результаты пожара"} ref={ref}>
      <Form onSubmit={handleSubmit}>
        <TwoTextRow
          firstFormLabelText={"Спасено людей:"}
          firstDataParam={"savedPeople"}
          firstInputType={"input"}
          firstPlaceholder={"количество людей"}
          firstValue={fireResults.savedPeople}
          secondFormLabelText={"чел., из них:"}
          secondDataParam={"savedChildren"}
          secondInputType={"input"}
          secondPlaceholder={"количество детей"}
          secondValue={fireResults.savedChildren}
          contentChangeFun={changeContentInput}
          dataCommentParam={"savedPeopleComment"}
          commentplaceHolder={"комментарий к количеству спасённых людей"}
          commentValue={fireResultsComment.savedPeopleComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTextRow
          dataContentParam={"savedByFirefighter"}
          contentLabelText={"пожарными"}
          contentFieldType={"input"}
          contentPlaceholder={"количество людей, спасённых пожарными"}
          contentValue={fireResults.savedByFirefighter}
          contentChangeFun={changeContentInput}
          dataCommentParam={"savedByFirefighterComment"}
          commentplaceHolder={
            "комментарий к количеству людей, спасённых пожарными"
          }
          commentValue={fireResultsComment.savedByFirefighterComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTextRow
          dataContentParam={"savedByVolunteers"}
          contentLabelText={"формированиями ДПО"}
          contentFieldType={"input"}
          contentPlaceholder={"количество людей, спасённых формированиями ДПО"}
          contentValue={fireResults.savedByVolunteers}
          contentChangeFun={changeContentInput}
          dataCommentParam={"savedByVolunteersComment"}
          commentplaceHolder={
            "комментарий к количеству людей, спасённых формированиями ДПО"
          }
          commentValue={fireResultsComment.savedByVolunteersComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTextRow
          dataContentParam={"savedByPeople"}
          contentLabelText={"населением"}
          contentFieldType={"input"}
          contentPlaceholder={"количество людей, спасённых населением"}
          contentValue={fireResults.savedByPeople}
          contentChangeFun={changeContentInput}
          dataCommentParam={"savedByPeopleComment"}
          commentplaceHolder={
            "комментарий к количеству людей, спасённых населением"
          }
          commentValue={fireResultsComment.savedByPeopleComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTextRow
          dataContentParam={"savedByServicePersonnel"}
          contentLabelText={
            "обслуживающим персоналом (работниками предприятия)"
          }
          contentFieldType={"input"}
          contentPlaceholder={
            "количество людей, спасённых обслуживающим персоналом"
          }
          contentValue={fireResults.savedByServicePersonnel}
          contentChangeFun={changeContentInput}
          dataCommentParam={"savedByServicePersonnelComment"}
          commentplaceHolder={
            "комментарий к количеству людей, спасённых обслуживающим персоналом (работниками предприятия)"
          }
          commentValue={fireResultsComment.savedByServicePersonnelComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTextRow
          dataContentParam={"savedByRescuers"}
          contentLabelText={"спасателями"}
          contentFieldType={"input"}
          contentPlaceholder={"количество людей, спасённых спасателями"}
          contentValue={fireResults.savedByRescuers}
          contentChangeFun={changeContentInput}
          dataCommentParam={"savedByRescuersComment"}
          commentplaceHolder={
            "комментарий к количеству людей, спасённых спасателями"
          }
          commentValue={fireResultsComment.savedByRescuersComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTextRow
          dataContentParam={"diedInAFire"}
          contentLabelText={"Погибло при пожаре, причина гибели"}
          contentFieldType={"textarea"}
          contentPlaceholder={"погибло при пожаре, причина гибели"}
          contentValue={fireResults.diedInAFire}
          contentChangeFun={changeContentInput}
          dataCommentParam={"diedInAFireComment"}
          commentplaceHolder={"комментарий к погибшим людям"}
          commentValue={fireResultsComment.diedInAFireComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTextRow
          dataContentParam={"traumatizedPeople"}
          contentLabelText={"Травмировано людей"}
          contentFieldType={"input"}
          contentPlaceholder={"количество травмированных людей"}
          contentValue={fireResults.traumatizedPeople}
          contentChangeFun={changeContentInput}
          dataCommentParam={"traumatizedPeopleComment"}
          commentplaceHolder={"комментарий к количеству травмированных людей"}
          commentValue={fireResultsComment.traumatizedPeopleComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTextRow
          dataContentParam={"destroyedBuildings"}
          contentLabelText={"Уничтожено строений"}
          contentFieldType={"input"}
          contentPlaceholder={"количество уничтоженных строений"}
          contentValue={fireResults.destroyedBuildings}
          contentChangeFun={changeContentInput}
          dataCommentParam={"destroyedBuildingsComment"}
          commentplaceHolder={"комментарий к количеству уничтоженных строений"}
          commentValue={fireResultsComment.destroyedBuildingsComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTextRow
          dataContentParam={"animalsDied"}
          contentLabelText={"Погибло животных"}
          contentFieldType={"textarea"}
          contentPlaceholder={"погибшие животные"}
          contentValue={fireResults.animalsDied}
          contentChangeFun={changeContentInput}
          dataCommentParam={"animalsDiedComment"}
          commentplaceHolder={"комментарий к погибшим животным"}
          commentValue={fireResultsComment.animalsDiedComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTextRow
          dataContentParam={"amountOfDamageByFire"}
          contentLabelText={"Сумма ущерба, причиненного пожаром"}
          contentFieldType={"input"}
          contentPlaceholder={"сумма ущерба"}
          contentValue={fireResults.amountOfDamageByFire}
          contentChangeFun={changeContentInput}
          dataCommentParam={"amountOfDamageByFireComment"}
          commentplaceHolder={"комментарий к сумме ущерба"}
          commentValue={fireResultsComment.amountOfDamageByFireComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTextRow
          dataContentParam={"totalValueOfSalvagedProperty"}
          contentLabelText={"Общая стоимость спасенного имущества"}
          contentFieldType={"input"}
          contentPlaceholder={"стоимость спасенного имущества"}
          contentValue={fireResults.totalValueOfSalvagedProperty}
          contentChangeFun={changeContentInput}
          dataCommentParam={"totalValueOfSalvagedPropertyComment"}
          commentplaceHolder={"комментарий к стоимости спасенного имущества"}
          commentValue={fireResultsComment.totalValueOfSalvagedPropertyComment}
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <OneTextRow
          dataContentParam={"fireExtinguishingAgentsConsumed"}
          contentLabelText={"Израсходовано огнетушащих веществ"}
          contentFieldType={"textarea"}
          contentPlaceholder={"воды, пенообразователя, порошка и др."}
          contentValue={fireResults.fireExtinguishingAgentsConsumed}
          contentChangeFun={changeContentInput}
          dataCommentParam={"fireExtinguishingAgentsConsumedComment"}
          commentplaceHolder={
            "комментарий к израсходованным огнетушащим веществам"
          }
          commentValue={
            fireResultsComment.fireExtinguishingAgentsConsumedComment
          }
          commentChangeFun={changeCommentInput}
          commentEmptyFun={emptyCommentInput}
        />
        <FormSendButton />
      </Form>
    </FormWrapper>
  );
});

export default FireResultsForm;
