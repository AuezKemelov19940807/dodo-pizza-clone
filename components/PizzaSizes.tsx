import PizzaSize from './PizzaSize'

interface IPizzaSizesProps {
  sizeArr: number[]
  size: number
  pizzaSize: number[]
  setSize: (arg0: number) => void
}

const PizzaSizes = ({
  sizeArr,
  size,
  pizzaSize,
  setSize,
}: IPizzaSizesProps) => {
  return (
    <div className="bg-gray-100 rounded-full  py-1 px-1 mb-2">
      <ul className="flex justify-between overflow-hidden">
        {sizeArr.map((sizeItem) => (
          <PizzaSize
            key={sizeItem}
            size={size}
            pizzaSize={pizzaSize}
            setSize={setSize}
            sizeItem={sizeItem}
          />
        ))}
      </ul>
    </div>
  )
}

export default PizzaSizes
