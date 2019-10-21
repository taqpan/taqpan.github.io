import * as React from "react";
import {
  mhwClockContainer,
  mhwClockContents,
  mhwClockBg,
  mhwClockArm,
  mhwClockText,
  mhwClockConfig,
} from "./MhwClock.scss";

const baseTime = 1567731155;
const offsetStorageKey = "mhw-clock.offset";

function humanTime(seconds: number) {
  const min = Math.floor(seconds / 60);
  const sec = `0${seconds % 60}`.substr(-2);
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
  });

  const mhwTime = (Math.floor(date.getTime() / 1000) - baseTime + offset) % 3000;
  const isDaytime = mhwTime < 1500;
  const isSunset = 1500 <= mhwTime && mhwTime < 1750;
  const isNight = 1750 <= mhwTime && mhwTime < 2750;
  const isSunrise = 2750 <= mhwTime;

  return <div className={mhwClockContainer}>
    <div className={mhwClockContents}>
      <div className={mhwClockBg}></div>
      <div className={mhwClockArm} style={{ transform: `rotate3d(0,0,1,${mhwTime/3000*360}deg)` }}></div>
      <div className={mhwClockText}>
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
      </div>
      <div className={mhwClockConfig}>
        <label>Offset:</label>
        <input type="number" min="-1500" max="1500"
              value={offset}
              onChange={(ev) => {
                const value = Number.parseInt(ev.target.value) || 0;
                setOffset(value);
                localStorage.setItem(offsetStorageKey, value.toString());
              }}/>
        <span>sec.</span>
      </div>
    </div>
  </div>;
}
