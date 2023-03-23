import {
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
  RESET_TIMER,
  TOGGLE_TIMER,
  ActionTypes,
} from './types';

export const fetchEventsRequest = (): ActionTypes => ({
  type: FETCH_EVENTS_REQUEST,
});

export const fetchEventsSuccess = (events: any[]): ActionTypes => ({
  type: FETCH_EVENTS_SUCCESS,
  payload: events,
});

export const fetchEventsFailure = (error: string): ActionTypes => ({
  type: FETCH_EVENTS_FAILURE,
  payload: error,
});

export const resetTimer = (): ActionTypes => ({
  type: RESET_TIMER,
});

export const toggleTimer = (): ActionTypes => ({
  type: TOGGLE_TIMER,
});

export const fetchEvents = () => async (dispatch: any) => {
  dispatch(fetchEventsRequest());

  try {
    const response = await fetch('https://api.github.com/events?per_page=25');
    const events = await response.json();

    if (response.ok) {
      dispatch(fetchEventsSuccess(events));
    } else {
      dispatch(fetchEventsFailure('Error fetching events.'));
    }
  } catch (error) {
    dispatch(fetchEventsFailure(error.message));
  }
};
