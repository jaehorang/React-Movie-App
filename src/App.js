import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component{  // state : object, data of component를 넣을 공간이 있다.
  state = {
    count: 0
  };
  add = () => {
    console.log("add");
    // this.state.count += 1;
    // console.log(this.state.count);
    this.setState({ how : this.state.count + 1 });  // state 내에 존재하면 value만 변경, 존재하지 않는 객체는 새로 만들어준다.
    console.log(this.state.count);
    console.log(this.state.how);
    console.log(this.state);
  };
  minus = () => {
    console.log("minus");
    // this.state.count -= 1;
    // console.log(this.state.count);
    this.setState(current => ({ count : current.count - 1 }));  // 꼭 current일 필요없다.
    console.log(this.state.count);
  };
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;