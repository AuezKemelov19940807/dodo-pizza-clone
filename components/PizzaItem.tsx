'use client'
import Image from 'next/image'
import CustomBtn from './CustomBtn'
import React, { useEffect, useState, useCallback } from 'react'
import Modal from 'react-modal'
import { IoClose } from 'react-icons/io5'
import PizzaToppings from './PizzaToppings'
import PizzaTypes from './PizzaTypes'
import PizzaSizes from './PizzaSizes'
import PizzaProducts from './PizzaProducts'
import { useAppDispatch } from '@/globalRedux/hooks/hooks'
import { addPizzaToCart } from '@/globalRedux/features/cart/cartSlice'
const customStyles = {
  content: {
    width: '900px',
    height: '600px',
    maxHeight: '100%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '20px',
    padding: '0px',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.7)',
    zIndex: 9999,
  },
}

const sizeArr = [25, 30, 35]
const typesArr = [0, 1]
interface IPizzaItemProps {
  pizza: PizzaProps
}

const PizzaItem = ({ pizza }: IPizzaItemProps) => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [size, setSize] = useState<number>(pizza.size[1])
  const [type, setType] = useState(typesArr[0])
  const [price, setPrice] = useState<number>(0)
  const [addTopping, setAddTopping] = useState<ToppingProps[]>([])
  const [addToppingPrice, setAddToppingPrice] = useState<number>(0)
  const [image, setImage] = useState<string>(pizza.imageLgThin)
  const dispatch = useAppDispatch()

  const handleAddPizzaToCart = () => {
    dispatch(
      addPizzaToCart({
        id: pizza.id,
        name: pizza.name,
        image: image,
        type: type,
        toppings: addTopping,
        price: price,
        size: size,
      })
    )
    closeModal()
  }

  useEffect(() => {
    if (size === pizza.size[0]) {
      setImage(pizza.imageSm)
      setType(typesArr[0])
    } else if (size === pizza.size[1]) {
      setImage(pizza.imageMd)
    } else if (size === pizza.size[2]) {
      setImage(pizza.imageLg)
    } else {
      setImage(pizza.imageSm)
    }
    if (pizza.types) {
      if (pizza.types[1] === type && size === pizza.size[1]) {
        setImage(pizza.imageMdThin)
      }
      if (pizza.types[1] === type && size === pizza.size[2]) {
        setImage(pizza.imageLgThin)
      }
    } else {
      setImage(pizza.imageMd)
    }

    if (!pizza.size.includes(size)) {
      setSize(pizza.size[0])
    }
  }, [
    image,
    pizza.imageSm,
    pizza.imageMd,
    pizza.imageLg,
    size,
    pizza.size,
    pizza.imageMdThin,
    pizza.imageLgThin,
    pizza.types,
    type,
  ])

  useEffect(() => {
    if (addTopping.length > 0) {
      const toppingPrice = addTopping.reduce((a, b) => a + b.price, 0)

      setAddToppingPrice(toppingPrice)
    } else {
      setAddToppingPrice(0)
    }
  }, [addTopping])

  const calc = useCallback(
    (price: number) => addToppingPrice + price,
    [addToppingPrice]
  )

  useEffect(() => {
    if (size === pizza.size[0]) {
      setPrice(calc(pizza.priceSm))
    } else if (size === pizza.size[1]) {
      setPrice(calc(pizza.priceMd))
    } else if (size === pizza.size[2]) {
      setPrice(calc(pizza.priceLg))
    }
  }, [pizza.priceLg, pizza.priceMd, pizza.priceSm, pizza.size, size, calc])

  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add('modal-show')
    } else {
      document.body.classList.remove('modal-show')
    }
  }, [modalIsOpen])

  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }
  return (
    <div>
      <div className="flex flex-col h-full">
        {/* image */}
        <div className="flex items-center justify-center">
          <Image src={pizza.imageMd} width={290} height={290} alt="pizza" />
        </div>
        {/* name */}
        <div className="text-[20px] my-[8px] leading-6 font-medium">
          {pizza.name}
        </div>
        <div className="flex-1 text-[13px] text-gray-700 ">
          {pizza.products.map((product: string) => (
            <span key={product}> {product} </span>
          ))}
        </div>
        <div className="flex items-center justify-between mt-[16px]">
          {/* price */}
          <div className="font-semibold">от {pizza.priceSm} тг.</div>
          {/* btn */}
          <CustomBtn
            bg="bg-primary/20 hover:bg-[#FFD2B3]"
            textColor="text-primary"
            onClick={openModal}
          >
            Выбрать
          </CustomBtn>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className="relative bg-white rounded-full z-10 "
      >
        <div className="absolute -right-[50px] text-white  z-40 transition-all duration-200 hover:scale-110 ">
          <button onClick={closeModal}>
            <IoClose className="w-[50px] h-[50px]" />{' '}
          </button>
        </div>

        <div className="h-full ">
          <div className="flex h-full">
            {/* image */}
            <div className="flex-1 relative items-center justify-center flex ">
              <Image
                className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] transition-all duration-300"
                src={image}
                width={
                  size === sizeArr[0]
                    ? 320
                    : size === sizeArr[1]
                    ? 400
                    : size === sizeArr[2]
                    ? 450
                    : 0
                }
                height={
                  size === sizeArr[0]
                    ? 320
                    : size === sizeArr[1]
                    ? 400
                    : size === sizeArr[2]
                    ? 450
                    : 0
                }
                alt=""
              />
            </div>
            {/* info */}
            <div className="bg-[#FCFCFC] rounded-r-[20px] z-0 w-[394px] ">
              <div className=" p-1 mt-4">
                <div className="h-[478px] py-3  overflow-hidden overflow-y-scroll  scrollbar-thin  scrollbar-thumb-[#DEDEDE] scrollbar-thumb-rounded-full scrollbar-track-[#FCFCFC] px-4 ">
                  <div className="font-medium text-[22px]">{pizza.name}</div>
                  <div className="text-[13px] text-gray-700 mb-1">
                    <span>{size} см,</span>{' '}
                    <span className="lowercase">
                      {type === 0 ? 'Традиционное' : 'Тонкое'} тесто,
                    </span>{' '}
                    <span>
                      {size === 25 && '350'}
                      {size === 30 && '500'}
                      {size === 35 && '700'}г
                    </span>
                  </div>
                  {/* products */}
                  <PizzaProducts pizzaProducts={pizza.products} />
                  {/* sizes */}
                  <PizzaSizes
                    sizeArr={sizeArr}
                    size={size}
                    pizzaSize={pizza.size}
                    setSize={setSize}
                  />
                  {/* types */}
                  {pizza.types && (
                    <PizzaTypes
                      type={type}
                      size={size}
                      pizzaSize={pizza.size}
                      setType={setType}
                      typesArr={typesArr}
                    />
                  )}
                  {/* toppings */}
                  <PizzaToppings
                    toppings={pizza.toppings}
                    setAddTopping={setAddTopping}
                    addTopping={addTopping}
                  />
                </div>
              </div>
              <div className="px-4">
                <CustomBtn
                  className="w-full py-3 mt-6"
                  bg="bg-primary hover:bg-[#ef690a]"
                  textColor="text-white"
                  onClick={handleAddPizzaToCart}
                >
                  Добавить в карзину за {price} тг.
                </CustomBtn>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default PizzaItem
