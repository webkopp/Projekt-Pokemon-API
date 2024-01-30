import { Route, Routes } from 'react-router-dom'
import './App.css'
import ListPages from './pages/ListPage/ListPages'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<ListPages />}></Route>
      </Routes>
    </>
  )
}

export default App
