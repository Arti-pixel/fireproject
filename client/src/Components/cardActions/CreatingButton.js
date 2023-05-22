import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import CreatingModal from "./actionsModals/CreatingModal";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

const CreatingButton = observer(() => {
  const { userInfo } = useContext(Context);

  const [creatingModalVisible, setCreatingModalVisible] = useState(false);

  const [createState, setCreateState] = useState({
    userId: userInfo.userId,
    shift: "",
    callDate: "",
    objectName: "",
    settlement: "",
    address: "",
  });

  function handleClick(status) {
    return () => {
      if (status === false) {
        setCreateState({
          userId: userInfo.userId,
          shift: "",
          callDate: "",
          objectName: "",
          settlement: "",
          address: "",
        });
      }
      setCreatingModalVisible(status);
    };
  }

  return (
    <>
      <Button className="mb-3" onClick={handleClick(true)}>
        Создать карточку
      </Button>
      <CreatingModal
        show={creatingModalVisible}
        onHide={handleClick(false)}
        createState={createState}
        setCreateState={setCreateState}
      />
    </>
  );
});

export default CreatingButton;
