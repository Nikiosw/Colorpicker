import "./index.css";
import {useState} from 'react';


const Color = ({color, setSelectedColor}) => {
  return (
  <div 
    className={color}
    onClick={() => setSelectedColor(color)}
  >

  </div>
  )
}
// Write your Color component here

const App = () => {
  const [selectedColor, setSelectedColor] = useState(null)
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      
      <div id="colors-list">
          <Color color="red" setSelectedColor={setSelectedColor}/>
          <Color color="green" setSelectedColor={setSelectedColor}/>
          <Color color="blue" setSelectedColor={setSelectedColor}/>
      </div>

      </div>
  );
};

export default App;
