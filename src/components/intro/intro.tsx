import React from "react";
import Typist from "react-typist";
import Lottie from "react-lottie";
import animationHeartbeat from "../../assets/animations/heartbeat.json";
import "./intro.scss";
interface IProps {
  onFinish?: Function;
}
interface IState {
  showHeart: boolean;
  showHelp: boolean;
}
class Intro extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      showHeart: false,
      showHelp: false,
    };
    this._setup();
  }
  private _setup(): void {
    this._finishAnimationTyping = this._finishAnimationTyping.bind(this);
    this._finishIntro = this._finishIntro.bind(this);
  }
  private _finishAnimationTyping(): void {
    this.setState({ showHeart: true });
    setTimeout(() => this.setState({ showHelp: true }), 500);
  }
  private _finishIntro(): void {
    this.props.onFinish && this.props.onFinish();
  }
  private _getAnimation(): JSX.Element {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationHeartbeat,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    return (
      <div onClick={this._finishIntro}>
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
  private _getHelp(): JSX.Element {
    return (
      <Typist cursor={{ hideWhenDone: true }}>Presionar el corazoncito</Typist>
    );
  }
  render() {
    const { showHeart, showHelp } = this.state;
    const animation = showHeart ? this._getAnimation() : null;
    const help = showHelp ? this._getHelp() : null;
    return (
      <div className="app-intro app">
        <Typist
          onTypingDone={this._finishAnimationTyping}
          cursor={{ hideWhenDone: true }}
        >
          <h1>Hola Amorcito.</h1>
          <br />
          Espero te guste esta cartita
        </Typist>
        {animation}
        {help}
      </div>
    );
  }
}
export default Intro;
