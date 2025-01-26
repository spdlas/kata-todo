import React, { Component } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';

export default class Task extends Component {
  static defaultProps = {
    label: '',
    done: false,
    dateStamp: new Date(),
  };

  static propTypes = {
    label: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    onDeleted: PropTypes.func.isRequired,
    onToggleDone: PropTypes.func.isRequired,
    dateStamp: PropTypes.instanceOf(Date).isRequired,
  };

  render() {
    const { label, done, onDeleted, onToggleDone, dateStamp } = this.props;

    let className = '';
    if (done) {
      className += 'completed';
    }

    const formattedDate = formatDistanceToNow(dateStamp, { includeSeconds: true });

    return (
      <li className={className}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={onToggleDone} />
          <label>
            <span className="description">{label}</span>
            <span className="created">{formattedDate}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
      </li>
    );
  }
}
