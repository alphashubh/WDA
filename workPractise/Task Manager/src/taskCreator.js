import React from "react";

export default class TaskCreator extends React.Component {
  state = { list: { taskTitle: "", taskDescription: "", date: "" } };

  handleSubmit(event) {
    event.preventDefault();
    this.setState(
      {
        list: {
          taskTitle: this.refs.inputTitle.value,
          taskDescription: this.refs.description.value,
          date: this.refs.date.value
        }
      },
      function() {
        this.props.addTask(this.state.list);
      }
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <h2 className="header">Add new task</h2>
        <input className="input"
          type="text"
          ref="inputTitle"
          placeholder="Enter Title"
          required
        />
        <br />
        <input className="input"
          type="text"
          placeholder="Description"
          ref="description"
          required
        />
        <br />
        <input type="date" ref="date"  className="input" required />
        <button type="submit" className="button">Add</button>
      </form>
    );
  }
}
