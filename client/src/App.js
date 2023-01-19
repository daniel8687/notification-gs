import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';
import NavigationBar from './pages/components/NavigationBar';
import Footer from './pages/components/Footer';
import Home from './pages/Home';
import Logs from './pages/Logs';
import Submissions from './pages/Submissions';
import Users from './pages/Users';

const Layout = () => {
  return (
    <>
      <NavigationBar/>
      <Outlet/>
      <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/user",
        element: <Users/>
      },
      {
        path: "/logs",
        element: <Logs/>
      },
      {
        path: "/submission",
        element: <Submissions/>
      }
    ]
  }
]);



function App() {
  return (
    <div className='app'>
      <div className='container'>
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
