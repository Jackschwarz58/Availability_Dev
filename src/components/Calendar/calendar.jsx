import React, { Component } from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import "./calendar.css";

class Calendar extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDays: [],
    };
  }

  handleDayClick(day, { selected, disabled }) {
    const { selectedDays } = this.state;
    if (disabled) {
      return;
    }
    if (selected) {
      const selectedIndex = selectedDays.findIndex((selectedDay) =>
        DateUtils.isSameDay(selectedDay, day)
      );
      selectedDays.splice(selectedIndex, 1);
    } else {
      selectedDays.push(day);
    }
    this.setState({ selectedDays });
  }

  render() {
    return (
      <div className="p-5">
        <DayPicker
          selectedDays={this.state.selectedDays}
          onDayClick={this.handleDayClick}
          className="cal-picker"
          // disabledDays={{ daysOfWeek: [0] }}
        />
        {/* {this.state.selectedDay ? (
          <p>You clicked {this.state.selectedDays.toLocaleDateString()}</p>
        ) : (
          <p>Please select a day.</p>
        )} */}
      </div>
    );
  }
}

export default Calendar;
