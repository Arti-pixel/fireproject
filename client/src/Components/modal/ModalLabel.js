const { Modal } = require("react-bootstrap");

const ModalLabel = ({ modalLabelText }) => {
  return (
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        {modalLabelText}
      </Modal.Title>
    </Modal.Header>
  );
};

export default ModalLabel;
