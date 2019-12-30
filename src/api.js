import axios from 'axios'

axios.default.baseURL = "http://127.0.0.1:8000/api"

export default {
    
    getAllPosts(){
        return axios.get('/post/')
    },

    createPost(data){
        return axios.post('/post/',data)
    },

    deletePost(id) {
        return axios.delete('/posts/'+String(id))
    }
}