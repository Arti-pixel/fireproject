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

const FilterGeneralList = observer(() => {
  const { forceRender, setForceRender } = useContext(RenderContext);

  registerLocale("ru", ru);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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
                  onChange={(e) => {
                    // homeGeneral.filterList(selector.category, e.target.value)
                    homeGeneral.setFilterPropeties(
                      selector.category,
                      e.target.value
                    );
                    fetchRecords(
                      homeGeneral.filterPropeties,
                      homeGeneral.page,
                      homeGeneral.limit
                    );
                    setForceRender(!forceRender);
                  }}
                >
                  <option key={"choose"} value={"null"}>
                    Всё
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
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Начальная дата</Form.Label>
                <DatePicker
                  selected={startDate}
                  onChange={(value) => {
                    setStartDate(value);
                    //присвоение малого значения переменной уже переданной в стейт, то есть и в инпут, чтобы не засорять логику filterList еще больше
                    value =
                      value === null
                        ? moment("01-01-1970", "DD-MM-YYYY", true).format()
                        : value;
                    homeGeneral.setFilterPropeties("startCallDate", value);
                    fetchRecords(
                      homeGeneral.filterPropeties,
                      homeGeneral.page,
                      homeGeneral.limit
                    );
                    setForceRender(!forceRender);
                  }}
                  locale="ru"
                  dateFormat="dd.MM.yyyy"
                  selectsStart
                  maxDate={endDate}
                  placeholderText="Начало"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Конечная дата</Form.Label>
                <DatePicker
                  selected={endDate}
                  onChange={(value) => {
                    setEndDate(value);
                    //присвоение большого значения переменной уже переданной в стейт, то есть и в инпут, чтобы не засорять логику filterList еще больше
                    value =
                      value === null
                        ? moment(
                            moment().format("DD-MM-YYYY"),
                            "DD-MM-YYYY",
                            true
                          ).format()
                        : value;
                    homeGeneral.setFilterPropeties("endCallDate", value);
                    fetchRecords(
                      homeGeneral.filterPropeties,
                      homeGeneral.page,
                      homeGeneral.limit
                    );
                    setForceRender(!forceRender);
                  }}
                  locale="ru"
                  dateFormat="dd.MM.yyyy"
                  selectsEnd
                  minDate={startDate}
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
