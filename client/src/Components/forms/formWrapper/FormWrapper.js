import React, { forwardRef } from "react";
import { Row, Container, Card } from "react-bootstrap";

const FormWrapper = forwardRef(
  (
    {
      children,
      formLabelName,
      formLabelStyle = {
        fontSize: "24px",
        fontWeight: "bold",
        textAlign: "center",
      },
    },
    ref
  ) => {
    return (
      <Card className="m-3 p-5 border border-2 border-primary" ref={ref}>
        <Container className="d-flex align-items-center justify-content-center mb-5">
          <Row style={formLabelStyle}>{formLabelName}</Row>
        </Container>
        {children}
      </Card>
    );
  }
);

export default FormWrapper;
