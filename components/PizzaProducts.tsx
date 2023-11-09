interface IPizzaProductsProps {
  pizzaProducts: string[]
}

const PizzaProducts = ({ pizzaProducts }: IPizzaProductsProps) => {
  return (
    <div className="flex-1 text-[14px] mb-3">
      {pizzaProducts.map((product: string) => (
        <span key={product}> {product} </span>
      ))}
    </div>
  )
}

export default PizzaProducts
