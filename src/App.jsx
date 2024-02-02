import { Route, Routes } from 'react-router-dom'
import './App.css'
import ListPages from './pages/ListPage/ListPages'
import TypsPage from './pages/typsPage/TypsPage'
import { mainContext } from './context/mainProvider'
import DetailCard from './components/detailcard/DetailCard'
import DetailPage from './pages/detailPage/DetailPage'
import { useContext } from 'react'

function App() {

  const { darkMode, setDarkMode } = useContext(mainContext)


  return (
    <>
      <section className={`${darkMode ? "dark" : "light"}`} >

      <Routes>
        <Route path='/' element={<ListPages />}></Route>
        <Route path='/typsPage' element={<TypsPage/>}></Route>
        <Route path='/detailPage/:name' element={<DetailPage/>}></Route>
      </Routes>
      
      </section>
    </>
  )
}

export default App
