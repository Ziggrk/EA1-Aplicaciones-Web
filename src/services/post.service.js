import axios from "axios";


const http = axios.create({
    baseURL:"http://localhost:3000/"
})
export class PostService {

    getAll() {
        return http.get('posts')
    }

    getPostById(id){
        return http.get('posts/'+id)
    };
    getPopularPosts(){
      return http.get('posts?_sort=views&_order=desc&_limit=3')
    };
    getOthersPosts(size){
      return http.get('posts?_sort=views&_order=desc&_start=3&_end='+size);
    };
    createUser(body){
        return http.post('posts',body)
    }
    update(id,body){
        return http.patch('posts/'+id,body)
    }
    delete(id){
        return http.delete("posts/"+id)
    }


}