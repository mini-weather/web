import BaseResource from './index'
const axios = require('axios')

class UserResource extends BaseResource {
    login (data) {
        let headers = this.getHeaders()
        return axios.post(this.baseUrl + '/users/v1/auth/', data, headers);
}
}

export default UserResource
