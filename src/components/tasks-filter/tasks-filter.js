import React, { Component } from 'react';
import './tasks-filter.scss';
import PropTypes from 'prop-types';

export default class TasksFilter extends Component {
  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Completed' },
  ];

  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const buttonClass = isActive ? 'selected' : '';
      return (
        <li key={name}>
          <button type="button" className={buttonClass} onClick={() => onFilterChange(name)}>
            {label}
          </button>
        </li>
      );
    });
    return <ul className="filters">{buttons}</ul>;
  }
}

TasksFilter.propTypes = {
  filter: PropTypes.oneOf(['all', 'active', 'done']),
  onFilterChange: PropTypes.func.isRequired,
};

TasksFilter.defaultProps = {
  filter: 'all',
};
