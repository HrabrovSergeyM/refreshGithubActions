import {
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
  RESET_TIMER,
  TOGGLE_TIMER,
  ActionTypes,
} from './types';

interface State {
  events: any[];
  loading: boolean;
  error: string | null;
  timer: number;
  isTimerActive: boolean;
}

const initialState: State = {
  events: [],
  loading: false,
  error: null,
  timer: 30,
  isTimerActive: true,
};

export const rootReducer = (
  state = initialState,
  action: ActionTypes,
): State => {
  switch (action.type) {
    case FETCH_EVENTS_REQUEST:
      return {...state, loading: true, error: null};
    case FETCH_EVENTS_SUCCESS:
      return {...state, loading: false, events: action.payload};
    case FETCH_EVENTS_FAILURE:
      return {...state, loading: false, error: action.payload};
    case RESET_TIMER:
      return {...state, timer: 30};
    case TOGGLE_TIMER:
      return {...state, isTimerActive: !state.isTimerActive};
    default:
      return state;
  }
};
