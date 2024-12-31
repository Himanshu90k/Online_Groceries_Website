import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import MapPage from './pages/map/MapPage';
import LocationPage from './pages/location/LocationPage';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<HomePage />} />
        <Route path='/map' element={<MapPage />} />
        <Route path='/location' element={<LocationPage />} />
      </Route>
    ),
  );

  return <RouterProvider router={router} />
};

export default App;
