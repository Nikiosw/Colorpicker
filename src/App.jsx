import "./index.css";


const Color = (props) => {
  return <div className={props.color}></div>
}
// Write your Color component here

const App = () => {
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className="red">red</div>
      </div>
      <div id="colors-list">{
          <div id="colors-list">
          <Color color="red"/>
          <Color color="green"/>
          <Color color="blue"/>
        </div>

      }</div>
    </div>
  );
};

export default App;
