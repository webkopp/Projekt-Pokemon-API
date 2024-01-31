import { Route, Routes } from 'react-router-dom'
import './App.css'
import ListPages from './pages/ListPage/ListPages'
import TypsPage from './pages/typsPage/TypsPage'
import DetailCard from './components/detailcard/DetailCard'
import DetailPage from './pages/detailPage/DetailPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<ListPages />}></Route>
        <Route path='/typsPage' element={<TypsPage/>}></Route>
        <Route path='/detailPage/:name' element={<DetailPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
