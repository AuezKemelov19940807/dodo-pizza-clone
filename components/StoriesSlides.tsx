'use client'

import Image from 'next/image'
import { MdArrowBackIos } from 'react-icons/md'

import React, { useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper/modules'
import StorySlide from './StorySlide'
const slides = [
  {
    id: 1,
    image:
      'https://cdn.inappstory.ru/story/ol9/nua/aia/nfko9cduk4ouyrpyfvg4hcc/custom_cover/logo-350x440.webp',
  },
  {
    id: 2,
    image:
      'https://cdn.inappstory.ru/story/psn/yis/jet/b5gldoj0pkupkiprtm11cwp/custom_cover/logo-350x440.webp',
  },
  {
    id: 3,
    image:
      'https://cdn.inappstory.ru/story/t7i/e0c/9b9/t607tbo1lhgknutakpbgaq1/custom_cover/logo-350x440.webp',
  },
  {
    id: 4,
    image:
      'https://cdn.inappstory.ru/story/w71/cyb/n0f/wejph2zdkb0yyoeotai2v71/custom_cover/logo-350x440.webp',
  },
  {
    id: 5,
    image:
      'https://cdn.inappstory.ru/story/1vo/s7f/mc9/b1zuamelvjgbtcgf1pighzr/custom_cover/logo-350x440.webp',
  },
  {
    id: 6,
    image:
      'https://cdn.inappstory.ru/story/4dr/piw/eq7/jqvg2z13yabt21sjehafswu/custom_cover/logo-350x440.webp',
  },
  {
    id: 7,
    image:
      'https://cdn.inappstory.ru/story/ndy/jrx/lbb/rdw5cpmjbvtxw0vo6ksmgqb/custom_cover/logo-350x440.webp',
  },
  {
    id: 8,
    image:
      'https://cdn.inappstory.ru/story/w8j/bms/k3w/3zwqoef3f3q7v4omxpx6lvb/custom_cover/logo-350x440.webp',
  },
  {
    id: 9,
    image:
      'https://cdn.inappstory.ru/story/kbg/0os/w5q/jcxzm7lhwxwr0m6tpdmuhcs/custom_cover/logo-350x440.webp',
  },
]
const StoriesSlides = () => {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  return (
    <div className="container relative">
      <div>
        <Swiper
          spaceBetween={25}
          slidesPerView={4.84}
          slidesPerGroup={5}
          navigation={{
            nextEl: '.arrow-left',
            prevEl: '.arrow-right',
            disabledClass: 'disabled_swiper_button',
          }}
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
            1536: {
              slidesPerView: 6,
            },
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="">
              <StorySlide slide={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button className="arrow-left arrow absolute top-[50%] -translate-y-[50%] -right-[32px]">
        <MdArrowBackIos
          className="w-[32px] h-[32px] text-primary font-bold cursor-pointer z-50 rotate-180"
          ref={navigationNextRef}
        />
      </button>
      <button
        className={`${
          slides.length === 0 ? 'opacity-0' : 'opacity-1'
        } arrow-right arrow absolute top-[50%] -translate-y-[50%] -left-[32px]`}
      >
        <MdArrowBackIos
          className=" w-[32px] h-[32px] text-primary font-black cursor-pointer  z-50"
          ref={navigationPrevRef}
        />
      </button>
    </div>
  )
}

export default StoriesSlides
