import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { IconType } from "react-icons";

type Props = {
  Icon: IconType;
};

const ThemeIcon = ({ Icon }: Props) => {
  const { theme } = useTheme();
  return <Icon color={theme === "dark" ? "white" : "black"} />;
};

export default ThemeIcon;
