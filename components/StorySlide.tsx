'use client'

import { SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { useState } from 'react'
interface ISlideProps {
  id: number
  image: string
}

interface IStorySlideProps {
  slide: ISlideProps
}

const StorySlide = ({ slide }: IStorySlideProps) => {
  const [activeStory, setActiveStory] = useState<boolean>(true)

  const removeActiveStory = (id: number) => {
    if (id) {
      setActiveStory(!activeStory)
    }
  }
  return (
    <div
      className={`relative w-[203.19px] h-[254px] rounded-3xl border-[3px]  ${
        activeStory ? 'border-primary' : 'border-transparent'
      } overflow-hidden`}
    >
      <div className="">
        <Image
          className={`w-full h-full cursor-pointer select-none p-0.5 rounded-3xl`}
          src={slide.image}
          fill
          style={{
            objectFit: 'contain',
          }}
          alt="slide image"
          onClick={() => removeActiveStory(slide.id)}
        />
      </div>
    </div>
  )
}

export default StorySlide
