import { motion } from "framer-motion";
import React from "react";

const backdropColors = {
  transparent: "transparent",
  dark: "rgba(0,0,0,0.6)",
};

export type BackdropColor = keyof typeof backdropColors;

export type BackdropProps = {
  visible?: boolean;
  onClick?(): void;
  color?: BackdropColor;
};

export const Backdrop: React.FC<BackdropProps> = (props) => {
  const { color = "dark", onClick, visible } = props;
  return (
    <motion.div
      onClick={onClick}
      initial={{
        opacity: 0,
        backgroundColor: backdropColors[color],
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        touchAction: "none",
        zIndex: 0,
        WebkitTapHighlightColor: "transparent",
      }}
      animate={{ opacity: visible ? 1 : 0, transition: { duration: 0.25 } }}
    />
  );
};
