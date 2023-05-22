import React, { useContext, useRef, useState, createContext } from "react";
import GeneralForm from "../Components/forms/generalForm";
import FireTimeindicatorsForm from "../Components/forms/fireTimeindicatorsForm";
import ReportSendButton from "../Components/forms/reportSend/ReportSendButton";
import useFetch from "../Hooks/useFetch";
import { fetchGeneral } from "../http/formsAPI/formsContentAPI/generalFormAPI";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "..";
import SideBarElement from "../Components/SideBarElement";
import WatterSupplyForm from "../Components/forms/waterSupplyForm.js";
import FireSituationForm from "../Components/forms/fireSituationForm";
import ActionsEvaluationForm from "../Components/forms/actionsEvaluationForm";
import FeaturesOfFireExtinguishingForm from "../Components/forms/featuresOfFireExtinguishingForm";
import FireExtinguishPersonnelForm from "../Components/forms/fireExtinguishPersonnelForm";
import FireOthersForm from "../Components/forms/fireOthersForm";
import FireResultsForm from "../Components/forms/fireResultsForm";
import ReportConclusionForm from "../Components/forms/reportConclusionForm";
import ApplicationNameForm from "../Components/forms/applicationNameForm";
import { HOME_ROUTE } from "../utils/consts";

export const FireGeneralContext = createContext(null);

const Card = () => {
  const [fireGeneral, setFireGeneral] = useState({
    callNumber: null,
    shift: "",
    callDate: new Date(),
    settlement: "",
    address: "",
    objectName: "",
    objectCharacteristic: null,
    objectDetection: null,
    currentState: null,
    hasComments: false,
  });
  const { cardId } = useParams();
  const { userInfo } = useContext(Context);
  const navigate = useNavigate();

  const refs = {
    mainInfoRef: useRef(null),
    fireTimeindicatorsRef: useRef(null),
    waterSupplyRef: useRef(null),
    fireSituationRef: useRef(null),
    actionsEvaluation: useRef(null),
    featuresOfFireExtinguishing: useRef(null),
    fireExtinguishPersonnel: useRef(null),
    fireOthers: useRef(null),
    fireResults: useRef(null),
    reportConclusion: useRef(null),
    applicationName: useRef(null),
  };

  //фетч данных и заполнение ими всех полей формы при помощи добавления значения всех свойств полученного объекта соответствующим свойствам стейт объектов
  useFetch(fetchGeneral, setFireGeneral, cardId);

  fetchGeneral(cardId).then((data) => {
    if (!data) {
      navigate(HOME_ROUTE);
    }
  });

  const userRoleIsChecker =
    userInfo.userRole === "checker" &&
    fireGeneral.currentState === "checkerEdit";
  const userRoleIsUser =
    userInfo.userRole === "user" && fireGeneral.currentState === "userEdit";

  return (
    <div className="d-flex flex-row">
      <div
        style={{ minWidth: "calc(15%)", maxWidth: "calc(15%)" }}
        className="d-flex flex-column position-fixed mt-5"
      >
        <div className="mt-2">
          <SideBarElement
            reference={refs.mainInfoRef}
            navBarLabel="Главная информация"
          />
        </div>
        <SideBarElement
          reference={refs.fireTimeindicatorsRef}
          navBarLabel="Временные показатели"
        />
        <SideBarElement
          reference={refs.waterSupplyRef}
          navBarLabel="Водоснабжение"
        />
        <SideBarElement
          reference={refs.fireSituationRef}
          navBarLabel="Обстановка на пожаре"
        />
        <SideBarElement
          reference={refs.actionsEvaluation}
          navBarLabel="Оценка действий"
        />
        <SideBarElement
          reference={refs.featuresOfFireExtinguishing}
          navBarLabel="Особенности тушения пожара"
        />
        <SideBarElement
          reference={refs.fireExtinguishPersonnel}
          navBarLabel="Тушение пожара"
        />
        <SideBarElement
          reference={refs.fireOthers}
          navBarLabel="Другая информация о пожаре"
        />
        <SideBarElement
          reference={refs.fireResults}
          navBarLabel="Результаты пожара"
        />
        <SideBarElement
          reference={refs.reportConclusion}
          navBarLabel="Заключение отчёта"
        />
        <SideBarElement
          reference={refs.applicationName}
          navBarLabel="Приложение"
        />
      </div>
      <div
        className="mt-5"
        style={{ minWidth: "calc(85% - 2px)", marginLeft: "calc(15%)" }}
      >
        <FireGeneralContext.Provider
          value={{
            fireGeneral,
            setFireGeneral,
            userRoleIsChecker,
            userRoleIsUser,
          }}
        >
          <GeneralForm ref={refs.mainInfoRef} />

          <FireTimeindicatorsForm ref={refs.fireTimeindicatorsRef} />

          <WatterSupplyForm ref={refs.waterSupplyRef} />

          <FireSituationForm ref={refs.fireSituationRef} />

          <ActionsEvaluationForm ref={refs.actionsEvaluation} />

          <FeaturesOfFireExtinguishingForm
            ref={refs.featuresOfFireExtinguishing}
          />

          <FireExtinguishPersonnelForm ref={refs.fireExtinguishPersonnel} />

          <FireOthersForm ref={refs.fireOthers} />

          <FireResultsForm ref={refs.fireResults} />

          <ReportConclusionForm ref={refs.reportConclusion} />

          <ApplicationNameForm ref={refs.applicationName} />

          <ReportSendButton />
        </FireGeneralContext.Provider>
      </div>
    </div>
  );
};

export default Card;
