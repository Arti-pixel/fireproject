import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CreatingModal from "./modals/CreatingModal";
import { observer } from "mobx-react-lite";

const CreatingButton = observer(() => {
  const [creatingModalVisible, setCreatingModalVisible] = useState(false);
  return (
    <>
      <Button
        className="mb-3"
        onClick={() => {
          setCreatingModalVisible(true);
        }}
      >
        Создать карточку
      </Button>
      <CreatingModal
        show={creatingModalVisible}
        onHide={() => {
          setCreatingModalVisible(false);
        }}
      />
    </>
  );
});

export default CreatingButton;
