interface IPizzaTypeProps {
  type: number
  size: number
  pizzaSize: number[]
  setType: (arg0: number) => void
  typeItem: number
}
const PizzaType = ({
  type,
  size,
  pizzaSize,
  setType,
  typeItem,
}: IPizzaTypeProps) => {
  return (
    <li
      className={` ${
        type === typeItem
          ? 'bg-white shadow-[5px_5px_20px_rgb(6,5,50,0.12)]'
          : 'bg-transparent'
      } ${
        size === pizzaSize[0] && typeItem ? 'text-gray-400 cursor-no-drop' : ''
      } text-[12px] py-2 rounded-full cursor-pointer select-none basis-2/4 flex items-center justify-center transition`}
      onClick={() => setType(typeItem)}
      key={typeItem}
    >
      {typeItem === 0 ? 'Традиционное' : 'Тонкое'}
    </li>
  )
}

export default PizzaType
