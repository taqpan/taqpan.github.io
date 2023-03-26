import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import * as React from "react";
import { CssAlert } from "./CssAlert";
import { HorizontalSlider, VerticalSlider } from "./Slider";

const {useState} = React;
const defaultImagePath = `${document.location.origin}/images/bridge.jpg`;

export const BorderRadius = () => {
    const [boxWidth, setBoxWidth] = useState(100);
    const [boxHeight, setBoxHeight] = useState(100);
    const [topLeftH, setTopLeftH] = useState(20);
    const [topLeftV, setTopLeftV] = useState(10);
    const [topRightH, setTopRightH] = useState(20);
    const [topRightV, setTopRightV] = useState(10);
    const [bottomLeftH, setBottomLeftH] = useState(50);
    const [bottomLeftV, setBottomLeftV] = useState(80);
    const [bottomRightH, setBottomRightH] = useState(50);
    const [bottomRightV, setBottomRightV] = useState(80);
    const [backgroundImage, setBackgroundImage] = useState(defaultImagePath);

    return (
        <Container>
            <Title>Border Radius <br/> Manipulator</Title>
            <Main>
                <WidthSliders>
                    <HorizontalSlider
                        value={100 - boxWidth}
                        min={0}
                        max={50}
                        onChange={(_ev, value) => {
                            if (typeof value === "number") {
                                setBoxWidth(100 - value);
                            }
                        }}
                        track="inverted"
                        valueLabelDisplay="auto"
                        valueLabelFormat={() => `${boxWidth}%`}
                    />
                    <span style={{ transform: "translateY(4px)" }}>width</span>
                    <HorizontalSlider
                        value={boxWidth}
                        min={50}
                        max={100}
                        onChange={(_ev, value) => {
                            if (typeof value === "number") {
                                setBoxWidth(value);
                            }
                        }}
                        valueLabelDisplay="auto"
                        valueLabelFormat={(v) => `${v}%`}
                    />
                </WidthSliders>
                <HeightSliders>
                    <VerticalSlider
                        value={boxHeight}
                        min={50}
                        max={100}
                        onChange={(_ev, value) => {
                            if (typeof value === "number") {
                                setBoxHeight(value);
                            }
                        }}
                        valueLabelDisplay="auto"
                        valueLabelFormat={() => `${boxHeight}%`}
                    />
                    <span style={{ transform: "translateX(-25%) translateX(3px) rotate(-90deg)" }}>height</span>
                    <VerticalSlider
                        value={100 - boxHeight}
                        min={0}
                        max={50}
                        onChange={(_ev, value) => {
                            if (typeof value === "number") {
                                setBoxHeight(100 - value);
                            }
                        }}
                        track="inverted"
                        valueLabelDisplay="auto"
                        valueLabelFormat={() => `${boxHeight}%`}
                    />
                </HeightSliders>

                <ImageBox
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        borderBottomLeftRadius: `${bottomLeftH}% ${bottomLeftV}%`,
                        borderBottomRightRadius: `${bottomRightH}% ${bottomRightV}%`,
                        borderTopLeftRadius: `${topLeftH}% ${topLeftV}%`,
                        borderTopRightRadius: `${topRightH}% ${topRightV}%`,
                        width: `${boxWidth * 0.5}%`,
                        left: `${50 - boxWidth * 0.25}%`,
                        height: `${boxHeight * 0.5}%`,
                        top: `${50 - boxHeight * 0.25}%`,
                    }}
                >
                    <TopSlider
                        value={[topLeftH, 100 - topRightH]}
                        min={0}
                        max={100}
                        onChange={(_ev, values) => {
                            if (values instanceof Array<number>) {
                                if (topLeftH !== values[0]) {
                                    setTopLeftH(values[0]);
                                }
                                if (100 - topRightH !== values[1]) {
                                    setTopRightH(100 - values[1]);
                                }
                            }
                        }}
                        disableSwap
                        valueLabelDisplay="auto"
                        valueLabelFormat={(v) => `${v}%`}
                    />
                    <BottomSlider
                        value={[bottomLeftH, 100 - bottomRightH]}
                        min={0}
                        max={100}
                        onChange={(_ev, values) => {
                            if (values instanceof Array<number>) {
                                if (bottomLeftH !== values[0]) {
                                    setBottomLeftH(values[0]);
                                }
                                if (100 - bottomRightH !== values[1]) {
                                    setBottomRightH(100 - values[1]);
                                }
                            }
                        }}
                        disableSwap
                        valueLabelDisplay="auto"
                        valueLabelFormat={(v) => `${v}%`}
                    />
                    <LeftSlider
                        value={[100 - topLeftV, bottomLeftV]}
                        min={0}
                        max={100}
                        onChange={(_ev, values) => {
                            if (values instanceof Array<number>) {
                                if (100 - topLeftV !== values[1]) {
                                    setTopLeftV(100 - values[1]);
                                }
                                if (bottomLeftV !== values[0]) {
                                    setBottomLeftV(values[0]);
                                }
                            }
                        }}
                        disableSwap
                        valueLabelDisplay="auto"
                        valueLabelFormat={(v) => `${v}%`}
                    />
                    <RightSlider
                        value={[100 - topRightV, bottomRightV]}
                        min={0}
                        max={100}
                        onChange={(_ev, values) => {
                            if (values instanceof Array<number>) {
                                if (100 - topRightV !== values[1]) {
                                    setTopRightV(100 - values[1]);
                                }
                                if (bottomRightV !== values[0]) {
                                    setBottomRightV(values[0]);
                                }
                            }
                        }}
                        disableSwap
                        valueLabelDisplay="auto"
                        valueLabelFormat={(v) => `${v}%`}
                    />
                </ImageBox>
            </Main>

            <InputFields>
                <TextField
                    value={backgroundImage}
                    placeholder={defaultImagePath}
                    onChange={(el: React.ChangeEvent<HTMLInputElement>) => setBackgroundImage(el.target.value || "")}
                    variant="standard"
                    helperText="Image URL"
                    style={{ width: "100%" }}
                />
            </InputFields>

            <CssAlert
                topLeftH={topLeftH} topRightH={topRightH} bottomRightH={bottomRightH} bottomLeftH={bottomLeftH}
                topLeftV={topLeftV} topRightV={topRightV} bottomRightV={bottomRightV} bottomLeftV={bottomLeftV}
            />
        </Container>
    );
};

