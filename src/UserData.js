import axios from 'axios';

//const USERS_REST_API_URL = 'http://localhost:8002/dbTest';

class UserData {

    getUsers(){
        return axios.get('http://localhost:8002/getEmployees');
    }

    saveNewUser(data){
        return axios.post('http://localhost:8002/createNewEmployee',data);
    }
}
export default new UserData();