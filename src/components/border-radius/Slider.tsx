import styled from "@emotion/styled";
import { Slider } from "@mui/material";
import React from "react";

export const HorizontalSlider = styled(Slider)({
    border: 0,
    height: "8px",
    ".MuiSlider-track": {
        border: 0,
        height: "8px",
    },
});

type VerticalSliderProps = Omit<
    React.ComponentProps<typeof Slider>,
    "orientation" | "sx"
>;

export const VerticalSlider = styled(
    (props: VerticalSliderProps) => (
        <Slider
            orientation="vertical"
            sx={{
                '& input[type="range"]': {
                    WebkitAppearance: "slider-vertical",
                },
            }}
            {...props}
        />
    )
)({
    border: 0,
    width: "8px",
    ".MuiSlider-track": {
        border: 0,
        width: "8px",
    },
});
