import PropTypes from 'prop-types';
import React from 'react';

import TasksFilter from '../tasks-filter';

import './footer.scss';

// eslint-disable-next-line object-curly-newline
function Footer({ toDo, onClearAll, filter, onFilterChange }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        {toDo}
        items left
      </span>
      <TasksFilter filter={filter} onFilterChange={onFilterChange} />
      <button type="button" className="clear-completed" onClick={onClearAll}>
        Clear completed
      </button>
    </footer>
  );
}

Footer.propTypes = {
  toDo: PropTypes.number,
  onClearAll: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

Footer.defaultProps = {
  toDo: 0,
};

export default Footer;
