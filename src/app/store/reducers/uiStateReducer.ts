import { UiState, INITIAL_UI_STATE } from "../ui-state";
import { THREAD_SELECTED_ACTION, ThreadSelectedAction, SELECT_USER_ACTION, SelectUserAction } from "../actions";
import { Action } from "@ngrx/store";

export function uiState(state: UiState = INITIAL_UI_STATE, action: any): UiState {
  switch (action.type) {
    case THREAD_SELECTED_ACTION:
      return handleThreadSelectedAction(state, action);
    case SELECT_USER_ACTION:
      return handleSelectUserAction(state, action);
    default:
      return state;
  }
}

function handleThreadSelectedAction(state: UiState, action: ThreadSelectedAction): UiState {
  const newState = Object.assign({}, state);
  newState.currentThreadId = action.payload;
  return newState;
}

function handleSelectUserAction(state: UiState, action: SelectUserAction): UiState {
  const newState = Object.assign({}, state);
  newState.userId = action.payload;
  newState.currentThreadId = undefined;
  return newState;
}