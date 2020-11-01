import BaseResource from './index'
import {
    fetchCurrentPending,
    fetchCurrentSuccess,
    fetchCurrentError
} from '../actions/forecast';

const axios = require('axios')

class ForecastResource extends BaseResource {
    getCurrent(data) {
        return dispatch => {
            let headers = this.getHeaders()
            dispatch(fetchCurrentPending());
            axios.get(
                this.baseUrl + '/forecast/current/item/', data, headers
            ).then((response) => {
                dispatch(fetchCurrentSuccess(response.data));
            }).catch((error, message, code) => {
                this.errorHandler(error.response)
                dispatch(fetchCurrentError(this.getMessage(error.response)));
            });
        }
    }
}

export default ForecastResource
