import React from "react";
import { render } from "react-dom";
import Header from "./header";
import Button from "./button";
import Result from "./result";
import TaskCreator from "./taskCreator";
import styles from "./style.css";

class App extends React.Component {
  state = { taskList: [] };

  handleItem(title) {
    let list = this.state.taskList;
    list.push(title);
    this.setState({ taskList: list });
  }

  removeItem(title) {
    let list = this.state.taskList;
    let index = list.indexOf(title);
    list.splice(index, 1);
    this.setState({ taskList: list });
  }
  render() {
    return (
      <div>
        <Header />
        <Button />
        <center className="box">
        <TaskCreator addTask={this.handleItem.bind(this)} />
        </center>
        <Result
          list={this.state.taskList}
          remove={this.removeItem.bind(this)}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
