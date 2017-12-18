import React from "react";
import List from "./taskList";

export default class Result extends React.Component {
  removeItem(item) {
    this.props.remove(item);
  }
  render(props) {
    let todayItems;
    let tommorowItems;
    let otherItems;
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    let tomorrow =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      (today.getDate() + 1);
    todayItems = this.props.list.map(item => {
      let itemDate = item.date;
      if (itemDate === date) {
        return (
          <List
            key={item.title}
            list={item}
            remove={this.removeItem.bind(this)}
          />
        );
      }
    });

    tommorowItems = this.props.list.map(item => {
      let itemDate = item.date;
      if (itemDate === tomorrow) {
        return (
          <List
            key={item.title}
            list={item}
            remove={this.removeItem.bind(this)}
          />
        );
      }
    });

    otherItems = this.props.list.map(item => {
      let itemDate = item.date;
      if (itemDate !== date && itemDate !== tomorrow) {
        return (
          <List
            key={item.title}
            list={item}
            remove={this.removeItem.bind(this)}
          />
        );
      }
    });

    return (
      <div className="fullList">
        <div>
         <center> <h3 className="header1">Today</h3></center>
          {todayItems}
        </div>
        <div>
          <center> <h3 className="header1">Tomorrow</h3></center>
          {tommorowItems}
        </div>
        <div>
          <center><h3 className="header1">Others</h3></center>
          {otherItems}
        </div>
      </div>
    );
  }
}
