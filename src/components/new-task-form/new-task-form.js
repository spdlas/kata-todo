import React, { Component } from 'react';
import './new-task-form.scss';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
  // ругается что должен быть в конструкторе, но современный экма поддерживает и так
  // далее ошибки в пропсах из-за стейта
  // eslint-disable-next-line react/state-in-constructor
  state = {
    label: '',
  };

  onLabelChange = (evt) => {
    this.setState({
      label: evt.target.value,
    });
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: '',
    });
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={this.onLabelChange}
            /* eslint-disable-next-line jsx-a11y/no-autofocus */
            autoFocus
            /* eslint-disable-next-line react/destructuring-assignment */
            value={this.state.label}
          />
        </form>
      </header>
    );
  }
}

NewTaskForm.propTypes = {
  onItemAdded: PropTypes.func.isRequired,
};
