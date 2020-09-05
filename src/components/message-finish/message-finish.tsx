import React from "react";
import Typist from "react-typist";
import animationDog from "../../assets/animations/dog.json";
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
    this.setState({ showDog: true });
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
      <div className="app">
        <Typist
          onTypingDone={this._finishTyping}
          cursor={{ hideWhenDone: true }}
        >
          Por otro lado, me siento un poco triste porque no nos pudimos casar
          hace unos meses. Algunas veces imagino que el señor Covencio entra a
          nuestra boda y dice “yo me opongo”, argumentado y gritando “el novio
          sigue gordo” XD. Sin embargo, esta cuarentena me gusta porque estamos
          más juntos y conectados. Además, tenemos nuestro proyecto gamer y un
          rompecabezas que algún día armaremos. Espero te guste este formato de
          carta y que cuente como una manualidad XD. Agradezco a la vida seguir
          siendo tu novio y que me sigas haciendo feliz te amo mucho mi hermosa
          mujer.
        </Typist>
        <br/>
        {dog}
      </div>
    );
  }
}
export default MessageFinish;
