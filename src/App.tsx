import { categoriesType } from "./@types/categoriesType"
import { Row } from "./components/Row"
import { categories } from "./lib/api"
import './App.css'
import { Banner } from "./components/Banner"
import { Nav } from "./components/Nav"

function App() {

  return (
    <div className='app'>
      <Nav/>
      <Banner/>
      {categories.map((category:categoriesType) => {
          return <Row 
            key={category.name}
            title={category.title}
            path={category.path}
            isLarge={category.isLarge}
          />
      })}
    </div>
  )
}

export default App
