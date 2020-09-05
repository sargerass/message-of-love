import React from "react";
import Typist from "react-typist";
import animationSad from "../../assets/animations/sad.json";
import Lottie from "react-lottie";
import { goEndPage } from "../../core/helpers";
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
  componentDidUpdate() {
    goEndPage();
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
    this.setState({ showNoAcepted: false });
    this.props.onFinish && this.props.onFinish();
  }
  private _noAccepted(): void {
    this.setState({ showNoAcepted: true });
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
        <button className="btn btn-dark" onClick={this._accepted}>
          Si
        </button>
        <button className="btn btn-light" onClick={this._noAccepted}>
          No
        </button>
      </div>
    );
  }
  render() {
    const { showOptions, showNoAcepted } = this.state;
    const options = showOptions ? this._getOptions() : null;
    const noAccepted = showNoAcepted ? this._getAnimationNoAccepted() : null;
    return (
      <div className="app app-message-initial">
        <Typist
          onTypingDone={this._finishAnimationTyping}
          cursor={{ hideWhenDone: true }}
        >
          Amorcito hace mucho tiempo no te escribo ni te hago una carta como te
          gusta. Hoy te escribo con palabras y código. Sabes que no me gusta
          usar papel para no romper arbolitos. Además, con esta acción apoyamos
          con más comidita para los veganos XD. Quería empezar diciendo que en
          esta cuarentena hemos solidificado mucho más la relación, ya que hemos
          demostrado que somos un buen equipo. A su vez, me gustan nuestras
          experiencias en la cocina y molestarte cuando todo se te quema y
          celebrarte cuando te sale muy rico. Asimismo, me encanta verte sonreír
          y reírte cuando te cuento un chiste o te das cuenta que desconozco
          muchas cosas básicas del día a día.
          <br />
          <br />
          ¿Quisieras resolver un miniproblemita y seguir con mi carta?
        </Typist>
        <br />
        {options}
        <br />
        {noAccepted}
      </div>
    );
  }
}
export default MessageInitial;
