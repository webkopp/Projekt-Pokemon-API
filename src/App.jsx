import { Route, Routes } from 'react-router-dom'
import './App.css'
import ListPages from './pages/ListPage/ListPages'
import TypsPage from './pages/typsPage/TypsPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<ListPages />}></Route>
        <Route path='/typsPage' element={<TypsPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
