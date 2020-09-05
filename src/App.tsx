import React from "react";
import "./App.css";
import Intro from "./components/intro.";
import MessageInitial from "./components/message-initial";
import Quest from "./components/quest";
import MessageFinish from "./components/message-finish";
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
      showMessageInitial: true,
      showQuest: true,
      showFinish: true
    };
    this._setup();
  }
  private _setup(): void {
    this._finishIntro = this._finishIntro.bind(this);
  }
  private _finishIntro(): void {
    console.log("finish en app");
    this.setState({showMessageInitial: true});
  }
  render() {
    const {showMessageInitial, showQuest, showFinish} = this.state;
    const messageInitial = showMessageInitial? <MessageInitial/>: null;
    const quest = showQuest? <Quest/>: null;
    const messageFinish = showFinish? <MessageFinish/>: null;
    return (
      <div className="container">
        <Intro onFinish={this._finishIntro}></Intro>
        <div>
          {messageInitial}
        </div>
        <div>
          {quest}
        </div>
        <div>
          {messageFinish}
        </div>
      </div>
    );
  }
}
export default App;
