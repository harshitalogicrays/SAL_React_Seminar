import React, { useContext, useEffect } from 'react'
import { contextdata } from '../MyContext'
import { FaTrashAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate=useNavigate()
    let data =useContext(contextdata)
    let {cartItems,total,increase,decrease,removefromcart,emptycart,calculatetotal} = data
    useEffect(()=>{
        calculatetotal()
    },[cartItems])

    let handleOrder=async()=>{
      let order={orderDate:new Date().toLocaleDateString(),orderTime:new Date().toLocaleTimeString(),orderStatus:"placed",payment:"COD" , cartItems , total} 
      try{
       await fetch("http://localhost:3000/orders",{
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(order)     
        })
        alert("order placed")
        navigate('/')
        emptycart()
          }
    catch(err){console.log(err)} 
    }
  return (
    <div className='container mt-5 shadow'>
        <h1>Cart Page</h1>
        <div class="table-responsive"  >
            <table  class="table table-primary" >
                <thead>
                    <tr>
                        <th scope="col">Sr.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.length==0 ? <tr><th colspan={7}>No Item in Cart</th></tr> :  
                    <>
                        {cartItems.map((item,i)=>
                         <tr class="">
                         <td scope="row">{i+1}</td>
                         <td>{item.name}</td>
                         <td><img src={item.image} height={50} width={50}/></td>
                         <td>{item.price}</td>
                         <td><button type="button" onClick={()=>decrease(item)}>-</button>
                            <input type="text" value={item.qty}
                            style={{width:'40px',textAlign:'center'}}/>
                            <button type="button" onClick={()=>increase(item)}>+</button>
                            </td>
                         <td>{item.qty * item.price}</td>
                         <td>
                            <button type="button" className='btn btn-danger' onClick={()=>removefromcart(item)}><FaTrashAlt/></button>
                            </td>
                     </tr> )}
                    </>               
                    }
                </tbody>
            </table>
        </div>
        <div className="row">
            <div className="col-8">
            <button type="button" className='btn btn-danger' onClick={()=>emptycart()}>Empty Cart<FaTrashAlt/></button>
            </div>
            <div className="col">
                <h1>Total: <span className='float-end'>${total}</span></h1>
                <hr/>
                <div class="d-grid gap-2">
                    <button  type="button" class="btn btn-primary"  onClick={handleOrder} >
                        Checkout
                    </button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Cart
