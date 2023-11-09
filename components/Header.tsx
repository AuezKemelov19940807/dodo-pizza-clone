import HeaderContent from './HeaderContent'
import HeaderTop from './HeaderTop'
import NavBar from './NavBar'

const Header = () => {
  return (
    <div className="z-40">
      {/* header top */}
      <HeaderTop />
      {/* header content */}
      <HeaderContent />
    </div>
  )
}

export default Header
