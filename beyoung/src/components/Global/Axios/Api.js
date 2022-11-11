
import axios from "axios";
const baseURl = "https://confused-lime-puffer.cyclic.app/clothing";
export const getData = (category, page = 1) => {
  return axios.get(baseURl, {
    params: { category: category, _page: page, _limit: 12 },
  });
};


export const get_users = ()=>{
  return axios.get('https://reqres.in/api/users',{});
}