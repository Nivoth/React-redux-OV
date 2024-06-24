import React from 'react'
import { Card } from "flowbite-react";
import { useSelector, useDispatch } from 'react-redux';
export default function CardProduct({id,qty,description,title,image,price}) {
//fetching data from the store using hook Useselctor
const items = useSelector((state) => state.cart);
//useDispatch to dispatch action
const dispatch = useDispatch();
function handleAddToCart (){
  dispatch(addToCart({id,description,qty,price,image,title}));
}
  return (
    <div>
<Card
      className="max-w-sm "
    >
        <div>
            <img 
            className='h-[350px] object-cover'
            src={image ? image : "https://dummyimage.com/720x400"} 
            alt={title} />
        </div>
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title || "No product title"}
        </h5>
      </a>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">{price ? price : "No Price"}$</span>
        <button
          onClick={()=> handleAddToCart()}
          href="#"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </button>
      </div>
    </Card>
    </div>
  )
}
