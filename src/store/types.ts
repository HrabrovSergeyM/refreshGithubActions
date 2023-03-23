export const FETCH_EVENTS_REQUEST = 'FETCH_EVENTS_REQUEST';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE';
export const RESET_TIMER = 'RESET_TIMER';
export const TOGGLE_TIMER = 'TOGGLE_TIMER';

interface FetchEventsRequestAction {
  type: typeof FETCH_EVENTS_REQUEST;
}

interface FetchEventsSuccessAction {
  type: typeof FETCH_EVENTS_SUCCESS;
  payload: any[];
}

interface FetchEventsFailureAction {
  type: typeof FETCH_EVENTS_FAILURE;
  payload: string;
}

interface ResetTimerAction {
  type: typeof RESET_TIMER;
}

interface ToggleTimerAction {
  type: typeof TOGGLE_TIMER;
}

export type ActionTypes =
  | FetchEventsRequestAction
  | FetchEventsSuccessAction
  | FetchEventsFailureAction
  | ResetTimerAction
  | ToggleTimerAction;
