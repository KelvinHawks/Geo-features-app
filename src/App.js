import Navbar from './components/Navbar';
import data from './components/Data'
import Content from './components/Content';
import './App.css';

function App() {

  const features = data.map(feature=>{
    return <Content
          key={feature.id}
          feature={feature}
        />
  })
  return (
    <div className="App">
      <div className='content'>
        <Navbar/>
        {features}
      </div>
    </div>
  );
}

export default App;
