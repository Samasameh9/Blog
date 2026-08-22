import axios from "axios";

 export  async  function registerApi(payload) {
  try {
    const response = await axios.post("https://blogbe.vercel.app/auth/signup",payload);
    
    return response.data
    
  } catch (error) {
      console.log(error);
    throw error;
  
  }
}
