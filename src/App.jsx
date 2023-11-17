import { useState } from 'react'
import Title from './Title'
import menu from './data.js'
import Menu from './Menu.jsx'
import Categories from './Categories.jsx'
const allCategories = ['all', ...new Set(menu.map((item) => item.category))]

const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategories)
  const filterCategory = (category) => {
    if (category === 'all') {
      setMenuItems(menu)
      return
    }
    const newItems = menu.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  return (
    <main className="menu">
      <Title text="Our Menus" />
      <Categories categories={categories} filterCategory={filterCategory} />
      <Menu items={menuItems} />
    </main>
  )
}
export default App
