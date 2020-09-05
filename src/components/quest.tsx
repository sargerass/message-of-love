import React from "react";
import Typist from "react-typist";
import Lottie from "react-lottie";
import animationHeartbeat from '../assets/animations/heartbeat.json';
interface IProps {
  onFinish?: Function;
}
interface IState {
  
}
class Quest extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this._setup();
  }
  private _initState() {
    this.state = {
    };
  }
  private _setup(): void {
    this._initState();
  }
  render() {
    return (
      <div>
      </div>
    );
  }
}
export default Quest;
