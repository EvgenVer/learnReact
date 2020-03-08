import React from 'react';
import { TodoListItem } from './todo-list-item';
import { ListItemProps } from './todo-list-item';

interface TodoListProps {
  todos: ListItemProps[]
}

export default function TodoList({ todos }: TodoListProps): JSX.Element {
  const elements: JSX.Element[] = todos.map((item) => {
    return (
      <li>
        <TodoListItem {...item} />
      </li>
    );
  });
  return (
    <ul>
      { elements }
    </ul>
  );
}