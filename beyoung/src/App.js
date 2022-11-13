
import './App.css';

import Dashboard from './components/Admin/Dashboard';
import Footer from './components/Global/footer';
import Navbar from './components/Global/Navbar';
import AllRoutes from './components/Routes/AllRoutes';


function App() {
  return (
    <div className="App">
      <Navbar />
   <AllRoutes />
   <Footer />
    </div>
  );
}

export default App;
