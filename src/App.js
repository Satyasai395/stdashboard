

import './App.css';
import Maindash from './components/MainDash/Maindash';
import Rightbar from './components/Rightbar/Rightbar';

import Sidebar from './components/Sidebar/Sidebar';


function App() {
  
  // const [value, onChange] = useState(new Date());
  return (
    <div className="App">
    <div className='Appglass'>
    <Sidebar />
    <Maindash />
    <Rightbar />
    
    </div>
    </div>
  );
}

export default App;
