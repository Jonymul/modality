import React from "react";
import { ModalBase, ModalProvider } from "@modality/modal";

export const App: React.FC = () => {
  return (
    <ModalProvider>
      <h1>Modality Demo App</h1>
      <p>Welcome to Modality</p>
      <ModalBase mounted>
        <h2>1.0 This is some modal content</h2>
      </ModalBase>
      <ModalBase mounted>
        <h2>2.0 This is some other modal content</h2>
        <ModalBase mounted>
          <h2>2.1 This is some weird nested modal content</h2>
        </ModalBase>
      </ModalBase>
    </ModalProvider>
  );
};
