'use client'
import Modal from 'react-modal'
import { CSSTransition } from 'react-transition-group'
import Nav from './Nav'
import 'react-sticky-header/styles.css'
import CustomBtn from './CustomBtn'
import { GoArrowRight } from 'react-icons/go'
import { useState, useEffect, useRef } from 'react'
import Cart from './Cart'
import CartEmpty from './CartEmpty'
import { IoClose } from 'react-icons/io5'
import { AnimatePresence, motion } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '@/globalRedux/hooks/hooks'
import { toggleModal } from '@/globalRedux/features/cart/cartSlice'

const customStyles = {
  content: {
    top: '0px',
    right: '0px',
    width: '447px',
    height: '100%',
    marginLeft: 'auto',
    borderRadius: '0px',
    zindex: 10,
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.7)',
    zIndex: 9999,
  },
}

Modal.setAppElement('body')

const NavBar = () => {
  const dispatch = useAppDispatch()
  const items = useAppSelector((state) => state.cart.items)

  const getTotalPizzas = () => {
    let total = 0
    items.forEach((item) => {
      total += item.quantity
    })

    return total
  }

  return (
    <div className="py-3 bg-white/75 sticky top-0 backdrop-blur-xl mb-3 z-10">
      <div className="container flex items-center overflow-hidden relative ">
        <Nav />
        <CustomBtn
          bg="bg-primary  hover:bg-[#ef690a]"
          textColor="text-white"
          className=" relative group transition-all duration-300"
          onClick={() => {
            dispatch(toggleModal(true))
          }}
        >
          <div className="flex items-center  transition-all duration-300">
            <span className="">Корзина</span>
            {items.length > 0 && (
              <div className="relative h-[25px] flex">
                <div className="w-[1px] ml-3  h-full  bg-white/60"></div>
                <div className="ml-1 w-6 h-6 flex items-center justify-center ">
                  <span className="absolute group-hover:opacity-0 transition-all duration-300 text-sm ">
                    {getTotalPizzas()}
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 absolute transition-all duration-300 transform   group-hover:translate-x-[6px]">
                    <GoArrowRight className="w-[18px] h-[18px] text-white" />
                  </span>
                </div>
              </div>
            )}
          </div>
        </CustomBtn>
      </div>
    </div>
  )
}

export default NavBar
