import React from 'react';
import './todo-list-item.css';

export interface ListItemProps {
  label: string
  id?: number
}

interface style {
  color: string
  fontWeight: number | "bold" | "normal" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "bolder" | "lighter" | undefined
}

interface ListItemState {
  done: boolean
  important: boolean
}

export class TodoListItem extends React.Component<ListItemProps, ListItemState> {
  
  constructor(props: ListItemProps) {
    super(props);
    this.state = {
      done: false,
      important: false
    }
  }
  
  onLabelClick = () => {
    this.setState({
      done: true
    });
  }

  onMarkImportant = () => {
    this.setState({
      important: true
    });
  }
  
  render() {
    const { label } = this.props;
    const { done, important } = this.state;
    let className = done ? 'todo-list-item done' : 'todo-list-item';
    if(important) {
      className += ' important';
    }

    return (
      <span className={ className }>
        <span className="todo-list-item" 
          onClick={this.onLabelClick}>
          { label }
        </span>
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={this.onMarkImportant}>
          <i className="fa fa-exclamation" />
        </button>
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
          <i className="far fa-trash-alt" />
        </button>
      </span>
  
    );
  }
}