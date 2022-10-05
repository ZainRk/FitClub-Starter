import './App.css';
import Hero from './Components/Hero/Hero';
import Plans from './Components/Plans/Plans';
import Programs from './Components/Programs/Programs';
import Reasons from './Components/Reasons/Reasons';
function App() {
  return (
    <div className='app' >
          <Hero/>
          <Programs/>
          <Reasons/>
          <Plans/>
    </div>
  );
}

export default App;
