import axios from "axios";

 export  async  function loginApi(data) {
  try {
    const response = await axios.post("https://blogbe.vercel.app/auth/signin",data);
    
    return response.data
    
  } catch (error) {
     console.log(error);
    throw error;
   
  }
}
