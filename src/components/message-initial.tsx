import React from "react";
import Typist from "react-typist";
import animationSad from '../assets/animations/sad.json';
import Lottie from "react-lottie";
interface IProps {
  onFinish?: Function;
}
interface IState {
  showOptions: boolean;
  showNoAcepted: boolean;
}
class MessageInitial extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      showOptions: false,
      showNoAcepted: false,
    };
    this._setup();
  }

  private _setup(): void {
    this._finishAnimationTyping = this._finishAnimationTyping.bind(this);
    this._accepted = this._accepted.bind(this);
    this._noAccepted = this._noAccepted.bind(this);
  }
  private _finishAnimationTyping(): void {
    this.setState({ showOptions: true });
  }
  private _accepted(): void {
    this.props.onFinish && this.props.onFinish();
  }
  private _noAccepted(): void {
    this.setState({showNoAcepted: true});
  }
  private _getAnimationNoAccepted(): JSX.Element {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationSad,
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
  private _getOptions(): JSX.Element {
    return (
      <div>
        <button onClick={this._accepted}>Si</button>
        <button onClick={this._noAccepted}>No</button>
      </div>
    );
  }
  render() {
    const { showOptions, showNoAcepted } = this.state;
    const options = showOptions? this._getOptions(): null;
    const noAccepted = showNoAcepted? this._getAnimationNoAccepted(): null;
    return (
      <div>
        <Typist onTypingDone={this._finishAnimationTyping}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
          molestias quibusdam hic dolores.
          <br />
          ¿Quisieras que te siga contando?
        </Typist>
        {options}
      </div>
    );
  }
}
export default MessageInitial;
