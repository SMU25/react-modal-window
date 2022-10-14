import React, { useState, ReactElement } from "react";
import { ModalWindow } from "./components/ModalWindow";
import "./index.scss";

const BUTTON_NAME_OPEN_MODAL = "open modal";

function App(): ReactElement {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <div className="App">
      <button className="open-modal-btn" onClick={() => setIsOpenModal(true)}>
        ✨ {BUTTON_NAME_OPEN_MODAL}
      </button>
      <ModalWindow
        isOpenModal={isOpenModal}
        onCloseModal={() => setIsOpenModal(false)}
      />
    </div>
  );
}

export default App;
