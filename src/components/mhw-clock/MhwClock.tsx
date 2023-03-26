import * as React from "react";
import styled from "@emotion/styled";
import Colors from "../../theme/colors";
import bgImage from "./MhwClockBg.svg";
import armImage from "./MhwClockArm.svg";
import { rgba } from "emotion-rgba";
import { Input } from "@mui/material";

const baseTime = 1567731155;
const offsetStorageKey = "mhw-clock.offset";

function humanTime(seconds: number) {
    const min = Math.floor(seconds / 60);
    const sec = `${seconds % 60}`.padStart(2, "0");

    return `${min}:${sec}`;
}

export const MhwClock = () => {
    const [date, setDate] = React.useState(new Date());
    const [offset, setOffset] = React.useState(
        Number.parseInt(localStorage.getItem(offsetStorageKey) || "") || 0
    );

    React.useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 100);
        return () => {
            clearInterval(interval);
        };
    }, []);

    const mhwTime = (Math.floor(date.getTime() / 1000) - baseTime + offset) % 3000;
    const isDaytime = mhwTime < 1500;
    const isSunset = 1500 <= mhwTime && mhwTime < 1750;
    const isNight = 1750 <= mhwTime && mhwTime < 2750;
    const isSunrise = 2750 <= mhwTime;

    return (
        <Container>
            <Contents>
                <ClockBg/>
                <ClockArm style={{ transform: `rotate3d(0,0,1,${mhwTime/3000*360}deg)` }}/>
                <ClockText>
                    {isDaytime && <>
                    <div>Daytime</div>
                    <div>{humanTime(1500 - mhwTime)}</div>
                    </>}
                    {isSunset && <>
                    <div>Sunset</div>
                    <div>{humanTime(1750 - mhwTime)}</div>
                    </>}
                    {isNight && <>
                    <div>Night</div>
                    <div>{humanTime(2750 - mhwTime)}</div>
                    </>}
                    {isSunrise && <>
                    <div>Sunrise</div>
                    <div>{humanTime(3000 - mhwTime)}</div>
                    </>}
                </ClockText>
                <ClockConfig>
                    <label>Offset:</label>
                    <Input
                        type="number"
                        inputProps={{
                            min: "-1500",
                            max: "1500",
                        }}
                        value={offset}
                        onChange={(ev) => {
                            const value = Number.parseInt(ev.target.value) || 0;
                            setOffset(value);
                            localStorage.setItem(offsetStorageKey, value.toString());
                        }}
                    />
                    <span>sec.</span>
                </ClockConfig>
            </Contents>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
`;

const Contents = styled.div`
    width: 75vw;
    height: 75vw;
    @media screen and (min-aspect-ratio: 1/1) {
        width: 75vh;
        height: 75vh;
    }

    margin: 0 auto;
    border: 0;
    padding: 0;

    position: relative;
`;

const ClockBg = styled.div`
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
`;

const ClockArm = styled.div`
    background-image: url(${armImage});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
`;

const ClockText = styled.div`
    position: absolute;
    top: 12%;
    z-index: 3;
    width: 100%;
    height: 100%;
    text-align: center;

    font-size: 8vw;
    @media screen and (min-aspect-ratio: 1/1) {
        font-size: 8vh;
    }

    color: ${Colors.background};
    text-shadow: ${rgba("#252628", .85)} 0 0 .2em;
`;

const ClockConfig = styled.div`
    font-size: 14px;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 4;

    > * {
        margin-right: 4px;
    }
`;
