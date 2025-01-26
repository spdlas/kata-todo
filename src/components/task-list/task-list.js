import PropTypes from 'prop-types';
import React from 'react';

import Task from '../task';
import './task-list.scss';

function TaskList({ tasks, onDeleted, onToggleDone }) {
  TaskList.defaultProps = {
    tasks: [],
  };

  TaskList.propTypes = {
    onDeleted: PropTypes.func.isRequired,
    onToggleDone: PropTypes.func.isRequired,
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired,
        dateStamp: PropTypes.instanceOf(Date).isRequired,
      })
    ),
  };

  const elements = tasks.map((item) => {
    const { id, ...itemProps } = item;

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Task key={id} {...itemProps} onDeleted={() => onDeleted(id)} onToggleDone={() => onToggleDone(id)} />;
  });

  return <ul className="todo-list">{elements}</ul>;
}

export default TaskList;
