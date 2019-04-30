import classNames from "classnames";
import * as React from "react";
import { data } from "./data";
import {
  gengo,
  gengoContainer,
  gengoContainerStarted,
  gengoName,
  gengoNameFinish,
  gengoNameFlip,
  gengoYear,
  gengoYearFinish,
  gengoYearFlip,
} from "./Gengo.scss";

interface IGengoState {
  cursor: number;
  started: boolean;
}

export default class Gengo extends React.Component<{}, IGengoState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      cursor: data.length - 1,
      started: false,
    };
  }

  public render() {
    return <>
      <div className={gengo}>
        <div className={classNames(gengoContainer, this.state.started ? gengoContainerStarted : null)}>
          {data.map((entry, index) => {
            let optionalNameClass: string | null = null;
            let optionalYearClass: string | null = null;
            if (this.state.cursor < index) {
              optionalNameClass = gengoNameFlip;
              optionalYearClass = gengoYearFlip;
            } else
            if (this.state.cursor === 0 && index === 0) {
              optionalNameClass = gengoNameFinish;
              optionalYearClass = gengoYearFinish;
            }

            return <div key={entry.name}>
              <div className={classNames(gengoName, optionalNameClass)}
                   style={{ fontSize: `${70 / entry.name.length}vw` }}>
                {entry.name}
              </div>
              <div className={classNames(gengoYear, optionalYearClass)}>
                {entry.from}
              </div>
            </div>;
          })}
        </div>
      </div>
    </>;
  }

  public componentDidMount() {
    setTimeout(this.start.bind(this), 0);
  }

  private start() {
    this.setState({ started: true });
    setTimeout(this.next.bind(this), 500);
  }

  private next() {
    if (this.state.cursor > 0) {
      this.setState({ cursor: this.state.cursor - 1 });

      setTimeout(this.next.bind(this), 150);
    }
  }
}
