import axios from "axios";

 export  async  function updateProfile(userId,data) {
  try {
    const response = await axios.patch(`https://blogbe.vercel.app/user/${userId}`,data);
    
    return response.data
    
  } catch (error) {
    console.log(error);
    throw error;
    
  }
}
