import React from "react";
import "./App.css";
import Intro from "./components/intro.";
import MessageInitial from "./components/message-initial";
interface IProps {}
interface IState {
  showMessageInitial: boolean;
}
class App extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      showMessageInitial: false
    };
    this._setup();
  }
  private _initState() {
   // this.state = {};
  }
  private _setup(): void {
    this._initState();
    this._finishIntro = this._finishIntro.bind(this);
  }
  private _finishIntro(): void {
    console.log("finish en app");
    this.setState({showMessageInitial: true});
  }
  render() {
    const {showMessageInitial} = this.state;
    const messageInitial = showMessageInitial? <MessageInitial/>: null;
    return (
      <div className="App">
        <Intro onFinish={this._finishIntro}></Intro>
        <div>
          {messageInitial}
        </div>
      </div>
    );
  }
}
export default App;
