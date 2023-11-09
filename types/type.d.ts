interface CustomBtnProps {
  bg: string
  className?: string
  textColor: string
  onClick?: () => void
  children: React.ReactNode
  ref?:LegacyRef<HTMLButtonElement>
}


interface PizzaProps {
   id:number
   imageSm:string
   imageMd:string
   imageMdThin:string
   imageLg:string
   imageLgThin:string
   name:string
   products: string[]
   types:number[]
   size:number[]
   priceSm:number
   priceMd:number
   priceLg:number
   toppings: ToppingProps[]
}


  
interface ToppingProps {
  image: string
  name: string
  price: number
  available?: boolean
}