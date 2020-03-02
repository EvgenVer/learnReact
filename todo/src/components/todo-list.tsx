import React from 'react';
import TodoListItem from './todo-list-item';

export default function TodoList(): JSX.Element {
  return (
    <ul>
      <li><TodoListItem /></li>
      <li><TodoListItem /></li>
    </ul>
  );
}