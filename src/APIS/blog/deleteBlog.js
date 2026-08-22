import axios from "axios";

 export  async  function deleteUserBlog(blogId) {
  try {
    const response = await axios.delete(`https://blogbe.vercel.app/blog/${blogId}`);
    
    return response.data
    
  } catch (error) {
    console.log(error);
    throw error;
    
  }
}
