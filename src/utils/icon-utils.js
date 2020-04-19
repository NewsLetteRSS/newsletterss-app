import React from "react";
import { Icon, IconElement, useTheme } from "@ui-kitten/components";

export const NRIcon = (style, name) => <Icon {...style} name={name} />;

export const KittenIcon = ({ name, size }) => {
  const theme = useTheme();

  return <Icon width={size} height={size} name={name} />;
};
