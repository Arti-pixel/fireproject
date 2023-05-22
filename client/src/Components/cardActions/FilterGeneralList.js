import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import homeGeneral from "../../store/HomeGeneralStore";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";
import moment from "moment";
import { fetchRecords } from "../../http/cardInfoAPI";
import { RenderContext } from "../GeneralList";
import { Context } from "../..";

const FilterGeneralList = observer(() => {
  const { forceRender, setForceRender } = useContext(RenderContext);
  const { userInfo } = useContext(Context);
  const userRoleIsChecker = userInfo.userRole === "checker";
  const userRoleIsUser = userInfo.userRole === "user";

  registerLocale("ru", ru);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const changingDate = (setFunction, defaultDate) => (value) => {
    setFunction(value);
    value =
      value === null ? moment(defaultDate, "DD-MM-YYYY", true).format() : value;
    homeGeneral.setFilterPropeties("endCallDate", value);
    fetchRecords(
      homeGeneral.filterPropeties,
      homeGeneral.page,
      homeGeneral.limit
    );
    setForceRender(!forceRender);
  };

  const changingStringInput = (category) => (e) => {
    homeGeneral.setFilterPropeties(category, e.target.value);
    fetchRecords(
      homeGeneral.filterPropeties,
      homeGeneral.page,
      homeGeneral.limit
    );
    setForceRender(!forceRender);
  };

  return (
    <>
      <Form style={{ marginTop: "4rem" }}>
        <Row className="mb-3">
          {homeGeneral.generalsFilter.map((selector) => {
            return (
              <Form.Group as={Col} key={selector.category}>
                <Form.Label>{selector.naming}</Form.Label>
                <Form.Select
                  name={selector.category}
                  onChange={changingStringInput(selector.category)}
                >
                  <option key={"choose"} value={"null"}>
                    все
                  </option>
                  {selector.options.map((option, index) => {
                    return (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>
            );
          })}
          <Form.Group as={Col}>
            <Form.Label>Текущий статус карточки</Form.Label>
            <Form.Select
              name="currentState"
              onChange={changingStringInput("currentState")}
            >
              <option key={"choose"} value={"null"}>
                все
              </option>
              <option key={"ready"} value={"checked"}>
                готовые
              </option>
              {userRoleIsUser ? (
                <option key={"editing"} value={"userEdit"}>
                  редактируемые
                </option>
              ) : null}

              {userRoleIsChecker ? (
                <option key={"checking"} value={"checkerEdit"}>
                  проверяемые
                </option>
              ) : null}
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col}>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Начальная дата</Form.Label>
                <DatePicker
                  selected={startDate}
                  onChange={
                    changingDate(setStartDate, "01-01-1970")
                    //присвоение малого значения переменной уже переданной в стейт, то есть и в инпут, чтобы не засорять логику filterList еще больше
                  }
                  locale="ru"
                  dateFormat="dd.MM.yyyy"
                  selectsStart
                  maxDate={endDate === null ? new Date() : endDate}
                  placeholderText="Начало"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Конечная дата</Form.Label>
                <DatePicker
                  selected={endDate}
                  onChange={
                    changingDate(setEndDate, moment().format("DD-MM-YYYY"))
                    //присвоение большого значения переменной уже переданной в стейт, то есть и в инпут, чтобы не засорять логику filterList еще больше}
                  }
                  locale="ru"
                  dateFormat="dd.MM.yyyy"
                  selectsEnd
                  minDate={startDate}
                  maxDate={new Date()}
                  placeholderText="Конец"
                />
              </Form.Group>
            </Row>
          </Form.Group>
        </Row>
      </Form>
    </>
  );
});

export default FilterGeneralList;
