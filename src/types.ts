export interface RouteType {
  path: string;
  element: React.ReactNode;
}

export type RoutesType = RouteType[];

export enum TodoActionsType {
  GET_TODOS = "GET_TODOS",
  DELETE_TODO = "DELETE_TODO",
  EDIT_TODO = "EDIT_TODO",
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO_COMPLETED = " TOGGLE_TODO_COMPLETED",
}

export interface TodoState {
  title: string;
  description: string;
  completed: boolean;
  id: number;
  date?: number;
}

export interface TodosState {
  todos: TodoState[];
}

export interface FetchTodosAction {
  type: TodoActionsType.GET_TODOS;
  payload: TodoState[];
}

export interface DeleteTodoAction {
  type: TodoActionsType.DELETE_TODO;
  payload: number;
}

export interface AddTodoAction {
  type: TodoActionsType.ADD_TODO;
  payload: TodoState;
}

export interface EditTodoAction {
  type: TodoActionsType.EDIT_TODO;
  payload: TodoState;
}
export interface ToggleTodoAction {
  type: TodoActionsType.TOGGLE_TODO_COMPLETED;
  payload: number;
}

export type TodosActions =
  | FetchTodosAction
  | DeleteTodoAction
  | AddTodoAction
  | EditTodoAction
  | ToggleTodoAction;

export enum ModalActionsType {
  CHANGE = "CHANGE",
}

export interface ModalState {
  visible: boolean;
}

export interface ChangeVisibleAction {
  type: ModalActionsType.CHANGE;
  payload: boolean;
}

export type ModalActions = ChangeVisibleAction;
