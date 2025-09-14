import React from 'react'

export default function Card({image,title,price,productData,setCartDetails,cartDetails}) {
    
    function handleCartBtn(productData){
        if(cartDetails.includes(productData)){
          alert("Already product in cart");
        }
        else{
          setCartDetails((cartDetails)=>[...cartDetails,productData]);
        }
          
         
    }
  return (
    <div className='w-[300px] h-[300px] flex flex-col items-center justify-around shadow-md bg-fuchsia-100 hover:shadow-2xl'>
      <img className='w-[100px] ' src={image} alt="" />
      <div className='text-md font-semibold'>Product:{title.slice(0,15)}...</div>
      <div className='text-md font-semibold'>Price:${price}</div>
      <button className='p-2 px-4 bg-green-600 rounded-sm' onClick={()=>handleCartBtn(productData)}>Add to Cart</button>
    </div>
  )
}
