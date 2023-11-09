'use client'
import Image from 'next/image'
import { SwiperSlide, Swiper } from 'swiper/react'

const popularItems = [
  {
    id: 1,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/9934a65c2f3846dd989e359cacc72fb9_138x138.webp',
    name: 'Трюфельная',
    price: 2100,
  },
  {
    id: 2,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/23b6bb6dd79c463aa484f3641198cc05_138x138.webp',
    name: 'Какао',
    price: 700,
  },
  {
    id: 3,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/7128fbb6b69f4d488beea2f0fdc85cb1_138x138.webp',
    name: 'Картофельные смайлики',
    price: 500,
  },
  {
    id: 4,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/3868e78169f84a8895003a6578d17ae8_138x138.webp',
    name: 'Пицца Жюльен',
    price: 2700,
  },
  {
    id: 5,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/d870b05fc04546b19cffce0b6edb0b41_138x138.webp',
    name: 'Карамельное яблоко молочный коктейль',
    price: 1700,
  },
  {
    id: 6,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/d331463debf54401ac658d5511310bea_138x138.webp',
    name: 'Тирамису',
    price: 1300,
  },
  {
    id: 7,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/5ba9a16457b2453f9449d04ce7e996ad_138x138.webp',
    name: 'Банановый молочный коктейль',
    price: 1700,
  },
  {
    id: 8,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/85654fe20c754bfb94fac276e3341f40_138x138.png',
    name: 'Брауни',
    price: 900,
  },
  {
    id: 9,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/14223b5cb20e47c292c61fd0ca94876b_138x138.webp',
    name: 'Комбо от Смешариков',
    price: 2300,
  },
]

const PopularItems = () => {
  return (
    <div className=" py-6">
      <div>
        <div className="container font-medium text-xl">Часто заказывают</div>
        <div className="ml-[11%] xxl:ml-[15%]">
          <Swiper
            slidesPerView={5.7}
            breakpoints={{
              640: {
                slidesPerView: 2.2,
              },
              768: {
                slidesPerView: 3.2,
              },
              992: {
                slidesPerView: 4.2,
              },
              1024: {
                slidesPerView: 5.7,
              },
              1536: {
                slidesPerView: 5.7,
              },
            }}
          >
            {popularItems.map((popularItem) => {
              return (
                <SwiperSlide key={popularItem.id}>
                  {/* item */}
                  <div className="flex items-center gap-2 w-[260px] h-[112px] rounded-xl bg-white box-shadow hover:shadow transition-all duration-300 p-4 m-6 cursor-pointer">
                    {/* image */}
                    <div>
                      {' '}
                      <Image
                        src={popularItem.image}
                        width={80}
                        height={80}
                        alt={popularItem.name}
                      />{' '}
                    </div>
                    {/* info */}
                    <div>
                      {/* name */}
                      <div className="text-[12.5px] mb-1">
                        {popularItem.name}
                      </div>
                      {/* price */}
                      <div className="text-sm">{popularItem.price} тг.</div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-x-3">
            <div>
              <Image
                src={
                  'https://dodopizza-a.akamaihd.net/site-static/dist/f30f1ab8cd7a7a54476d.svg'
                }
                width={45}
                height={45}
                alt=""
              />
            </div>
            <div className="mt-[12px]">
              <p className="text-[16px]">Без свинины</p>
              <p className="text-gray-600 font-medium">
                Мы готовим из цыпленка и говядины
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularItems
