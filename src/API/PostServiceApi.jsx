import axios from 'axios';

class PostServiceApi {
    static async getAllPosts(limit: number = 10, page: number = 1) {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
            params: {
                _limit: limit,
                _page: page
            }
        })

        return response
    }
}

export default PostServiceApi;