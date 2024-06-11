import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link,NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const{cart} = useSelector((state) => state);
  console.log("Printing data");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () =>{
    setTotalAmount (cart.reduce ((acc, curr) => acc+curr.price,0));
  },[cart]);
  return (
    <div>
{
  cart.length > 0 ?
  (<div className="p-2 max-w-6xl mx-auto space-y-6 min-h-[80vh] flex space-x-12 justify-start ">
    <div className="w-[60%] flex space-y-6 flex-col ">
      {
        cart.map((item,index) => {
          return <CartItem key ={item.id} item ={item} itemIndex ={index}/>
        })
      }
    </div>

    <div className="flex justify-between flex-col h-[80vh] w-[30%] min-[425px]:items-center ">
            <div className="flex flex-col space-y-2">
              <div>

      <div className="text-xl text-red-700 font-bold uppercase">
        Your Cart
      </div>
      <div className="text-5xl text-red-700 font-bold uppercase ">Summary
      </div>
      </div>
      <p className="mt-4 min-[425px]:items-center">
        <span className="text-lg text-slate-700 font-bold" >Total Items:{cart.length}</span>
      </p>
    </div>

    <div>
      <p className="text-lg text-slate-700 font-bold mb-4">Total Amount: ${totalAmount}</p>
      <button className=" text-white  bg-red-700 rounded-md border-2 border-red-700 font-semibold text-lg p-2 px-10 uppercase cursor-pointer hover:text-white hover:bg-opacity-90 shadow-[12px_10px_10px_0px_#00000024] transition duration-300 ease-in w-full ">CheckOut Now</button>
    </div>
    </div>
    </div>):
    (
      <div className="flex flex-col gap-4 justify-center items-center min-h-[80vh]">
        <h1 className="text-3xl uppercase font-bold text-red-700">Cart Empty</h1>
        <Link to ="/">
          <button className=" text-white  bg-red-700 rounded-md border-2 border-red-700 font-semibold text-lg p-2 px-10 uppercase cursor-pointer hover:text-white hover:bg-opacity-90 shadow-[12px_10px_10px_0px_#00000024] transition duration-300 ease-in hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] ">
            Shop Now
          </button>
        </Link>
      </div>)
}
    </div>
  );
};

export default Cart;