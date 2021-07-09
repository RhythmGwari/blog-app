import './App.css';
import Navbar from './navbar';
import Newsletter from './Newsletter';
import Service from './Service-sec';
import Footer from './Footer';
import Blogs from './Blogs';

function App() {
  return (
    <div className="App">    
      <Navbar />
      {/* <Newsletter /> */}
      <Blogs />
      <Service />
      <Footer />  
    </div>
  );
}

export default App;
