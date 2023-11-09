import PizzaItem from './PizzaItem'
const fetchPizzasITems = async () => {
  const res = await fetch('https://6544e3675a0b4b04436d2883.mockapi.io/pizzas')
  return res.json()
}

const PizzasItems = async () => {
  const pizzas = await fetchPizzasITems()

  return (
    <section id="pizza" className="container py-[32px]">
      <div className="my-[32px] text-[36px] font-semibold ">Пиццы</div>
      <div className=" grid sm:grid-cols-1 gap-y-8 sm:gap-x-4 xl:gap-x-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {pizzas.map((pizza: PizzaProps) => (
          <PizzaItem key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </section>
  )
}

export default PizzasItems
