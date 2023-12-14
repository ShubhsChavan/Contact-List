
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
//importing components
import { Home } from './components/home/Home';
import Navbar from './components/navbar/Navbar';
//importing pages
import AddToContact from './pages/AddToContact/AddToContact';
import EditContact from './pages/EditContact/EditContact';
import CustomeContext from './context';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {

  const router= createBrowserRouter([
    {path: "/", element: <Navbar/>, children:[
      {path: "/", element: <Home/>},
      {path: "/Contact-list", element: <Home/>},
      {path : 'add-contact' , element : <AddToContact /> },
      {path : 'edit-contact/:id' , element : <EditContact/>}
    ]}
  ]);
  return (
    <CustomeContext>
      <ToastContainer />
      <div className="App">
        {/* Assigning Routes */}
        <RouterProvider router={router} />
      
      </div>
    </CustomeContext>
  );
}

export default App;
