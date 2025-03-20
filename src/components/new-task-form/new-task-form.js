import React, { Component } from 'react';
import './new-task-form.scss';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
  // ругается что должен быть в конструкторе, но современный экма поддерживает и так
  // далее ошибки в пропсах из-за стейта
  // eslint-disable-next-line react/state-in-constructor
  state = {
    label: '',
    minStamp: '',
    secStamp: '',
  };

  keyUp = (evt) => {
    const { label, minStamp, secStamp } = this.state;
    evt.preventDefault();

    if (evt.code === 'Enter' && label.trim()) {
      // eslint-disable-next-line no-restricted-globals
      if (isNaN(minStamp) || isNaN(secStamp)) {
        this.setState({ label: '', minStamp: '', secStamp: '' });
      } else {
        // eslint-disable-next-line react/destructuring-assignment
        this.props.onItemAdded({ label, minStamp: Number(minStamp), secStamp: Number(secStamp) });
        this.setState({ label: '', minStamp: '', secStamp: '' });
      }
    }
  };

  onLabelChange = (evt) => {
    this.setState({
      label: evt.target.value,
    });
  };

  onMinChange = (evt) => {
    if (evt.target.value > 60 || evt.target.value < 0) {
      return;
    }
    this.setState({
      minStamp: evt.target.value,
    });
  };

  onSecondChange = (evt) => {
    if (evt.target.value > 60 || evt.target.value < 0) {
      return;
    }
    this.setState({
      secStamp: evt.target.value,
    });
  };

  onSubmit = (evt) => {
    evt.preventDefault();

    const { label, minStamp, secStamp } = this.state;
    if (!label.trim()) return;

    // eslint-disable-next-line react/destructuring-assignment
    this.props.onItemAdded({ label, minStamp, secStamp });
    this.setState({
      label: '',
      minStamp: '',
      secStamp: '',
    });
  };

  render() {
    const { label, minStamp, secStamp } = this.state;
    return (
      <header className="header">
        <h1>todos</h1>
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <form onSubmit={this.onSubmit} onKeyUp={this.keyUp}>
          <input
            type="text"
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={this.onLabelChange}
            /* eslint-disable-next-line jsx-a11y/no-autofocus */
            autoFocus
            /* eslint-disable-next-line react/destructuring-assignment */
            value={label}
          />
          <input
            className="new-todo-form__timer"
            type="number"
            placeholder="Min"
            onChange={this.onMinChange}
            value={minStamp}
            min='0'
            max='60'
          />
          <input
            className="new-todo-form__timer"
            type="number"
            placeholder="Sec"
            onChange={this.onSecondChange}
            value={secStamp}
            min='0'
            max='60'
          />
        </form>
      </header>
    );
  }
}

NewTaskForm.propTypes = {
  onItemAdded: PropTypes.func.isRequired,
};
