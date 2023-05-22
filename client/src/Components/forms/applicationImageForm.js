import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Row, Col, Image } from "react-bootstrap";
import {
  fetchApplicationImage,
  updateApplicationImage,
  deleteApplicationImage,
  createApplicationImage,
} from "../../http/formsAPI/formsContentAPI/applicationImageFormAPI";
import {
  fetchApplicationImageComment,
  updateApplicationImageComment,
} from "../../http/formsAPI/formsCommentAPI/applicationImageFormCommentAPI";
import { useParams } from "react-router-dom";
import { FireGeneralContext } from "../../Pages/Card";

const ApplicationImageForm = () => {
  const { userRoleIsChecker, userRoleIsUser } = useContext(FireGeneralContext);

  const [inputFields, setInputFields] = useState([]);
  const [inputFieldsComment, setInputFieldsComment] = useState([]);
  const [forceRender, setForceRender] = useState(false);

  const { cardId } = useParams();

  useEffect(() => {
    fetchApplicationImage(cardId).then((data) => {
      setInputFields(data);
    });
    fetchApplicationImageComment(cardId).then((data) => {
      setInputFieldsComment(data);
    });
  }, [cardId, forceRender]);

  const findObj = (imageFieldId, arr) => {
    return arr.find((obj) => {
      return obj.applicationImageId === Number(imageFieldId);
    });
  };

  const addRecord = () => {
    createApplicationImage(cardId).then(() => {
      setForceRender(!forceRender);
    });
  };

  const handleTextFieldChange = (e) => {
    setInputFields([
      ...inputFields.filter(
        (obj) => obj.applicationImageId !== Number(e.target.id)
      ),
      { ...findObj(e.target.id, inputFields), imageSignature: e.target.value },
    ]);
  };

  const handleDelete = (e) => {
    const applicationImageId = e.target.id;
    deleteApplicationImage(cardId, applicationImageId).then(() => {
      setForceRender(!forceRender);
    });
  };

  const updateRecord = (e) => {
    e.preventDefault();
    const updatingObject = findObj(e.target.id, inputFields);
    const formData = new FormData();
    formData.append("applicationImageId", updatingObject.applicationImageId);
    formData.append("imageSignature", updatingObject.imageSignature);
    formData.append("hasComments", updatingObject.hasComments);

    if (e.target.files) {
      formData.append("applicationImage", e.target.files[0]);
    }
    updateApplicationImage(cardId, formData).then(() => {
      setForceRender(!forceRender);
    });
  };

  return (
    <>
      {(userRoleIsChecker || userRoleIsUser) && (
        <Row>
          <Col sm={5} className="mb-3">
            <Button
              onClick={addRecord}
              className="d-flex justify-content-start align-items-start"
            >
              Добавить текстовое поле
            </Button>
          </Col>
        </Row>
      )}

      {inputFields.map((inputField, index) => {
        return (
          <Form
            id={inputField.applicationImageId}
            onSubmit={updateRecord}
            key={index}
            className="mb-5"
          >
            <Form.Group as={Row}>
              <Form.Control
                className="mb-3"
                id={inputField.applicationImageId}
                type="text"
                value={inputField.imageSignature}
                onChange={handleTextFieldChange}
              />
              <Form.Control
                className="mb-3"
                id={inputField.applicationImageId}
                type="file"
                accept="image/*"
                onChange={updateRecord}
              />
              {inputField.applicationImage && (
                <Image
                  src={
                    process.env.REACT_APP_API_URL + inputField.applicationImage
                  }
                  className="mb-3"
                />
              )}
              {(userRoleIsChecker || userRoleIsUser) && (
                <Row>
                  <Col>{}</Col>

                  <Col className="d-flex justify-content-end">
                    {userRoleIsUser && (
                      <Button
                        id={inputField.applicationImageId}
                        variant="danger"
                        className="ml-auto"
                        style={{ marginRight: "24px" }}
                        size="lg"
                        onClick={handleDelete}
                      >
                        Удалить
                      </Button>
                    )}
                    <Button
                      type="submit"
                      variant="primary"
                      className="ml-auto"
                      style={{ marginRight: "24px" }}
                      size="lg"
                    >
                      Отправить
                    </Button>
                  </Col>
                </Row>
              )}
            </Form.Group>
          </Form>
        );
      })}
    </>
  );
};

export default ApplicationImageForm;
