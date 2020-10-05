import React from "react";
import { ModalProvider } from "@modality/modal-core";
import { Modal } from "@modality/modal";

export const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <ModalProvider>
      <h1>Modality Demo App</h1>
      <p>Welcome to Modality</p>
      <button onClick={() => setOpen(true)}>Open modal</button>
      <Modal open={open} onBackdropClick={() => setOpen(false)}>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
        <h2>This is a modal</h2>
      </Modal>
    </ModalProvider>
  );
};
