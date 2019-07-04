import {
  FormGroup,
  InputGroup,
  MultiSlider,
} from "@blueprintjs/core";
import * as React from "react";
import {
  borderRadius,
  borderRadiusBody,
  borderRadiusInputs,
  borderRadiusTitle,
  box,
  sliderBottom,
  sliderLeft,
  sliderRight,
  slidersHeight,
  slidersWidth,
  sliderTop,
} from "./BorderRadius.scss";
import CssAlert from "./CssAlert";

const {useState} = React;
const defaultImagePath = `${document.location.origin}/images/bridge.jpg`;

export default () => {
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

  return <div className={borderRadius}>
    <h1 className={borderRadiusTitle}>Border Radius <br/> Manipulator</h1>
    <div className={borderRadiusBody}>
      <div className={slidersWidth}>
        <MultiSlider min={0} max={50} labelRenderer={false}>
          <MultiSlider.Handle
            type="start"
            value={100 - boxWidth}
            onChange={(v) => setBoxWidth(100 - v)}
          />
        </MultiSlider>
        <span>width</span>
        <MultiSlider min={50} max={100} labelRenderer={false}>
          <MultiSlider.Handle
            type="end"
            value={boxWidth}
            onChange={(v) => setBoxWidth(v)}
          />
        </MultiSlider>
      </div>

      <div className={slidersHeight}>
        <MultiSlider min={50} max={100} labelRenderer={false} vertical={true}>
          <MultiSlider.Handle
            type="end"
            value={boxHeight}
            onChange={(v) => setBoxHeight(v)}
          />
        </MultiSlider>
        <span>height</span>
        <MultiSlider min={0} max={50} labelRenderer={false} vertical={true}>
          <MultiSlider.Handle
            type="start"
            value={100 - boxHeight}
            onChange={(v) => setBoxHeight(100 - v)}
          />
        </MultiSlider>
      </div>

      <div
        className={box}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          borderBottomLeftRadius: `${bottomLeftH}% ${bottomLeftV}%`,
          borderBottomRightRadius: `${bottomRightH}% ${bottomRightV}%`,
          borderTopLeftRadius: `${topLeftH}% ${topLeftV}%`,
          borderTopRightRadius: `${topRightH}% ${topRightV}%`,
          height: `${boxHeight * 0.5}%`,
          left: `${50 - boxWidth * 0.25}%`,
          top: `${50 - boxHeight * 0.25}%`,
          width: `${boxWidth * 0.5}%`,
        }}>

        <MultiSlider className={sliderTop} min={0} max={100} stepSize={1} labelStepSize={20}>
          <MultiSlider.Handle
            intentBefore="primary"
            interactionKind="push"
            value={topLeftH}
            onChange={(v) => setTopLeftH(v)}
          />
          <MultiSlider.Handle
            intentAfter="success"
            interactionKind="push"
            value={100 - topRightH}
            onChange={(v) => setTopRightH(100 - v)}
          />
        </MultiSlider>

        <MultiSlider className={sliderBottom} min={0} max={100} stepSize={1} labelStepSize={20}>
          <MultiSlider.Handle
            intentBefore="primary"
            interactionKind="push"
            value={bottomLeftH}
            onChange={(v) => setBottomLeftH(v)}
          />
          <MultiSlider.Handle
            intentAfter="success"
            interactionKind="push"
            value={100 - bottomRightH}
            onChange={(v) => setBottomRightH(100 - v)}
          />
        </MultiSlider>

        <MultiSlider className={sliderLeft} min={0} max={100} stepSize={1} labelStepSize={20} vertical={true}>
          <MultiSlider.Handle
            intentBefore="success"
            interactionKind="push"
            value={bottomLeftV}
            onChange={(value) => setBottomLeftV(value)}
          />
          <MultiSlider.Handle
            intentAfter="primary"
            interactionKind="push"
            value={100 - topLeftV}
            onChange={(v) => setTopLeftV(100 - v)}
          />
        </MultiSlider>

        <MultiSlider className={sliderRight} min={0} max={100} stepSize={1} labelStepSize={20} vertical={true}>
          <MultiSlider.Handle
            intentBefore="success"
            interactionKind="push"
            value={bottomRightV}
            onChange={(v) => setBottomRightV(v)}
          />
          <MultiSlider.Handle
            intentAfter="primary"
            interactionKind="push"
            value={100 - topRightV}
            onChange={(v) => setTopRightV(100 - v)}
          />
        </MultiSlider>
      </div>
    </div>

    <div className={borderRadiusInputs}>
      <FormGroup label="Image URL">
        <InputGroup
          value={backgroundImage}
          placeholder={defaultImagePath}
          onChange={(el: React.ChangeEvent<HTMLInputElement>) => setBackgroundImage(el.target.value || "")}
        />
      </FormGroup>
    </div>

    <CssAlert
      topLeftH={topLeftH} topRightH={topRightH} bottomRightH={bottomRightH} bottomLeftH={bottomLeftH}
      topLeftV={topLeftV} topRightV={topRightV} bottomRightV={bottomRightV} bottomLeftV={bottomLeftV}
    />
  </div>;
};
