import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { IconType } from "react-icons";

type Props = {
  Icon: IconType;
  color?: string;
};

const ThemeIcon = ({ Icon, color }: Props) => {
  const { theme } = useTheme();
  return <Icon color={color || (theme === "dark" ? "white" : "black")} />;
};

export default ThemeIcon;
