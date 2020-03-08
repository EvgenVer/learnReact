import React from 'react';

export interface ListItemProps {
  label: string
  important?: boolean
}

export const TodoListItem = ({ label, important = false }: ListItemProps): JSX.Element => {
  const style = {
    color: important ? 'tomato' : 'black'
  };
  return <span style={style}>{ label }</span>;
};

