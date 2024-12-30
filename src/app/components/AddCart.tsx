import { useContext } from "react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet"
import { FiShoppingBag } from 'react-icons/fi'
import { createCartContext } from "./context/CardContext"
import { urlFor } from './ProductList'  
import { AiOutlineMacCommand, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { MdDelete } from "react-icons/md"

export default function AddCart() {
const {cartItem, totalQuantity, toggleCartItemQuantity, removeItemsFromCart} :any = useContext(createCartContext);
console.log(cartItem);

  return (
<Sheet>
  <SheetTrigger className="relative">
    <FiShoppingBag className="text-2xl" />
    <span className="absolute -top-3 left-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold">
     {totalQuantity}
    </span>
  </SheetTrigger>
  <SheetContent className="bg-white w-full max-w-md">
    <SheetHeader className="flex justify-between items-center px-4 py-2 border-b">
      <SheetTitle className="text-lg font-semibold">Your Cart</SheetTitle>
      <SheetTitle className="text-lg font-semibold">{totalQuantity}</SheetTitle>
    </SheetHeader>
    <SheetDescription className="mt-2 overflow-auto max-h-[70vh] px-4">
      {cartItem.map((product: any) => (
        <div
          className="flex gap-4 items-center py-4 border-b last:border-none"
          key={product._id}
        >
          <img
            src={urlFor(product.image && product.image[0]).url()}
            alt={product.name}
            className="h-32 w-32 rounded-md object-cover"
          />
          <div className="flex-1">
            <h1 className="text-sm font-medium text-[#2c2727]">
              {product.name}
            </h1>
            <p className="text-sm font-semibold">Rs. {product.price}</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1 border rounded" onClick={()=>toggleCartItemQuantity(product._id,'minus')}>
              <AiOutlineMinus />
            </button>
            <span className="text-sm">{product.quantity}</span>
            <button className="p-1 border rounded" onClick={()=>toggleCartItemQuantity(product._id,'plus')}>
              <AiOutlinePlus />
            </button>
          </div>
          <button className="text-red-500 text-xl" id="remove-item" onClick={()=>removeItemsFromCart(product)}>
            <MdDelete />
          </button>
        </div>
      ))}
    </SheetDescription>
    <div className="px-4 py-2 border-t">
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold">Subtotal</span>
        <span className="text-lg font-semibold">
          Rs.{" "}
          {cartItem.reduce(
            (total: number, product: any) =>
              total + product.price * product.quantity,
            0
          )}
        </span>
      </div>
    </div>
  </SheetContent>
</Sheet>


  )
}

  