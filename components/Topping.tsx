'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
//icons
import { RiCheckboxCircleLine } from 'react-icons/ri'
import { Dispatch, SetStateAction } from 'react'
interface IToppingProps {
  image: string
  name: string
  price: number
  setAddTopping: Dispatch<SetStateAction<ToppingProps[]>>
  addTopping: ToppingProps[]
  topping: ToppingProps
}

const Topping = ({
  image,
  name,
  price,
  setAddTopping,
  addTopping,
  topping,
}: IToppingProps) => {
  const [checked, setChecked] = useState(false)

  const handleTopping = () => {
    if (checked) {
      const newTopping = new Set([...addTopping, { ...topping }])
      setAddTopping(Array.from(newTopping))
    } else {
      const newTopping = addTopping.filter(
        (toppingObj) => toppingObj.name !== topping.name
      )
      setAddTopping(newTopping)
    }
  }

  const handleChange = () => {
    setChecked(!checked)
  }

  useEffect(() => {
    handleTopping()
  }, [checked])

  return (
    <label
      className={`shadow-[0_4px_20px_rgb(6,5,50,0.12)] rounded-xl w-[111px] h-[166px] flex items-center justify-center flex-col p-[8px] cursor-pointer relative transition-all duration-300 ${
        checked ? 'border  border-primary' : 'border border-transparent'
      }  `}
      onClick={handleTopping}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="hidden peer"
      />
      {checked && (
        <RiCheckboxCircleLine className="absolute top-1 right-1 w-6 h-6 text-primary transition-all duration-200 " />
      )}

      <div className=" min-w-[90px] min-h-[90px] relative ">
        <Image className="object-contain" src={image} fill alt="topping" />
      </div>
      <h3 className="text-[12px] text-center flex-1 select-none">{name}</h3>
      <div className="text-[15px] font-medium select-none">{price} тг.</div>
    </label>
  )
}

export default Topping
