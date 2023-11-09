'use client'

import Image from 'next/image'
//icons
import { GrFormClose } from 'react-icons/gr'
import { BiPlus, BiMinus } from 'react-icons/bi'
import { useAppSelector } from '@/globalRedux/hooks/hooks'

interface ICartItemProps {
  id: number
  image: string
  name: string
  type: number
  size: number
  quantity: number
  price: number
  toppings: ToppingProps[]
}

const CartItem = ({
  id,
  image,
  name,
  type,
  size,
  quantity,
  price,
  toppings,
}: ICartItemProps) => {
  const items = useAppSelector((state) => state.cart.items)

  return (
    <div className="bg-white mb-3 px-5 pt-5 relative">
      {/* top */}
      <div className="flex items-center gap-x-4 border-b pb-3">
        {/* remove btn */}
        <button className="absolute top-4 right-4">
          <GrFormClose className="w-6 h-6" />
        </button>
        {/* image */}
        <div>
          <Image src={image} width={60} height={60} alt="" />
        </div>
        {/* info */}
        <div>
          <h4 className="text-[16px] font-bold mb-[3px]">{name}</h4>
          <div className="text-[12px] text-gray-600">
            <span>
              {size === 25
                ? 'Маленькая'
                : size === 30
                ? 'Средняя'
                : size === 35
                ? 'Большая'
                : ''}
            </span>{' '}
            <span>{size} см,</span>
            <span> {type === 0 ? 'Традиционное' : 'Тонкое'} тесто</span>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="flex justify-between items-center py-3">
        {/* price */}
        <div className="font-bold">{price} тг.</div>
        <div className="flex items-center gap-x-4 bg-gray-100 px-2 py-1 rounded-full">
          <button>
            <BiMinus />
          </button>
          {quantity}
          <button>
            <BiPlus />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
