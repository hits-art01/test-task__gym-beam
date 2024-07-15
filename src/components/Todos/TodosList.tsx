import React, { FC, useEffect, useMemo, useState } from "react";
import "./todos-list.scss";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";
import TodoItem from "../TodoItem/TodoItem";
import { TodoState } from "../../types";

const TodosList: FC = () => {
  const todos: TodoState[] = useTypedSelector((state) => state.todos);
  const [searchQuary, setSearchQuary] = useState<string>("");
  const [filtered, setFiltered] = useState<TodoState[]>([]);
  const memoizedTodos = useMemo(() => todos, [todos]);
  const { todosFetchAction } = useActions();

  useEffect(() => {
    todosFetchAction();
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuary(e.target.value);
  };

  const filterTodos = (todos: TodoState[]) => {
    return todos.filter((todo) =>
      todo.title.toLowerCase().includes(searchQuary.toLocaleLowerCase())
    );
  };

  useEffect(() => {
    const searched = filterTodos(todos);
    setFiltered(searched);
  }, [searchQuary]);

  return (
    <div className="todos-list">
      <div className="todos-list__search">
        <input
          type="text"
          value={searchQuary}
          onChange={handleInput}
          placeholder="Search"
        />
      </div>
      {searchQuary
        ? filtered.map((el: TodoState) => <TodoItem key={el.id} item={el} />)
        : memoizedTodos.map((el: TodoState) => (
            <TodoItem key={el.id} item={el} />
          ))}
    </div>
  );
};

export default TodosList;
