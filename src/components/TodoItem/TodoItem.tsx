import React, { FC, useState } from "react";
import { TodoState } from "../../types";
import DeleteIcon from "../../imgs/cross.svg";
import EditIcon from "../../imgs/edit.svg";
import "./todo-item.scss";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleTodoCompleted } from "../../redux/actions";
import { todoFetchDelete } from "../../server/deleteTodo";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import EditSector from "./EditSector/EditSector";
import { todoFetchEdit } from "../../server/editTodo";

interface TodoItemProps {
  item: TodoState;
}

const TodoItem: FC<TodoItemProps> = ({ item }) => {
  const todos = useTypedSelector((state) => state.todos);
  const [isVisible, setIsvisible] = useState<boolean>(false);
  const dispatch = useDispatch();

  const date = item.date ? new Date(item.date) : new Date();

  const removeTodo = () => {
    dispatch(deleteTodo(item.id));
    todoFetchDelete(item.id);
  };

  const closeSector = () => setIsvisible(false);

  const handleCheckboxChange = () => {
    dispatch(toggleTodoCompleted(item.id));
    const compTodo = {
      id: item.id,
      title: item.title,
      description: item.description,
      completed: !item.completed,
    };
    todoFetchEdit(item.id, compTodo);
  };

  return (
    <div className="todo-item">
      <div className="todo-item__main">
        <div className="todo-item__text">
          <h3 className="todo-item__title">
            {item.id}. {item.title}
          </h3>
          <p className="todo-item__description">{item.description}</p>
          <div>{item.date ? date.toLocaleDateString() : null}</div>
        </div>

        <div className="todo-item__controllers">
          <div className="todo-item__checked">
            <input
              type="checkbox"
              id={item.title}
              checked={item.completed}
              onChange={handleCheckboxChange}
            />
          </div>
          <div className="todo-item__edit">
            <button
              className="todo-item__btn"
              onClick={() => setIsvisible(!isVisible)}
            >
              <img src={EditIcon} alt={"edit"} />
            </button>
          </div>
          <div className="todo-item__delete">
            <button className="todo-item__btn" onClick={removeTodo}>
              <img src={DeleteIcon} alt={"delete"} />
            </button>
          </div>
        </div>
      </div>
      {isVisible ? <EditSector item={item} close={closeSector} /> : null}
    </div>
  );
};

export default TodoItem;
