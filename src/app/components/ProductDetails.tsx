'use client'
import sanityClient from '@/sanity/sanity.client'
import { urlFor } from './ProductList'
import {useContext, useState} from "react"
import { AiOutlineMinus, AiOutlinePlus  } from 'react-icons/ai'
import { createCartContext } from './context/CardContext'


export default function ProductDetails({product}:any) {
  const [imageIndex,setImageIndex] = useState(0);
  const {quantity, increaseQunatity,decreaseQuantity, addProductToCart, cartItem}:any = useContext (createCartContext);
  console.log(cartItem);
  
  return (
    <div className="container mx-auto p-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Section */}
      <div>
        {/* Top Image */}
        <div className="h-[300px] sm:h-[450px] flex items-center justify-center mb-6">
          <img
            src={urlFor(product.image && product.image[imageIndex]).width(600).url()}
            alt="Product"
            className="object-contain mx-auto h-full w-full rounded-lg shadow-md"
          />
        </div>
  
        {/* Bottom Thumbnails */}
        <div className="flex gap-2 justify-center overflow-x-auto">
          {product.image?.map((item: any, index: number) => (
            <img
              key={index}
              src={urlFor(product.image && product.image[index]).width(150).url()}
              alt={`Thumbnail ${index + 1}`}
              className={`object-cover h-24 w-24 sm:h-32 sm:w-32 border rounded-xl hover:cursor-pointer transition-shadow duration-300 ${
                imageIndex === index ? 'shadow-xl border-black' : 'shadow-md'
              }`}
              onClick={() => setImageIndex(index)}
            />
          ))}
        </div>
      </div>
  
      {/* Right Section */}
      <div className="flex flex-col gap-6">
        {/* Product Name and Price */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900">
            {product.name}
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium font-serif text-gray-700 mt-2">
            Rs.{product.price}
          </h2>
          <p>{product.description}</p>
        </div>
  
        {/* Quantity Selector */}
        <div className="flex items-center gap-4">
          <h3 className="font-medium text-gray-600">Quantity:</h3>
          <div className="flex items-center border border-gray-400 rounded-lg px-4 py-2">
            <button
              className="text-red-500 hover:text-red-700 cursor-pointer" onClick={decreaseQuantity}>
              <AiOutlineMinus />
            </button>
            <span className="mx-4 font-semibold text-lg">{quantity}</span>
            <button
              className="text-green-500 hover:text-green-700 cursor-pointer" onClick={increaseQunatity}>
              <AiOutlinePlus />
            </button>
          </div>
        </div>
  
        {/* Add to Cart Button */}
        <button className="w-full md:w-auto px-5 py-2.5 rounded-lg text-sm font-medium border border-black bg-transparent hover:bg-black text-black hover:text-white transition-all duration-300" onClick={()=>addProductToCart(product,quantity)}>
          Add to Cart
        </button>
      </div>
    </div>
  </div>
  
      
  )
}

