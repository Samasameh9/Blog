import axios from "axios";

 export  async  function createBlog(data) {
  try {
    const response = await axios.post("https://blogbe.vercel.app/blog",data);
    
    return response.data
    
  } catch (error) {
    throw error;
    console.log(error);
  }
}
