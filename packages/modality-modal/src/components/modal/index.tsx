import React from "react";
import { ModalBase } from "@modality/modal-core";
import { Backdrop } from "../backdrop";
import { motion } from "framer-motion";

type ModalProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag"
> & {
  open: boolean;
  onBackdropClick?(): void;
};

export const Modal: React.FC<ModalProps> = (props) => {
  const { open, onBackdropClick, ...divProps } = props;
  const [mounted, setMounted] = React.useState(open);

  const handleAnimationComplete = React.useCallback(() => {
    if (!open) {
      setMounted(false);
    }
  }, [open]);

  React.useEffect(() => {
    if (open) {
      setMounted(true);
    }
  }, [open]);

  return (
    <ModalBase mounted={mounted}>
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            overflow: "auto",
            maxHeight: "100%",
            minWidth: "100%",
          }}
        >
          <div
            style={{
              boxSizing: "border-box",
              padding: "3rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Backdrop visible={open} onClick={onBackdropClick} />
            <motion.div
              initial={{
                background: "#fff",
                padding: "1.75rem 2rem",
                opacity: 0,
                transform: "scale(0.7)",
                zIndex: 1,
              }}
              animate={{
                opacity: open ? 1 : 0,
                transform: open ? "scale(1)" : "scale(0.7)",
                transition: { duration: 0.25 },
              }}
              onAnimationComplete={handleAnimationComplete}
              {...divProps}
            >
              {props.children}
            </motion.div>
          </div>
        </div>
      </div>
    </ModalBase>
  );
};
