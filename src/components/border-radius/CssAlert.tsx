import styled from "@emotion/styled";
import { Alert, Box, Button, Modal } from "@mui/material";
import { useState } from "react";

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

  return (
    <div>
        <OpenButton onClick={() => setIsCssVisible(true)}>Get CSS code</OpenButton>
        {isCssVisible && (
        <Modal
            open={isCssVisible}
            onClose={() => setIsCssVisible(false)}
        >
            <ModalContents>
                <Alert onClose={() => setIsCssVisible(false)}>
                    {css}
                </Alert>
            </ModalContents>
        </Modal>
        )}
    </div>
  );
};

const OpenButton = styled(Button)`
  position: fixed;
  top: 4px;
  right: 4px;
`;

const ModalContents = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
`;
