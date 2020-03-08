import React from 'react';
import ReactDom from 'react-dom';
import TodoList from './components/todo-list';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import { ListItemProps } from './components/todo-list-item';
// import { TodoListItem, ListItemProps } from './components/todo-list-item';


function App(): JSX.Element {

  const todoData: ListItemProps[] = [
    { label: 'Drink Coffee', important: false },
    { label: 'Make Awesome App', important: true },
    { label: 'Have a lunch', important: false }
  ];  
  return(
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData}/>
    </div>
  );
} 

ReactDom.render(<App />, document.getElementById('root'));

