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
         
          <tr>
            <td>
              <strong>Title           : </strong>
            </td>
            <td>
              {this.props.list.taskTitle}
            </td>
            <td>
             <button className="button3" onClick={this.click.bind(this)}>x</button>
            </td>
          </tr>

          <tr>
            <td>
              <strong>Description     : </strong>
            </td>
            <td>
             {this.props.list.taskDescription}
            </td>
          </tr>

          <tr>
            <td>
             <strong>Date          : </strong>
            </td>
            <td>
             {this.props.list.date}
            </td>
         </tr>

          <tr>
            <td>
             <strong>Status          : </strong>
            </td>
            <td>
            <input type="checkbox" />
            </td>
         </tr>

           
         
        </table>
      </div>
    );
  }
}