const Container = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient($color-background, #c1e1e4);
`;

const Title = styled.h1`
    position: absolute;
    top: 0;
    left: 48px;
    font-size: 16px;
    line-height: 20px;
    margin: 0;
    text-align: left;
`;

const Main = styled.main`
    display: block;
    box-sizing: border-box;
    position: relative;

    width: 100vw;
    height: 100vw;
    min-width: 320px;
    min-height: 320px;
    margin-top: calc(25vh - 25vw);
    margin-left: 0;
    margin-right: 0;
    @media screen and (min-aspect-ratio: 1/1) {
        width: 100vh;
        height: 100vh;
        margin-top: 0;
        margin-left: auto;
        margin-right: auto;
    }
`;

const WidthSliders = styled.div`
    position: absolute;
    top: 10px;
    left: 25%;
    width: 50%;
    display: flex;
    justify-content: space-between;

    > *:first-of-type,
    > *:last-of-type {
        width: 25%;
        min-width: auto;
    }
`;

const HeightSliders = styled.div`
    position: absolute;
    top: 25%;
    left: 3px;
    height: 50% !important;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > *:first-of-type,
    > *:last-of-type {
        height: 25%;
    }
`;

const TopSlider = styled(HorizontalSlider)`
    position: absolute;
    top: -30%;
    min-width: auto;
`;

const BottomSlider = styled(HorizontalSlider)`
    position: absolute;
    bottom: -30%;
    min-width: auto;
`;

const LeftSlider = styled(VerticalSlider)`
    position: absolute;
    height: 100% !important;
    left: -35%;
`;

const RightSlider = styled(VerticalSlider)`
    position: absolute;
    height: 100% !important;
    right: -35%;
`;

const ImageBox = styled.div`
    position: absolute;
    display: block;
    border: 0;
    padding: 0;
    background-color: $color-text;
    background-clip: border-box;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: all .3s ease-out;
`;

const InputFields = styled.div`
    position: fixed;
    box-sizing: border-box;
    bottom: 0;
    width: 100vw;
    padding: 0 10px 10px;
`;
