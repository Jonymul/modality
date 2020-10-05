import React from "react";

type ModalProvider = {
  modalOutletElement: HTMLDivElement | null;
};

export const { Provider, Consumer } = React.createContext<ModalProvider | null>(
  null
);

export const ModalProvider: React.FC = (props) => {
  const modalOutletRef = React.useRef<HTMLDivElement>(null);
  const [modalOutletElement, setModalOutletElement] = React.useState(
    modalOutletRef.current
  );
  const providerState: ModalProvider = {
    modalOutletElement: modalOutletElement,
  };

  React.useEffect(() => {
    setModalOutletElement(modalOutletRef.current);
  }, [modalOutletRef.current]);

  return (
    <Provider value={providerState}>
      {props.children}
      <div ref={modalOutletRef}></div>
    </Provider>
  );
};
