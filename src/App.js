import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Main from './Component/Main/Main';
import Blog from './Component/Blog/Blog';
import AddService from './Component/AddService/AddService';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import CardDetails from './Component/CardDetails/CardDetails';
import MyReview from './Component/MyReview/MyReview';
import PrivateRouter from './Component/PrivateRoute/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/adservice',
                element: <PrivateRouter><AddService></AddService></PrivateRouter>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/photo-service/:id',
                element: <CardDetails></CardDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/photo-service/${params.id}`)
            },
            {
                path: '/mycomments',
                element: <PrivateRouter><MyReview></MyReview></PrivateRouter>
            }
        ]
    }
])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
