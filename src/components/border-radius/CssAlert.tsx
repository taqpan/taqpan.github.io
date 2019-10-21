import { Alert, Button } from "@blueprintjs/core";
import * as React from "react";
import { cssButton } from "./BorderRadius.scss";

const {useState} = React;

interface CssAlertProps {
  topLeftH: number;
  topLeftV: number;
  topRightH: number;
  topRightV: number;
  bottomLeftH: number;
  bottomLeftV: number;
  bottomRightH: number;
  bottomRightV: number;
}

export const CssAlert = (props: CssAlertProps) => {
  const [isCssVisible, setIsCssVisible] = useState(false);
  const css = "border-radius: " +
    `${props.topLeftH}% ${props.topRightH}% ${props.bottomRightH}% ${props.bottomLeftH}% / ` +
    `${props.topLeftV}% ${props.topRightV}% ${props.bottomRightV}% ${props.bottomLeftV}%`;

  return <div>
    <Button className={cssButton} intent="primary" text="Get CSS code" onClick={() => setIsCssVisible(true)}/>
    <Alert isOpen={isCssVisible} onClose={() => setIsCssVisible(false)}>
      {css}
    </Alert>
  </div>;
};
