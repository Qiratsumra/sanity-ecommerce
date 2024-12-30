'use client'
import { FiShoppingBag } from 'react-icons/fi'
import AddCart from './AddCart';
import { createCartContext } from './context/CardContext';
import { useContext } from 'react';
import  Link  from 'next/link';

export default function Header() {
  const {showCart,setShowCart}:any = useContext(createCartContext);


  return (
  <>
    <nav className="flex items-center justify-evenly px-6 py-4 bg-white shadow-md">
      {/* Left Side: Shop Text */}
      <Link href={'/'} className="text-xl font-semibold great-vibes-regular text-gray-800">Aura Of Beauty</Link>
      {/* Right Side: Shopping Bag with Notification Badge */}
      <AddCart/>
    </nav>
  </>
  )
}
