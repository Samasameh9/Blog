import axios from "axios";

 export  async  function getUserProfile(userId) {
  try {
    const response = await axios.get(`https://blogbe.vercel.app/user/${userId}`);
    
    return response.data
    
  } catch (error) {
    console.log(error);
    throw error;
    
  }
}
