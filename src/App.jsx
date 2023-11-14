import { useState } from 'react'
import data from './data.js'
import Title from './Components/Title.jsx'
import Categories from './Components/Categories.jsx'
import Menu from './Components/Menu.jsx'

const allCategories = ['all', ...new Set(data.map((item) => item.category))]
const App = () => {
  const [menuItems, setMenuItems] = useState(data)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(data)
      return
    }
    const newItems = data.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}
export default App
