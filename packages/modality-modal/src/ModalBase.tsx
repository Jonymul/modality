import * as React from "react";
import * as ReactDOM from "react-dom";
import { Consumer } from "./ModalProvider";

export type ModalBaseProps = {
  mounted?: boolean;
};

export const ModalBase: React.FC<ModalBaseProps> = (props) => {
  const { mounted = false } = props;

  return (
    <Consumer>
      {(modalContext) => {
        if (!modalContext) {
          throw "A modal cannot be rendered outside of <ModalProvider>";
        }

        if (!mounted || !modalContext.modalOutletElement) {
          return null;
        }

        return ReactDOM.createPortal(
          <div>{props.children}</div>,
          modalContext.modalOutletElement
        );
      }}
    </Consumer>
  );
};
