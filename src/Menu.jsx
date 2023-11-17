import MenuItems from './MenuItems'

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menu) => {
        return <MenuItems key={menu.id} {...menu} />
      })}
    </div>
  )
}
export default Menu
