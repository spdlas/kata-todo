import TasksFilter from '../tasks-filter';
import PropTypes from 'prop-types';
import './footer.scss';
import React from "react";

const Footer = ({ toDo, onClearAll, filter, onFilterChange }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{toDo} items left</span>
      <TasksFilter filter={filter} onFilterChange={onFilterChange} />
      <button className="clear-completed" onClick={onClearAll}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.propTypes = {
  toDo: PropTypes.number.isRequired, // Добавьте эту строку
  onClearAll: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Footer;
