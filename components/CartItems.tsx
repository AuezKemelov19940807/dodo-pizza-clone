import { useAppSelector } from '@/globalRedux/hooks/hooks'
//components
import CartItem from './CartItem'

const CartItems = () => {
  const items = useAppSelector((state) => state.cart.items)
  const totalQuantity = items.reduce((a, b) => a + b.quantity, 0)
  const totalPrice = items.reduce((a, b) => a + b.price * b.quantity, 0)
  return (
    <div className="bg-gray-100 py-5  w-full h-full">
      <div className="px-5 text-[22px] font-medium">
        <span>
          {totalQuantity} {totalQuantity === 1 ? 'товар' : 'товаров'}
        </span>{' '}
        на {totalPrice}
         тг.
      </div>
      {items.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  )
}

export default CartItems
