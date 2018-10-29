import React, { Component } from "react";
import PropTypes from "prop-types"; //添加这一行导入静态检查的库
export default class Record extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.date}</td>
        <td>{this.props.title}</td>
        <td>{this.props.amount}</td>
      </tr>
    );
  }
}

Record.propTypes = {
  id: PropTypes.number,
  date: PropTypes.string,
  title: PropTypes.string,
  amount: PropTypes.number
};
