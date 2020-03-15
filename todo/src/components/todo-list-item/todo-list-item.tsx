import React from 'react';
import './todo-list-item.css';

export interface ListItemProps {
  label: string
  important?: boolean
  id?: number
}

interface style {
  color: string
  fontWeight: number | "bold" | "normal" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "bolder" | "lighter" | undefined
}

export const TodoListItem = ({ label, important = false }: ListItemProps): JSX.Element => {
  const style: style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  };
  return (
    <span className="todo-list-item">
      <span className="todo-list-item" style={style}>
        { label }
      </span>
      <button type="button"
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>
      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
        <i className="far fa-trash-alt" />
      </button>
    </span>

  );
};

