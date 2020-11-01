export const FETCH_CURRENT_PENDING = 'FETCH_CURRENT_PENDING';
export const FETCH_CURRENT_SUCCESS = 'FETCH_CURRENT_SUCCESS';
export const FETCH_CURRENT_ERROR = 'FETCH_CURRENT_ERROR';


export function fetchCurrentPending() {
    return {
        type: FETCH_CURRENT_PENDING,
    }
}

export function fetchCurrentSuccess(items) {
    return {
        type: FETCH_CURRENT_SUCCESS,
        items: items
    }
}

export function fetchCurrentError(error) {
    return {
        type: FETCH_CURRENT_ERROR,
        error: error
    }
}