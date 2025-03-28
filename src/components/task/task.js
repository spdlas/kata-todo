import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

import './task.scss';

class Task extends Component {
  static formatTime(minutes, seconds) {
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  constructor(props) {
    super(props);
    this.state = {
      minutes: props.minStamp,
      seconds: props.secStamp,
      isRunning: false,
    };
    this.timer = null;
  }

  componentDidUpdate(prevProps) {
    const { minStamp, secStamp } = this.props;

    if (minStamp !== prevProps.minStamp || secStamp !== prevProps.secStamp) {
      this.setState({
        minutes: minStamp,
        seconds: secStamp,
      });

      // eslint-disable-next-line react/destructuring-assignment
      if (this.state.isRunning) {
        clearInterval(this.timer);
        this.setState({ isRunning: false });
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // Запуск таймера
  startTimer = () => {
    const { isRunning } = this.state;
    if (!isRunning) {
      this.setState({ isRunning: true });
      this.timer = setInterval(() => {
        this.setState(({ minutes, seconds }) => {
          if (minutes === 0 && seconds === 0) {
            clearInterval(this.timer);
            return { isRunning: false };
          }
          if (seconds === 0) {
            return { minutes: minutes - 1, seconds: 59 };
          }
          return { seconds: seconds - 1 };
        });
      }, 1000);
    }
  };

  // Пауза таймера
  pauseTimer = () => {
    clearInterval(this.timer);
    this.setState({ isRunning: false });
  };

  render() {
    const { label, done, onDeleted, onToggleDone, dateStamp } = this.props;
    const { minutes, seconds, isRunning } = this.state;

    const className = done ? 'completed' : '';
    const formattedDate = formatDistanceToNow(dateStamp, { includeSeconds: true });
    const formattedTime = Task.formatTime(minutes, seconds);

    return (
      <li className={className}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={onToggleDone} checked={done} />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="test">
            <span className="description">{label}</span>
            <div className="control">
              <button type="button" className="icon icon-play" onClick={this.startTimer} disabled={isRunning}>
                ▶
              </button>
              <button type="button" className="icon icon-pause" onClick={this.pauseTimer} disabled={!isRunning}>
                ⏸
              </button>
              <span className="timer">{formattedTime}</span>
            </div>
            <span className="created">{formattedDate}</span>
          </label>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button type="button" className="icon icon-edit" />
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button type="button" className="icon icon-destroy" onClick={onDeleted} />
        </div>
      </li>
    );
  }
}

Task.defaultProps = {
  label: '',
  done: false,
  dateStamp: new Date(),
};

Task.propTypes = {
  label: PropTypes.string,
  done: PropTypes.bool,
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  dateStamp: PropTypes.instanceOf(Date),
  minStamp: PropTypes.number.isRequired, // Передаем первоначальные минуты
  secStamp: PropTypes.number.isRequired, // Передаем первоначальные секунды
};

export default Task;
