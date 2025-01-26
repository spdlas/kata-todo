import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

// eslint-disable-next-line object-curly-newline
function Task({ label, done, onDeleted, onToggleDone, dateStamp }) {
  let className = '';
  if (done) {
    className += 'completed';
  }

  const formattedDate = formatDistanceToNow(dateStamp, { includeSeconds: true });

  return (
    <li className={className}>
      <div className="view">
        <input className="toggle" type="checkbox" onClick={onToggleDone} />
        <label htmlFor="toggle">
          <span className="description">{label}</span>
          <span className="created">{formattedDate}</span>
        </label>
        {/* Жалуется что явно не задан тип кнопки... */}
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button type="button" className="icon icon-edit" />
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button type="button" className="icon icon-destroy" onClick={onDeleted} />
      </div>
    </li>
  );
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
};

export default Task;
