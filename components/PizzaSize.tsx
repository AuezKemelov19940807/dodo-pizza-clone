interface IPizzaSizeProps {
  size: number
  pizzaSize: number[]
  setSize: (arg0: number) => void
  sizeItem: number
}

const PizzaSize = ({ size, pizzaSize, setSize, sizeItem }: IPizzaSizeProps) => {
  return (
    <li
      className={` ${
        size === sizeItem
          ? 'bg-white shadow-[5px_5px_50px_rgb(6,5,50,0.12)]'
          : 'bg-transparent'
      } ${
        !pizzaSize.includes(sizeItem) ? 'text-gray-400  cursor-no-drop' : ''
      } text-[12px]  py-2 rounded-full cursor-pointer select-none basis-1/3 flex items-center justify-center`}
      onClick={() => {
        setSize(sizeItem)
      }}
    >
      {sizeItem === 25 && 'Mаленкая'}
      {sizeItem === 30 && 'Cредняя'}
      {sizeItem === 35 && 'Большая'}
    </li>
  )
}

export default PizzaSize
