export const login_Successfull = (data)=>({
  type:"Login_success",
payload:data
})

export const login_Failure = ()=>({
  type:"Login_failure"
})

export const Logout = ()=>({
  type:"logout"
})
// isAdmin
// isError
// isLoading
// data=email
// isAuth

