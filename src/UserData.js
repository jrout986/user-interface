import axios from 'axios';

//const USERS_REST_API_URL = 'http://localhost:8002/dbTest';

class UserData {

    getUsers(){
        return axios.get('http://localhost:8765/my-users/users');
    }

    saveNewUser(data){
        return axios.post('http://localhost:8765/my-users/users',data);
    }
}
export default new UserData();