import React from "react";
import "./App.scss";
import Intro from "./components/intro/intro";
import MessageInitial from "./components/message-initial/message-initial";
import Quest from "./components/quest/quest";
import MessageFinish from "./components/message-finish/message-finish";
import { goEndPage } from "./core/helpers";
interface IProps {}
interface IState {
  showMessageInitial: boolean;
  showQuest: boolean;
  showFinish: boolean;
}
class App extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      showMessageInitial: false,
      showQuest: false,
      showFinish: false,
    };
    this._setup();
  }
  componentDidUpdate() {
    goEndPage();
  }
  private _setup(): void {
    this._finishIntro = this._finishIntro.bind(this);
    this._finishMessageInitial = this._finishMessageInitial.bind(this);
    this._finishQuest = this._finishQuest.bind(this);
  }
  private _finishIntro(): void {
    this.setState({ showMessageInitial: true });
  }
  private _finishMessageInitial(): void {
    this.setState({ showQuest: true });
  }
  private _finishQuest(): void {
    this.setState({ showFinish: true });
  }
  render() {
    const { showMessageInitial, showQuest, showFinish } = this.state;
    const messageInitial = showMessageInitial ? <MessageInitial onFinish={this._finishMessageInitial} /> : null;
    const quest = showQuest ? <Quest onFinish={this._finishQuest} /> : null;
    const messageFinish = showFinish ? <MessageFinish /> : null;
    return (
      <div className="app">
        <div className="container text-center">
          <div>
            <Intro onFinish={this._finishIntro}></Intro>
          </div>
          <div>{messageInitial}</div>
          <div>{quest}</div>
          <div>{messageFinish}</div>
        </div>
      </div>
    );
  }
}
export default App;
