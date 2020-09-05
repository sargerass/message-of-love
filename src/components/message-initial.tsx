import React from "react";
import Typist from "react-typist";
interface IProps {
  onFinish?: Function;
}
interface IState {}
class MessageInitial extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {};
    this._setup();
  }

  private _finishAnimationTyping(): void {}
  private _setup(): void {
    this._finishAnimationTyping = this._finishAnimationTyping.bind(this);
  }
  render() {
    return (
      <div>
        <Typist onTypingDone={this._finishAnimationTyping}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
          molestias quibusdam hic dolores. 
          <br/>
          ¿Quisieras que te siga contando?
        </Typist>
        <div>
          <button>
            Si
          </button>
          <button>
            No
          </button>
        </div>
      </div>
    );
  }
}
export default MessageInitial;
