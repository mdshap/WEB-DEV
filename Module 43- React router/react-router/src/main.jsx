import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router"
import Root from './components/root/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import Mobiles from './components/Mobiles/Mobiles.jsx'
import Users from './components/Users/Users.jsx'
import Users2 from './components/Users/Users2.jsx'
import UserDetails from './components/Users/UserDetails.jsx'


const usersPromise = fetch('https://jsonplaceholder.typicode.com/users')
.then (res => res.json())
  const router = createBrowserRouter([
        {
          path: '/',
          Component: Root,
          children: [
            {index: true, Component: Home},

            {path: 'mobiles', Component: Mobiles},

            {path: 'users',
              loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),  
            Component: Users
          },


            {
              path: 'users2', 
              loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
              element: <Suspense fallback={<span>Loading...</span>}>
                <Users2 usersPromise={usersPromise}/>
              </Suspense>

            },

            // send promise by id
            {
              path: 'users2/:userID',
              loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),
              Component: UserDetails
            }

          ]
        },
        {
          path: 'app',
          Component: App
        }
        
  ]
  )


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router={router}/>
  </StrictMode>,
)
