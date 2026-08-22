import axios from "axios";

 export  async  function deleteUserProfile(userId) {
  try {
    const response = await axios.delete(`https://blogbe.vercel.app/user/${userId}`);
    
    return response.data
    
  } catch (error) {
    console.log(error);
    throw error;
    
  }
}
