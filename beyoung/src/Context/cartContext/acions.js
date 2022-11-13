export const AddtoCart = (data)=>({
  type:'Add_to_cart',
  payload:data
})


export const RemoveFromCart = (id)=>({
  type:'Remove_from_cart',
  payload:id
})

export const checkout = ()=>(
  {type:"Checkout"}
)