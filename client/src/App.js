import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
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
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
