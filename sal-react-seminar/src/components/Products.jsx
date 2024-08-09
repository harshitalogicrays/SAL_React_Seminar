//rafc 
import React, { useContext, useEffect, useState } from 'react'
import { contextdata } from '../MyContext'
const Products = () => {
    const data=useContext(contextdata)
    let [products,setProducts] = useState([])
    useEffect(()=>{
        getproductdata()
    },[])
    let getproductdata=async()=>{
        try{
            let res = await fetch("http://localhost:3000/products")
            let data = await res.json()
            console.log(data)
            setProducts(data)
        }
        catch(err){console.log(err)}
    }

    let handleClick=(product)=>{
        data.addtocart(product)
    }
  return (
    <div className='container-fluid'>
      <h1>Products Page</h1>
      {/* {JSON.stringify(products)}  */}

<div className="row">
    {products.map((product)=>
     <div className="col-3 mb-3">
     <div class="card">
       <img src={product.image} class="card-img-top" height='150px' alt="..."/>
       <div class="card-body">
           <h5 class="card-title">{product.name}</h5>
           <h6 class="card-title">{product.category}&emsp; {product.brand}</h6>
           <p class="card-text">${product.price}<br/>Available: {product.stock}</p>
           <button type="button" class="btn btn-primary"
           onClick={()=>handleClick(product)}>Add to Cart</button>
       </div>
     </div>
   </div>
    )}
   
</div>
    </div>
  )
}
export default Products
