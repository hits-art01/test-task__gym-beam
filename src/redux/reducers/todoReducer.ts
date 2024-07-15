import { Reducer } from "redux";
import {
  TodoActionsType,
  TodosActions,
  TodosState,
  TodoState,
} from "../../types";

const initialState: TodosState = {
  todos: [],
};

export const todoReducer: Reducer<TodosState, TodosActions> = (
  state: TodosState = initialState,
  action: TodosActions
): TodosState => {
  switch (action.type) {
    case TodoActionsType.GET_TODOS:
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };
    case TodoActionsType.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((el: TodoState) => el.id !== action.payload),
      };
    case TodoActionsType.EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((el: TodoState) =>
          el.id === action.payload.id ? { ...action.payload } : el
        ),
      };
    case TodoActionsType.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case TodoActionsType.TOGGLE_TODO_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo: TodoState) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    default:
      return state;
  }
};
