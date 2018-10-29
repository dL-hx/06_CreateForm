import React, { Component } from "react";
export default class RecordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      title: "",
      amount: ""
    };
  }

  //这个方法用来判断三个框同时有值是否有效
  valid() {
    return this.state.date && this.state.title && this.state.amount;
  }

  //创建handleChange()方法
  handleChange(event) {
    let name, obj;
    name = event.target.name;
    console.log(event.target.name); //date title amount
    this.setState(((obj = {}), (obj["" + name] = event.target.value), obj));
    console.log(event.target.value);
  }
  render() {
    return (
      <form className="form-inline">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={this.handleChange.bind(this)}
            placeholder="Date"
            name="date"
            value={this.state.date}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={this.handleChange.bind(this)}
            placeholder="Title"
            name="title"
            value={this.state.title}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={this.handleChange.bind(this)}
            placeholder="Amount"
            name="amount"
            value={this.state.amount}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!this.valid()}
        >
          Create Record
        </button>
      </form>
    );
  }
}
