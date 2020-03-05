import React, { Component } from "react";
import PropTypes from "prop-types";

class ClimbingRoute extends Component {
  static propTypes = {
    updateRoute: PropTypes.func,
    deleteRoute: PropTypes.func,
    routeDetails: PropTypes.shape({
      grade: PropTypes.string,
      movements: PropTypes.string,
      name: PropTypes.string,
      restTime: PropTypes.string,
      type: PropTypes.string,
      date: PropTypes.string
    })
  };

  handleChange = event => {
    //Get the copy of current route
    const updatedRoute = {
      ...this.props.routeDetails,
      [event.currentTarget.name]: event.currentTarget.value
    };

    this.props.updateRoute(this.props.index, updatedRoute);
  };

  render() {
    const {
      grade,
      movements,
      name,
      restTime,
      type,
      date
    } = this.props.routeDetails;

    return (
      <div className="route">
        <input
          type="text"
          name="date"
          onChange={this.handleChange}
          value={date}
        />
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={name}
        />
        <input
          type="text"
          name="grade"
          onChange={this.handleChange}
          value={grade}
        />
        <input
          type="text"
          name="movements"
          onChange={this.handleChange}
          value={movements}
        />
        <input
          type="text"
          name="type"
          onChange={this.handleChange}
          value={type}
        />
        <input
          type="text"
          name="restTime"
          onChange={this.handleChange}
          value={restTime}
        />
        <button onClick={() => this.props.deleteRoute(this.props.index)}>
          Remove route
        </button>
      </div>
    );
  }
}

export default ClimbingRoute;
