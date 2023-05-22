import { Col, Form, Row } from "react-bootstrap";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";

const ModalDateRow = ({
  dataInputParam,
  handleChangeDateInput,
  rowTextLabel,
  inputPlaceholder,
  inputValue,
}) => {
  registerLocale("ru", ru);

  return (
    <Row className="mb-3">
      <Form.Group as={Row}>
        <Form.Label column sm={4}>
          {rowTextLabel}
        </Form.Label>
        <Col sm={8} className="d-flex align-items-center">
          <DatePicker
            data-params={dataInputParam}
            selected={inputValue || new Date()}
            onChange={handleChangeDateInput}
            minDate={new Date("01.01.1970")}
            maxDate={new Date()}
            locale="ru"
            dateFormat="dd.MM.yyyy"
            placeholderText={inputPlaceholder}
          />
        </Col>
      </Form.Group>
    </Row>
  );
};

export default ModalDateRow;
