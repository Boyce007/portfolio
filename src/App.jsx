import './App.css'
import { useRoutes } from 'react-router-dom'
import Home from './pages/home'
import ContactInfo from './pages/ContactInfo'
import Projects from './pages/Projects'
function App() {

  let element = useRoutes([

    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/contact",
      element: <ContactInfo/>
    },
    {
      path:"/projects",
      element: <Projects/>
    },
  ])
  return (
    <>
    {element}
    </>
    
  )
}

export default App
