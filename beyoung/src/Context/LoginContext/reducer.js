export default function reducer(state,action){
  switch (action.type) {
    case "Login_success":
      const isAdmin = ()=>{if(state.isAdmin) return {...state,isAuth:true,isAdmin:true,isLoading:false,data:action.payload}
    else{return{...state,isAuth:true,isAdmin:false,isLoading:false,data:action.payload}}}
    return isAdmin();
    case "Login_failure":
      return {...state,isAuth:false,isError:true,isLoading:false,data:{}}
    case 'logout':
      return{...state,isAuth:false,isError:false,data:[]}
    default:
      return state;
  }
}