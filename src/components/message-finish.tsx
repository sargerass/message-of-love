import React from "react";
import Typist from "react-typist";
import animationDog from "../assets/animations/dog.json";
import Lottie from "react-lottie";
interface IProps {
  onFinish?: Function;
}
interface IState {
  showDog: boolean;
}
class MessageFinish extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      showDog: false,
    };
    this._setup();
  }

  private _setup(): void {
    this._finishTyping = this._finishTyping.bind(this);
  }
  private _finishTyping(): void {
    this.setState({showDog: true});
  }
  private _getAnimationDog(): JSX.Element {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationDog,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    return (
      <div>
        <Lottie
          isClickToPauseDisabled={true}
          options={defaultOptions}
          isStopped={false}
          isPaused={false}
          height={200}
          width={200}
        />
      </div>
    );
  }
  render() {
    const { showDog } = this.state;
    const dog = showDog ? this._getAnimationDog() : null;
    return (
      <div>
        <Typist onTypingDone={this._finishTyping}>
          El finish
        </Typist>
        {dog}
      </div>
    );
  }
}
export default MessageFinish;
