const { Row, Form, Col } = require("react-bootstrap");

const ModalTextRow = ({
  dataInputParam,
  handleChangeInput,
  rowTextLabel,
  inputType,
  inputPlaceholder,
  inputValue,
}) => {
  const handleInput = (event) => {
    event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;
  };

  function classNameValue(inputType) {
    if (inputType === "textarea") {
      return "d-flex justify-content-center";
    }
    return "d-flex align-items-center";
  }

  return (
    <Row className="mb-3">
      <Form.Group as={Row}>
        <Form.Label column sm={4}>
          {rowTextLabel}
        </Form.Label>
        <Col sm={8} className={classNameValue(inputType)}>
          <Form.Control
            data-params={dataInputParam}
            as={inputType}
            placeholder={inputPlaceholder}
            value={inputValue}
            onChange={handleChangeInput}
            onInput={handleInput}
          />
        </Col>
      </Form.Group>
    </Row>
  );
};

export default ModalTextRow;
