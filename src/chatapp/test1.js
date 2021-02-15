import axios from 'axios';
export const  test =  async (Idproduct) =>{
  return await axios.get(`http://localhost:8000/profile/${Idproduct}`);
}