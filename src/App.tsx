import { createBrowserRouter, RouterProvider, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AppLayout } from './layout/AppLayout';
import { Board } from './pages/Board';
import { useState, useEffect } from 'react';




function RootLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(location.pathname === '/auth/login');
  }, [location]);


  return (  
    <>
      <AppLayout>
        <Outlet />
        {showModal && (
         <div style={{ 
            position: 'fixed', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            background: 'white',
            padding: '20px',
            border: '1px solid black'
          }}>
            <h2>Login Modal</h2>
            <button onClick={() => navigate('/')}>Close</button>
          </div>
        )}
      </AppLayout>
    </>
  );
}

// Router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Board />,
      },
      {
        path: 'auth/login',
        element: <Board />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
