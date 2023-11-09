import NavBar from '@/components/NavBar'
import PizzasItems from '@/components/PizzasITems'
import PopularItems from '@/components/PopularItems'
import StoriesSlides from '@/components/StoriesSlides'
export default function Home() {
  return (
    <main className="flex-auto">
      <NavBar />
      <StoriesSlides />
      <PopularItems />
      <PizzasItems />
    </main>
  )
}
