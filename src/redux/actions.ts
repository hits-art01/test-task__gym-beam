import { Dispatch } from "redux";
import {
  ChangeVisibleAction,
  DeleteTodoAction,
  ModalActionsType,
  TodoActionsType,
  TodosActions,
  TodoState,
} from "../types";

export const todosFetchAction = () => {
  return async (dispatch: Dispatch<TodosActions>) => {
    try {
      const req = await fetch(
        "https://6692e4c3346eeafcf46e7db4.mockapi.io/api/gymbeam/todos"
      );
      const res: TodoState[] = await req.json();
      dispatch({
        type: TodoActionsType.GET_TODOS,
        payload: res,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const deleteTodo = (payload: number) => ({
  type: TodoActionsType.DELETE_TODO,
  payload,
});

export const editTodo = (payload: TodoState) => ({
  type: TodoActionsType.EDIT_TODO,
  payload,
});
export const addTodo = (payload: any) => ({
  type: TodoActionsType.ADD_TODO,
  payload,
});

export const toggleTodoCompleted = (payload: number) => ({
  type: TodoActionsType.TOGGLE_TODO_COMPLETED,
  payload,
});
