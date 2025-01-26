import PropTypes from 'prop-types';

import Task from '../task';
import './task-list.scss';

const TaskList = ({ tasks, onDeleted, onToggleDone }) => {
  TaskList.defaultProps = {
    tasks: [],
  };

  TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired,
        dateStamp: PropTypes.instanceOf(Date).isRequired,
      })
    ).isRequired,
    onDeleted: PropTypes.func.isRequired,
    onToggleDone: PropTypes.func.isRequired,
  };

  const elements = tasks.map((item) => {
    const { id, ...itemProps } = item;

    return <Task key={id} {...itemProps} onDeleted={() => onDeleted(id)} onToggleDone={() => onToggleDone(id)} />;
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
