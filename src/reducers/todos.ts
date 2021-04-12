import { ActionTypes, Todo, Action } from "../actions";

export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.clearTodos:
      return [];
    case ActionTypes.clearDivs:
      return state.filter((el: Todo) => el.id !== action.payload);
    default:
      return state;
  }
};
