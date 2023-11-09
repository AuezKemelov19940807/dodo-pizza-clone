import PizzaType from './PizzaType'

interface IPizzaTypes {
  type: number
  size: number
  pizzaSize: number[]
  setType: (arg0: number) => void
  typesArr: number[]
}

const PizzaTypes = ({
  type,
  size,
  pizzaSize,
  setType,
  typesArr,
}: IPizzaTypes) => {
  return (
    <div className="bg-gray-100 rounded-full  py-1 px-1 mb-5">
      <ul className="flex overflow-hidden ">
        {typesArr.map((typeItem) => (
          <PizzaType
            key={typeItem}
            type={type}
            size={size}
            pizzaSize={pizzaSize}
            setType={setType}
            typeItem={typeItem}
          />
        ))}
      </ul>
    </div>
  )
}

export default PizzaTypes
