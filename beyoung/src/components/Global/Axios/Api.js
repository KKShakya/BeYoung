
import axios from "axios";
const baseURl = "https://confused-lime-puffer.cyclic.app/clothing";
export const getData = (category, page = 1,sort,ord) => {
  return axios.get(baseURl, {
    params: { category: category, _page: page, _limit: 12,_sort:sort,_order:ord },
  });
};


export const set_users = (email,password,subscription)=>{
  return axios.post('https://confused-lime-puffer.cyclic.app/users',{email,password,subscription});
}
export const get_users =()=>{
  
}