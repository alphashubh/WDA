import React from "react";

export default class List extends React.Component {
  click() {
    let removeItem = this.props.list;
    this.props.remove(removeItem);
  }
  render(props) {
    return (
      <div>
        
        <table className="list">
         
          <td>
            <tr>
              <strong>Title           : </strong>
            </tr>

            <tr>
              <strong>Description     : </strong>
            </tr>

            <tr>
              <strong>Date            : </strong>
            </tr>

            <tr>
              <strong>Status          : </strong>
             
            </tr>
          </td>
          <td>
          
            <tr>{this.props.list.taskTitle}</tr>
            <tr>{this.props.list.taskDescription}</tr>
            <tr>{this.props.list.date}</tr>
            <tr> <input type="checkbox" /></tr>
           
          </td>
          <button className="button3" onClick={this.click.bind(this)}>x</button>
        </table>
      </div>
    );
  }
}
