import { FetchTodosAction, ClearTodosAction, ClearDivsAction } from "./todos";

export enum ActionTypes {
  fetchTodos,
  clearTodos,
  clearDivs,
}

export type Action = FetchTodosAction | ClearTodosAction | ClearDivsAction;
