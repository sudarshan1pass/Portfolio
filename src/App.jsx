
import Header from './Header'
import Home from './page/Home'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Project from './page/Project'
import About from './page/About'
import  Contact  from './page/Contact'
import Skill from './page/Skill'
import Homemain from './page/Homemain'




function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          index: true,
           element: <Homemain/>
        },
        {
          path: "Project",
           element: <Project />
        },
         {
          path: "Skill",
           element: <Skill />
        },
        {
          path: "about-us",
            element: <About />
        },
        {
          path: "contact-us",
           element: <Contact />
        },
        
      ]
    },
  ])

  return (
    <RouterProvider router={appRouter} />
  )
}

export default App
