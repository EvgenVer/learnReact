import React from 'react';
import { TodoListItem } from '../todo-list-item/todo-list-item';
import { ListItemProps } from '../todo-list-item/todo-list-item';
import './todo-list.css';

interface TodoListProps {
  todos: ListItemProps[]
}

export default function TodoList({ todos }: TodoListProps): JSX.Element {
  const elements: JSX.Element[] = todos.map((item) => {
    const {id, ...itemProps} = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...itemProps} />
      </li>
    );
  });
  return (
    <ul className="list-group todo-list"> 
      { elements }
    </ul>
  );
}