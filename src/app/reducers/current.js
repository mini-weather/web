import {
    FETCH_CURRENT_PENDING,
    FETCH_CURRENT_SUCCESS,
    FETCH_CURRENT_ERROR
} from '../actions/forecast';

const initialState = {
    pending: false,
    current: null,
    error: null
}

export function currentReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CURRENT_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_CURRENT_SUCCESS:
            return {
                ...state,
                pending: false,
                current: action.items
            }
        case FETCH_CURRENT_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

export const getCurrent = state => state.current.current;
export const getCurrentPending = state => state.current.pending;
export const getCurrentError = state => state.current.error;

