import axios from "axios";

 export  async  function updateUserBlog(blogId,formData) {
  try {
    const response = await axios.patch(`https://blogbe.vercel.app/blog/${blogId}`,formData);
    
    return response.data
    
  } catch (error) {
    console.log(error);
    throw error;
    
  }
}
