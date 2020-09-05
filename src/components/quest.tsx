import React from "react";
import Typist from "react-typist";
import Lottie from "react-lottie";
import animationHungry from "../assets/animations/hungry.json";
interface IProps {
  onFinish?: Function;
}
interface IState {
  answer: string;
  hasError: boolean;
}
class Quest extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      answer: "",
      hasError: false,
    };
    this._setup();
  }
  private _onChangeAnswer(event: any): void {
    const { name, value } = event.target;
    this.setState({ answer: value });
  }
  private _onSubmit(event: any): void {
    event.preventDefault();
    const { answer } = this.state;
    const answerCorrect = 15;
    let hasError = true;
    if (+answer === answerCorrect) {
      hasError = false;
      this.props.onFinish && this.props.onFinish();
    }
    this.setState({hasError});
  }
  private _getAnimationHungry(): JSX.Element {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationHungry,
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
  private _setup(): void {
    this._onChangeAnswer = this._onChangeAnswer.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  render() {
    const { answer, hasError } = this.state;
    const erroAnswer = hasError ? this._getAnimationHungry() : null;
    return (
      <div>
        <Typist>
          Cris y su gordito están en el aeropuerto camino a un viajecito de
          amor. Ambos desean pesar la maleta de Cris y la mochila del gordito Si
          se sabe que ambas pesan 40kg y que la maleta de Cris pesa 10 kilos más
          que la mochila del gordito. ¿Cuánto pesa la mochila del gordito?{" "}
          <br />
          <Typist.Backspace delay={200} />
          <small>
            PD: Cada vez que escribas una repuesta me enterare, ya que todo lo
            guardo en mi base de datos muhaahaha.
          </small>
        </Typist>
        <div>
          <form className="text-center" onSubmit={this._onSubmit}>
            <p>
              <input
                max="40"
                min="0"
                type="number"
                name="answer"
                value={answer}
                onChange={this._onChangeAnswer}
                className="form-control text-center"
              />
            </p>
            <button className="btn btn-dark">Enviar</button>
          </form>
          {erroAnswer}
        </div>
      </div>
    );
  }
}
export default Quest;
