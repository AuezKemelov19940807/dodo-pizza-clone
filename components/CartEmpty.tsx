import Image from 'next/image'

const CartEmpty = () => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="flex items-center justify-center flex-col text-center">
        {/* image */}
        <div className="mb-5">
          <Image
            src="https://dodopizza-a.akamaihd.net/site-static/dist/121df529925b0f43cc73.svg"
            width={314}
            height={205}
            alt=""
          />
        </div>
        {/* description */}
        <div>
          {/* title */}
          <h3 className="text-xl text-semibold mb-6">Ой, пусто!</h3>
          {/* text */}
          <p className="text-[13px] max-w-[280px] leading-5">
            Ваша корзина пуста, откройте «Меню» и выберите понравившийся товар.
            Мы доставим ваш заказ от 3 500 тг.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CartEmpty
