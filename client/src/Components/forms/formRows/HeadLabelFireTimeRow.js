import { Row } from "react-bootstrap";

const HeadLabelFireTimeRow = () => {
  return (
    <Row
      className="mx-5"
      style={{ fontSize: "18px", fontWeight: "bold", textAlign: "center" }}
    >
      <div className="d-flex justify-content-between mb-3">
        <span className="d-inline">Время</span>
        <span className="d-inline">Площадь возгорания</span>
      </div>
    </Row>
  );
};

export default HeadLabelFireTimeRow;
