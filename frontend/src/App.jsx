import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen'
import QuizzScreen from './Screens/QuizzScreen'
import { BrowserRouter } from 'react-router-dom'
import Layout from './Layout'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Layout />}>
          <Route index element={<HomeScreen />} />
          <Route path='/quizz' index element={<QuizzScreen />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
