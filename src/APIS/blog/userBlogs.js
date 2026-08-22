import axios from "axios";

 export  async  function getUserBlogs(authorId) {
  try {
    const response = await axios.get(`https://blogbe.vercel.app/blog/lists/${authorId}`);
    
    return response.data
    
  } catch (error) {
    console.log(error);
    throw error;
    
  }
}
