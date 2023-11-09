import { Dispatch, SetStateAction } from 'react'
import Topping from './Topping'

interface IPizzaToppingsProps {
  toppings: ToppingProps[]
  addTopping: ToppingProps[]
  setAddTopping: Dispatch<SetStateAction<ToppingProps[]>>
}

const PizzaToppings = ({
  toppings,
  setAddTopping,
  addTopping,
}: IPizzaToppingsProps) => {
  return (
    <div>
      <div className="font-medium text-[20px] mb-3">Добавить по вкусу</div>
      <ul className="grid grid-cols-3 gap-2 w-full ">
        {toppings.map((topping: ToppingProps, index) => (
          <Topping
            key={`${index}_${topping.name}`}
            image={topping.image}
            name={topping.name}
            price={topping.price}
            setAddTopping={setAddTopping}
            addTopping={addTopping}
            topping={topping}
          />
        ))}
      </ul>
    </div>
  )
}

export default PizzaToppings
