import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast';
import { add ,remove } from '../redux/Slices/CartSlice';

const Product = ({ post }) => {

  const {cart} = useSelector((state) => state);
  
  const dispatch = useDispatch();

  const addToCart = () =>{
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from  Cart");
  };

  return (
    <div className='flex flex-col items-center justify-between hover:scale-110 transition-duration-300 ease-in  gap-3 p-4 ml-5 mt-1 rounded-xl  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] '>
      <div>
        <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1 '>{post.title}</p>
      </div>
      <div>
        <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>
      <div className='h-[180px]' >
        <img src={post.image} className='w-full h-full'/>
      </div>
      <div className='flex justify-between gap-12'>
      <div>
        <p className='text-red-600 font-semibold'>${post.price}</p>
      </div>

        {cart.some((p) => p.id == post.id) ? 
(
<button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
hover:bg-gray-700
hover:text-white transition-duration-300 ease-in' onClick={removeFromCart}>
             <p>Remove Item</p> 
            </button> ):

          (<button 
        className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
        hover:bg-gray-700
        hover:text-white transition-duration-300 ease-in'  onClick={addToCart}>
            <p>Add to Cart</p>
          </button>
          )}
     </div>
    </div>
  );
};

export default Product;