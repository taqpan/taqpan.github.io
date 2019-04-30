import * as React from "react";
import { example } from "./Example.scss";

export interface IProps {
  content: string;
}

export default class Example extends React.Component<IProps, {}> {
  public render() {
    const {
      content,
    } = this.props;

    return <div className={example}>{content}</div>;
  }
}
