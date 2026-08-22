import axios from "axios";

 export  async  function getBlogs() {
  try {
    const response = await axios.get("https://blogbe.vercel.app/blog/lists");
    
    return response.data
    
  } catch (error) {
    console.log(error);
    throw error;
    
  }
}
