import axios from "axios";


const http = axios.create({
    baseURL:"http://localhost:3000/"
})
export class FoodTruckService {

    getAll() {
        return http.get('food-trucks')
    }

    getUserById(id){
        return http.get('food-trucks/'+id)
    };
    createUser(body){
        return http.post('food-trucks',body)
    }

    udapte(id,body){
        return http.patch('food-trucks/'+id,body)
    }

    delete(id){
        return http.delete("food-trucks/"+id)
    }

}