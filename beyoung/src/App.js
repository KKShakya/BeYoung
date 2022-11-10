
import './App.css';
import Navbar from './components/Global/Navbar';
import AllRoutes from './components/Routes/AllRoutes';
import Products from './components/UserSide/Pages/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
   <AllRoutes />
    </div>
  );
}

export default App;
