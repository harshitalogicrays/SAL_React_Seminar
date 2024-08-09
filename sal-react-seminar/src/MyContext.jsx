import React, { useState } from 'react'
export let contextdata =React.createContext()

const MyContext = ({children}) => {
    const [cartItems,setCartItems]=useState([])
    const [total,setTotal]=useState(0)
    let addtocart=(product)=>{
        // console.log(product)
       let itemIndex =  cartItems.findIndex((item)=>item.id==product.id)
       if(itemIndex == -1){
        setCartItems([...cartItems,{...product,qty:1}])
        alert(`${product.name} added to cart`)
       }
       else {
        alert(`${product.name} already added to cart`)
       }
   
    }
    let increase=(product)=>{
        let itemIndex =  cartItems.findIndex((item)=>item.id==product.id)
        if(itemIndex != -1){
            if(product.stock > cartItems[itemIndex].qty)
                cartItems[itemIndex].qty++
            // alert(`${product.name} qty increased by 1`)
        }
        setCartItems([...cartItems])
    }
    let decrease=(product)=>{
        let itemIndex =  cartItems.findIndex((item)=>item.id==product.id)
        if(itemIndex != -1){
            if(cartItems[itemIndex].qty > 1)
                cartItems[itemIndex].qty--
            else  cartItems[itemIndex].qty =1
        }
        setCartItems([...cartItems])
    }
    let removefromcart=(product)=>{
        let itemIndex =  cartItems.findIndex((item)=>item.id==product.id)
        cartItems.splice(itemIndex,1)
        setCartItems([...cartItems])
    }
    let emptycart=()=>{
        setCartItems([]);setTotal(0)
    }
    let calculatetotal=()=>{
        let t = cartItems.reduce((prev,curr)=>{return prev+(curr.qty * curr.price)},0)
        setTotal(t)
    }
  return (
    <contextdata.Provider value={{cartItems,total,addtocart,increase,decrease,removefromcart,emptycart,calculatetotal}}>
        {children}
    </contextdata.Provider>
  )
}

export default MyContext
